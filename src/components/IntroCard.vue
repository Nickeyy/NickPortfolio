<script setup lang="ts">
import { ref } from 'vue'

const copyEmailButton = ref("Copy Email");

const copyEmail = () => {
  const email = "info@nickdurrer.ch";
  navigator.clipboard.writeText(email).then(() => {
    copyEmailButton.value = "Copied!";
    setTimeout(() => {
        copyEmailButton.value = "Copy Email";
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}
</script>

<template>
    <div class="flex flex-row justify-between">
        <ul class="list-inside list-disc">
            <li class="text-lg text-gray-500 dark:text-zinc-300 font-bold">Future Product Manager</li>
        </ul>

        <div class="inline-flex items-center bg-emerald-300 text-green-800 text-sm font-medium px-3 py-1 rounded-full bg-opacity-20">
            <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            <div class="uppercase text-emerald-500">Available for new Challenges</div>
        </div>
    </div>

    <div class="flex flex-row justify-between">
        <div class="w-80 space-y-5">
            <h1 class="text-3xl font-bold text-gray-700 dark:text-white">I'm Nick Durrer</h1>
            <h2 class="text-1xl text-gray-500 dark:text-zinc-300">
                Current Mobile/Web Developer from Switzerland. 
                I am strongly interested in pursuing a PM/PO role.
            </h2>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <button @click="copyEmail" class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl">
                    {{ copyEmailButton }}
                </button>
            </div>
        </div>
        <img src="@/assets/nick.png" alt="Nick Durrer"
            class="w-44 h-44 rounded-full border-4 border-gray-200 dark:border-zinc-700" />
    </div>
</template>
