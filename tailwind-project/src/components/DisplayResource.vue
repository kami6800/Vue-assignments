<template>
    <base-card class="shadow-md bg-white text-left">
        <button @click="xClicked" class="float-right border-4 border-grey-600 text-gray-300 rounded-full w-8 h-8">X</button>
        <div>
            <h2 class="text-xl  font-bold mb-2">{{title}}</h2>
            <p class="text-gray-500">{{description}}</p>
        </div>
    </base-card>
</template>

<script>
export default {
    props:["title", "description"]
}
</script>