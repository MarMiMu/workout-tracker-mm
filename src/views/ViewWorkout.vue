<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <!-- App Message -->
    <div
      v-if="statusMsg || errorMsg"
      class="mb-10 p-4 rounded-md shadow-md bg-light-grey"
    >
      <p class="text-wt-blue">{{ statusMsg }}</p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
    <div v-if="dataLoaded" class="">
      <!-- General Workout Info -->
      <div
        class="
          flex flex-col
          items-center
          p-8
          rounded-md
          shadow-md
          bg-light-grey
          relative
        "
      >
        <div v-if="user" class="flex absolute left-2 top-2 gap-x-2">
          <div
            class="
              h-7
              w-7
              rounded-full
              flex
              justify-center
              items-center
              cursor-pointer
              bg-wt-blue
              shadow-lg
            "
            @click="editMode"
          >
            <img
              src="@/assets/images/pencil-light.png"
              class="h-3.5 w-auto"
              alt=""
            />
          </div>
          <div
            class="
              h-7
              w-7
              rounded-full
              flex
              justify-center
              items-center
              cursor-pointer
              bg-wt-blue
              shadow-lg
            "
            @click="deleteWorkout"
          >
            <img
              src="@/assets/images/trash-light.png"
              class="h-3.5 w-auto"
              alt=""
            />
          </div>
        </div>
        <img
          v-if="data.workoutType === 'cardio'"
          class="h-24 w-auto"
          src="@/assets/images/running-blue.png"
          alt=""
        />
        <img
          v-else
          class="h-24 w-auto"
          src="@/assets/images/dumbbell-blue.png"
          alt=""
        />
        <span
          class="
            mt-6
            py-1.5
            px-5
            text-xs text-white
            bg-wt-blue
            rounded-lg
            shadow-md
          "
          >{{ data.workoutType }}
        </span>
        <div v-if="data.workoutType !== 'cardio'" class="flex justify-center">
          <span
            v-for="(muscle, index) in data.muscleGroups"
            :key="index"
            class="
              mt-6
              mx-1
              py-1.5
              px-5
              text-xs text-white
              bg-wt-blue
              rounded-lg
              shadow-md
            "
            >{{ muscle }}
          </span>
        </div>
        <div class="w-full mt-6">
          <input
            v-if="edit"
            type="date"
            class="p-2 w-full text-gray-500 focus:outline-none"
            v-model="data.workoutDate"
          />
          <h1 v-else class="text-wt-blue text-2xl text-center">
            {{ data.workoutDate }}
          </h1>
        </div>
      </div>
      <!-- Exercises -->
      <div
        class="
          mt-10
          p-8
          rounded-md
          flex flex-col
          item-center
          bg-light-grey
          shadow-md
        "
      >
        <!-- Strength Training -->
        <div
          v-if="
            data.workoutType === 'Strength' ||
            data.workoutType === 'Hypertrophy'
          "
          class="flex flex-col gap-y-4 w-full"
        >
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
          >
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-wt-blue"
                >Exercise</label
              >
              <input
                id="exercise-name"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.exercise"
              />
              <p v-else>{{ item.exercise }}</p>
            </div>
            <div class="flex flex-col flex-1">
              <label for="muscle" class="mb-1 text-sm text-wt-blue"
                >Muscle</label
              >
              <select
                id="muscle-group"
                v-if="edit"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.muscleGroup"
              >
                <option value="Back">Back</option>
                <option value="Chest">Chest</option>
                <option value="Bicep">Bicep</option>
                <option value="Tricep">Tricep</option>
                <option value="Legs">Legs</option>
                <option value="Shoulders">Shoulders</option>
              </select>
              <p v-else>{{ item.muscleGroup }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="sets" class="mb-1 text-sm text-wt-blue">Sets</label>
              <input
                id="sets"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.sets"
              />
              <p v-else>{{ item.sets }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="reps" class="mb-1 text-sm text-wt-blue">Reps</label>
              <input
                id="reps"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.reps"
              />
              <p v-else>{{ item.reps }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="weight" class="mb-1 text-sm text-wt-blue"
                >Weight (LB's)</label
              >
              <input
                id="weight"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.weight"
              />
              <p v-else>{{ item.weight }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="notes" class="mb-1 text-sm text-wt-blue">Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-if="edit"
                v-model="item.notes"
              ></textarea>
              <p v-else>{{ item.notes }}</p>
            </div>
            <img
              @click="deleteExercise(item.id)"
              v-if="edit"
              class="absolute h-4 w-auto -left-5 cursor-pointer"
              src="@/assets/images/trash-blue.png"
              alt=""
            />
          </div>
          <button
            @click="addExercise"
            v-if="edit"
            type="button"
            class="
              mt-6
              py-2
              px-6
              rounded-sm
              self-start
              text-sm text-white
              bg-wt-blue
              duration-200
              border-solid border-2 border-transparent
              hover:border-wt-blue hover:bg-white hover:text-wt-blue
            "
          >
            Add Exercise
          </button>
        </div>
        <!-- Cardio -->
        <div v-else class="flex flex-col gap-y-4 w-full">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
          >
            <div class="flex flex-2 flex-col md:w-1/3">
              <label for="cardioType" class="mb-1 text-sm text-wt-blue"
                >Type</label
              >
              <select
                id="cardioType"
                v-if="edit"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.cardioType"
              >
                <option value="#">Select Type</option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
              </select>
              <p v-else>{{ item.cardioType }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="distance" class="mb-1 text-sm text-wt-blue"
                >Distance</label
              >
              <input
                id="distance"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.distance"
              />
              <p v-else>{{ item.distance }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="duration" class="mb-1 text-sm text-wt-blue"
                >Duration</label
              >
              <input
                id="duration"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.duration"
              />
              <p v-else>{{ item.duration }}</p>
            </div>
            <div class="flex flex-1 flex-col">
              <label for="pace" class="mb-1 text-sm text-wt-blue">Pace</label>
              <input
                id="pace"
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.pace"
              />
              <p v-else>{{ item.pace }}</p>
            </div>
            <img
              @click="deleteExercise(item.id)"
              v-if="edit"
              class="absolute h-4 w-auto -left-5 cursor-pointer"
              src="@/assets/images/trash-blue.png"
              alt=""
            />
          </div>
          <button
            @click="addExercise"
            type="button"
            v-if="edit"
            class="
              mt-6
              py-2
              px-6
              rounded-sm
              self-start
              text-sm text-white
              bg-wt-blue
              duration-200
              border-solid border-2 border-transparent
              hover:border-wt-blue hover:bg-white hover:text-wt-blue
            "
          >
            Add Exercise
          </button>
        </div>
      </div>
      <!-- Update  -->
      <button
        @click="update"
        type="button"
        v-if="edit"
        class="
          mt-10
          py-2
          px-6
          rounded-sm
          self-start
          text-sm text-white
          bg-wt-blue
          duration-200
          border-solid border-2 border-transparent
          hover:border-wt-blue hover:bg-white hover:text-wt-blue
        "
      >
        Update Workout
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { supabase } from "../supabase/init";
import { useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import store from "../store/index";

export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errorMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();
    const router = useRouter();
    const user = computed(() => store.state.user);
    const temp = ref([]);
    // Get current Id of route
    const currentId = route.params.workoutId;

    // Get workout data
    const getData = async () => {
      try {
        const { data: workouts, error } = await supabase
          .from("workouts")
          .select("*")
          .eq("id", currentId);
        if (error) throw error;
        data.value = workouts[0];
        dataLoaded.value = true;
      } catch (error) {
        errorMsg.value = error.message;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    };

    getData();

    // Delete workout
    const deleteWorkout = async () => {
      try {
        const { error } = await supabase
          .from("workouts")
          .delete()
          .eq("id", currentId);
        if (error) throw error;
        router.push({ name: "Home" });
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    };
    // Edit mode
    const edit = ref(null);
    const editMode = () => {
      edit.value = !edit.value;
    };

    // Add exercise
    const addExercise = () => {
      if (
        data.value.workoutType === "Strength" ||
        data.value.workoutType === "Hypertrophy"
      ) {
        data.value.exercises.push({
          id: uid(),
          exercises: "",
          muscleGroup: "",
          sets: "",
          reps: "",
          weight: "",
          notes: "",
        });
        return;
      }
      data.value.exercises.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: "",
      });
    };
    // Delete exercise
    const deleteExercise = (id) => {
      if (data.value.exercises.length > 1) {
        data.value.exercises = data.value.exercises.filter(
          (exercise) => exercise.id !== id
        );
        return;
      }
      errorMsg.value =
        "Error: Cannot remove - need to have at least one exercise";
      setTimeout(() => {
        errorMsg.value = false;
      }, 5000);
    };
    // Update Workout
    const update = async () => {
      for (let index = 0; index < data.value.exercises.length; index++) {
        temp.value.push(data.value.exercises[index].muscleGroup);
      }
      data.value.muscleGroups = [...new Set(temp.value)];
      try {
        const { error } = await supabase
          .from("workouts")
          .update({
            workoutDate: data.value.workoutDate,
            exercises: data.value.exercises,
            muscleGroups: data.value.muscleGroups,
          })
          .eq("id", currentId);
        if (error) throw error;
        edit.value = false;
        statusMsg.value = "Success - Workout Updated";
        setTimeout(() => {
          statusMsg.value = false;
        }, 5000);
      } catch (error) {
        errorMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errorMsg.value = false;
        }, 5000);
      }
    };
    return {
      statusMsg,
      data,
      dataLoaded,
      errorMsg,
      edit,
      editMode,
      user,
      deleteWorkout,
      addExercise,
      deleteExercise,
      update,
    };
  },
};
</script>
