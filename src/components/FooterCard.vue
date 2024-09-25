<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <div class="flex flex-col items-center py-12">
        <h1 class="font-bold text-2xl md:text-3xl text-gray-700 dark:text-white">Let's work together</h1>
        <h2 class="text-lg md:text-1xl text-gray-500 dark:text-zinc-300 pt-4 md:pt-6 text-center">Let’s transform ideas into impactful digital solutions.</h2>
    </div>
    <div class="w-full bg-gray-200 dark:bg-zinc-700 rounded-xl py-6 flex justify-between items-center" style="margin-top: 0;">
        <ul class="list-disc ml-8">
            <li class="text-lg text-gray-500 dark:text-zinc-300">Follow Me</li>
        </ul>
        <div class="pr-4 md:pr-6">
            <a href="https://www.linkedin.com/in/nick-durrer-5442a4242" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="h-7 pr-4 md:pr-6"/></a>
            <a href="https://www.instagram.com/nick.durrer/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="h-8"/></a>
        </div>
    </div>
</template>
