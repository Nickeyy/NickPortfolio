<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <div :class="{ dark: isDarkMode }" class="p-2 min-h-screen bg-gray-100 dark:bg-zinc-900 dark:text-white">
    <nav
      class="sticky top-4 container sm mx-auto p-6 px-8 border-2 border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 space-y-10"
      style="max-width: 660px;">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-lg md:text-xl font-burtons text-gray-700 dark:text-white">developedbynick</h1>
        </div>
        <div class="flex items-center">
          <button class="cursor-pointer" @click="toggleDarkMode">
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="28px" height="28px"
            fill="#e8eaed">
            <path
              d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"
            fill="#334155">
            <path
              d="M480-120q-133 0-226.5-93.5T160-440q0-133 93.5-226.5T480-760q47 0 89 13t78 37q-79 35-126.5 109.5T473-440q0 106 67 190t170 108q-35 24-77 37t-89 13Z" />
          </svg>
        </button>
        <a class="bg-sky-500 hover:bg-sky-600 text-white ml-4 py-2 px-4 rounded-xl" href="mailto:info@nickdurrer.ch">
          Email me!
        </a>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style></style>
