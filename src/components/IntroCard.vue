<template>
    <div class="flex flex-row justify-between">
        <ul class="list-inside list-disc">
            <li class="text-lg dark:text-white font-bold">Product Designer</li>
        </ul>

        <div class="inline-flex items-center bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <div class="uppercase">Available for Work</div>
        </div>
    </div>

    <div class="flex flex-row justify-between">
        <div class="w-80 space-y-5">
            <h1 class="text-3xl dark:text-white font-bold">I'm Nick Durrer</h1>
            <h2 class="text-1xl dark:text-white">
                Creative technologist from Berlin, DE. Passionate about crafting digital experiences at Hexagon Labs.
            </h2>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
                    Hire Me
                </button>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
                    Portfolio
                </button>
            </div>
        </div>
        <img src="@/assets/nick2.png" alt="Nick Durrer"
            class="w-44 h-44 rounded-full border-4 border-gray-100 dark:border-gray-500" />
    </div>
</template>
