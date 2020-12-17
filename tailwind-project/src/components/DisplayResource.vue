<template>
    <div class="p-6 mb-10 rounded-xl shadow-sm bg-white text-left flex justify-between
                hover:shadow-lg transition-all duration-200
                dark:bg-gray-500 dark:hover:bg-gray-400">
        <div>
            <h2 class="text-xl font-bold mb-2 dark:text-black">{{title}}</h2>
            <p class="text-gray-500 dark:text-gray-200">{{description}}</p>
        </div>
        <button @click="xClicked" class="border-4 border-grey-600 text-gray-300 rounded-full w-8 h-8 
                                        hover:border-black hover:text-black
                                        dark:border-black dark:text-black
                                        dark:hover:border-gray-100 dark:hover:text-gray-100">X</button>
    </div>
</template>

<script>
export default {
    props:["title", "description", "url"],
    emits:["x-clicked"],
    methods:{
        xClicked(){
            this.$emit("x-clicked", this.title);
        }
    }
}
</script>
