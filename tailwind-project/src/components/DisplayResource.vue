<template>
    <base-card class="shadow-sm bg-white text-left
                    hover:shadow-lg transition-all duration-200
                    dark:bg-gray-500 dark:hover:bg-gray-400">
        <button @click="xClicked" class="float-right border-4 border-grey-600 text-gray-300 rounded-full w-8 h-8 
                                        hover:border-black hover:text-black
                                        dark:border-black dark:text-black
                                        dark:hover:border-gray-100 dark:hover:text-gray-100">X</button>
        <div>
            <h2 class="text-xl font-bold mb-2 dark:text-black">{{title}}</h2>
            <p class="text-gray-500 dark:text-gray-200">{{description}}</p>
        </div>
    </base-card>
</template>

<script>
export default {
    props:["title", "description"]
}
</script>