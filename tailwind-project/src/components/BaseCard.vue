<template>
    <div class="p-6 mb-10 rounded-xl">
        <slot></slot>
    </div>
</template>

<script>
export default {
    emits:["x-clicked"],
    methods:{
        xClicked(){
            this.$emit("x-clicked");
        }
    }
}
</script>

