<template>
  <header class="bg-wt-blue text-white">
    <nav
      class="
        container
        py-5
        px-4
        flex flex-column
        gap-4
        items-center
        justify-items-center
        sm:flex-row
      "
    >
      <router-link class="cursor-pointer w-1/2" :to="{ name: 'Home' }">
        <div class="flex items-center gap-x-4">
          <img class="w-14" src="../assets/images/dumbbell-light.png" alt="" />
          <h1 class="text-lg">Workout Tracker</h1>
        </div>
      </router-link>
      <div
        ref="navbar"
        class="
          fixed
          right-0
          top-0
          bg-white
          w-1/2
          h-full
          translate-x-full
          z-5
          transition-transform
          duration-500
          ease-in-out
          sm:static
          sm:justify-items-center
          sm:w-full
          sm:flex
          sm:flex-column
          sm:py-5
          sm:px-4
          sm:gap-4
          sm:items-center
          sm:bg-wt-blue
        "
      >
        <font-awesome-icon
          icon="times-circle"
          id="close"
          class="block text-black float-right mr-4 mt-9 text-2xl sm:hidden z-5"
          @click="closeNav"
        />
        <ul
          class="
            text-black
            mt-32
            sm:flex sm:flex-1 sm:justify-end sm:gap-x-10 sm:text-white sm:mt-0
          "
        >
          <router-link
            class="
              cursor-pointer
              block
              mt-4
              ml-4
              hover:underline hover:decoration-white
              sm:mt-2
            "
            :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link
            v-if="user"
            class="
              cursor-pointer
              block
              mt-4
              ml-4
              hover:underline hover:decoration-white
              sm:mt-2
            "
            :to="{ name: 'Create' }"
            >Create</router-link
          >
          <router-link
            v-if="!user"
            class="
              cursor-pointer
              block
              mt-4
              ml-4
              hover:underline hover:decoration-white
              sm:mt-2
            "
            :to="{ name: 'Login' }"
            >Login</router-link
          >
          <li
            v-if="user"
            @click="logout"
            class="
              cursor-pointer
              block
              mt-4
              ml-4
              hover:underline hover:decoration-white
              sm:mt-2
            "
          >
            Logout
          </li>
        </ul>
      </div>
      <font-awesome-icon
        icon="bars"
        id="menu"
        class="static sm:hidden text-2xl ml-48 z-1"
        @click="openNav"
      />
    </nav>
  </header>
</template>

<script>
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";
import store from "../store/index";
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    const navbar = ref(null);
    // Get user from store
    const user = computed(() => store.state.user);
    // Setup ref to router
    const router = useRouter();
    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "Home" });
    };
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      if (screen.width < 640) {
        navbar.value.classList.add("test");
      }
    });

    const closeNav = () => {
      navbar.value.classList.remove("openNav");
    };

    const openNav = () => {
      navbar.value.classList.add("openNav");
    };
    return { logout, user, navbar, closeNav, openNav };
  },
};
</script>
<style>
.test {
  transform: translateX(100%);
}
.openNav {
  transform: translateX(0%);
}
</style>
