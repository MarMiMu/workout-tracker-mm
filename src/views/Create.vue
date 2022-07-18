<template>
  <div class="max-w-screen-lg mx-auto px-4 py-10">
    <!-- Status Message -->
    <div
      v-if="statusMsg || errorMsg"
      class="mb-10 p-4 bg-light-grey rounded-md shadow-lg"
    >
      <p class="text-wt-blue">{{ statusMsg }}</p>
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>
    <!-- Create Form -->
    <div class="p-8 flex item-start bg-light-grey rounded-md shadow-lg">
      <!-- Form -->
      <form
        @submit.prevent="createWorkout"
        class="flex flex-col gap-y-5 w-full"
      >
        <h1 class="text-2xl text-wt-blue">Record Workout</h1>
        <!-- Workout Name -->
        <div class="flex flex-col">
          <label for="workout-date" class="mb-1 text-sm text-wt-blue"
            >Workout Date</label
          >
          <input
            @change="dateFormat"
            type="date"
            required
            class="p-2 text-gray-500 focus:outline-none"
            id="workout-date"
            v-model="workoutDate"
          />
        </div>
        <!-- Workout Type -->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-wt-blue"
            >Workout Type</label
          >
          <select
            id="workout-type"
            required
            class="p-2 text-gray-500 focus:outline-none"
            @change="workoutChange"
            v-model="workoutType"
          >
            <option value="select-workout">Select Workout</option>
            <option value="Strength">Strength</option>
            <option value="Hypertrophy">Hypertrophy</option>
            <option value="Cardio">Cardio</option>
          </select>
        </div>
        <!-- Strength Training Inputs -->
        <div
          v-if="workoutType === 'Strength' || workoutType === 'Hypertrophy'"
          class="flex flex-col gap-y-4"
        >
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/4">
              <label
                for="
          exercise-name"
                class="mb-1 text-sm text-wt-blue"
                >Exercise</label
              >
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.exercise"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="muscle" class="mb-1 text-sm text-wt-blue"
                >Muscle</label
              >
              <select
                required
                id="muscle-group"
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
            </div>
            <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-wt-blue">Sets</label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.sets"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-wt-blue">Reps</label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.reps"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-wt-blue"
                >Weight (LB's)</label
              >
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.weight"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="notes" class="mb-1 text-sm text-wt-blue">Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                v-model="item.notes"
                class="text-sm"
              ></textarea>
            </div>
            <img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-blue.png"
              alt=""
              class="h-4 w-auto absolute -left-5 cursor-pointer"
            />
          </div>
          <button
            @click="addExercise"
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
        <!-- Cardio Inputs -->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
            v-for="(item, index) in exercises"
            :key="index"
          >
            <div class="flex flex-col md:w-1/3">
              <label for="cardio-type" class="mb-1 text-sm text-wt-blue"
                >Type</label
              >
              <select
                id="cardio-type"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.cardioType"
              >
                <option value="#">Select Type</option>
                <option value="run">Run</option>
                <option value="walk">Walk</option>
              </select>
            </div>
            <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-wt-blue"
                >Distance</label
              >
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.distance"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-wt-blue"
                >Duration</label
              >
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.duration"
              />
            </div>
            <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-wt-blue">Pace</label>
              <input
                required
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.pace"
              />
            </div>
            <img
              @click="deleteExercise(item.id)"
              src="@/assets/images/trash-blue.png"
              alt=""
              class="h-4 w-auto absolute -left-5 cursor-pointer"
            />
          </div>
          <button
            @click="addExercise"
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
        <button
          type="submit"
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
          Record Workout
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { uid } from "uid";
import { supabase } from "../supabase/init";

export default {
  name: "create",

  setup() {
    // Create data
    const workoutDate = ref("");
    const workoutType = ref("select-workout");
    const muscleGroups = ref([]);
    const exercises = ref([]);
    const temp = ref([]);
    const statusMsg = ref(null);
    const errorMsg = ref(null);

    // Add exercise
    const addExercise = () => {
      if (
        workoutType.value === "Strength" ||
        workoutType.value === "Hypertrophy"
      ) {
        exercises.value.push({
          id: uid(),
          exercise: "",
          muscleGroup: "",
          sets: "",
          reps: "",
          weight: "",
          notes: "",
        });
        return;
      }
      exercises.value.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: "",
      });
    };

    // Delete exercise
    const deleteExercise = (id) => {
      if (exercises.value.length > 1) {
        exercises.value = exercises.value.filter(
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
    // Listens for chaging of workout type input
    const workoutChange = () => {
      exercises.value = [];
      addExercise();
    };
    // Create workout
    const createWorkout = async () => {
      try {
        for (let index = 0; index < exercises.value.length; index++) {
          temp.value.push(exercises.value[index].muscleGroup);
        }
        muscleGroups.value = [...new Set(temp.value)];
        const { error } = await supabase.from("workouts").insert([
          {
            workoutDate: workoutDate.value,
            workoutType: workoutType.value,
            exercises: exercises.value,
            muscleGroups: muscleGroups.value,
          },
        ]);
        if (error) throw error;
        statusMsg.value = "Success: Workout Created!";
        workoutDate.value = null;
        workoutType.value = "select-workout";
        exercises.value = [];
        muscleGroups.value = [];
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
      workoutDate,
      workoutType,
      exercises,
      muscleGroups,
      statusMsg,
      errorMsg,
      addExercise,
      deleteExercise,
      workoutChange,
      createWorkout,
    };
  },
};
</script>
