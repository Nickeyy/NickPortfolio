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
            <font-awesome-icon :icon="['fas', 'sun']" v-if="isDarkMode" class="w-6 h-6"/>
            <font-awesome-icon :icon="['fas', 'moon']" v-else class="w-6 h-6"/>
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
