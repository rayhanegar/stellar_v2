<script setup>
import { ref, computed } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import { Link } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);

</script>

<template>
  <div class="flex h-screen bg-black text-white bg-gradient-to-br from-black from-30% to-lavender/80">
    <!-- Sidebar -->
    <nav class="py-10 px-5 w-1/6 bg-black text-white flex flex-col justify-between">

        <!-- Logo -->
        <div class="flex items-center">
            <Link :href="route('dashboard')">
                <ApplicationLogo class="block h-9 w-auto fill-current text-gray-800" />
            </Link>
        </div>

        <!-- Top-half Navigation Links -->
        <div class="flex flex-col space-y-3">
            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                Today
            </NavLink>
            <NavLink :href="route('journals.index')" :active="route().current('journals.index')">
                Journals
            </NavLink>
            <NavLink :href="route('snaps')" :active="route().current('snaps')">
                Snaps
            </NavLink>
            <NavLink :href="route('reflections')" :active="route().current('reflections')">
                Reflections
            </NavLink>
            <!-- Add more navigation links here as needed -->
        </div>

        <!-- Bottom-half Navigation Links -->
        <div class="flex flex-col space-y-5">
            <NavLink :href="route('profile.edit')" :active="route().current('profile.edit')">
                Profile
            </NavLink>
            <NavLink :href="route('logout')" method="post" class="text-red">
                Logout
            </NavLink>
        </div>

    </nav>

    <!-- Main Content -->
    <div class="flex-1 bg-black/20 backdrop-blur-lg rounded-lg border border-mediumgrey shadow-lg px-5 mx-5 py-5 my-5 overflow-auto">
      <!-- Page Heading -->
      <header class="text-white" v-if="$slots.header">
        <div class="w-full mx-auto my-2 py-2 px-2">
          <slot class="w-full h-full flex flex-col items-center justify-center" name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main class="my-10">
        <slot />
      </main>
    </div>
  </div>
</template>
