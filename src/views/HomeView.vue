<script setup lang="ts">
import IntroCard from '../components/IntroCard.vue'
import FooterCard from '../components/FooterCard.vue'
</script>

<template>
  <main>
    <div
      class="container sm mx-auto px-4 p-4 md:p-8 px-8 border-2 border-gray-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 space-y-10 m-6"
      style="max-width: 660px;">
      <IntroCard />
      <FooterCard />
    </div>
  </main>
</template>
