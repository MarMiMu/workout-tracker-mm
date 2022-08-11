<template>
  <div v-if="dataLoaded" class="container mt-10 px-4">
    <!-- No Data -->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link
        :to="{ name: 'Create' }"
        class="
          mt-6
          py-2
          px-6
          rounded-sm
          text-sm text-white
          bg-wt-blue
          duration-200
          border-solid border-2 border-transparent
          hover:border-wt-blue hover:bg-white hover:text-wt-blue
        "
        >Create Workout</router-link
      >
    </div>
    <!-- Data -->
    <div
      v-else
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      <!-- <button @click="filterData">Filter Data</button> -->
      <router-link
        class="
          flex flex-col
          items-center
          bg-light-grey
          p-8
          shadow-md
          cursor-pointer
        "
        :to="{ name: 'View-Workout', params: { workoutId: workout.id } }"
        v-for="(workout, index) in data"
        :key="index"
      >
        <!-- Cardio Image -->
        <img
          v-if="workout.workoutType === 'cardio'"
          src="@/assets/images/running-blue.png"
          alt=""
          class="h-24 w-auto"
        />
        <!-- Strength Training Image -->
        <img
          v-else
          src="@/assets/images/dumbbell-blue.png"
          alt=""
          class="h-24 w-auto"
        />
        <p
          class="
            mt-4
            py-1
            px-3
            text-xs text-white
            bg-wt-blue
            shadow-md
            rounded-lg
          "
        >
          {{ workout.workoutType }}
        </p>
        <div
          v-if="workout.workoutType !== 'cardio'"
          class="flex justify-center"
        >
          <p
            v-for="(muscle, index) in workout.muscleGroups"
            :key="index"
            class="
              mt-4
              mx-1
              py-1
              px-3
              text-xs text-white
              bg-wt-blue
              shadow-md
              rounded-lg
            "
          >
            {{ muscle }}
          </p>
        </div>
        <h1 class="mt-8 mb-2 text-center text-xl text-wt-blue">
          {{ workout.workoutDate }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);

    // Get data
    const getData = async () => {
      let indexes = [];
      try {
        const { data: workouts, error } = await supabase
          .from("workouts")
          .select("*");
        if (error) throw error;
        // data.value = workouts;
        console.log(workouts);
        workouts.forEach((item) => indexes.push(item.id));
        indexes = indexes.sort().reverse();
        indexes.forEach((index) => {
          workouts.forEach((item) => {
            if (item.id === index) {
              data.value.push(item);
            }
          });
        });
        console.log(data.value);
        // test.sort().forEach((item) => data.value.push(workouts[item]));
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };

    // Filter Data
    const filterData = async () => {
      try {
        const { data: workouts, error } = await supabase
          .from("workouts")
          .select("*")
          .eq("workoutType", "strength");
        if (error) throw error;
        data.value = workouts;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function
    getData();
    return { data, dataLoaded, filterData };
  },
};
</script>
