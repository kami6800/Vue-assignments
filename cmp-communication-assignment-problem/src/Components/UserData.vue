<template>
    <form>
        <div>
            <label>Name</label>
            <input v-model="name" type="text">
        </div>
        <div>
            <label>Age</label>
            <input v-model="age" type="number"/>
        </div>
    </form>
</template>

<script>
export default {
    emits:["name-changed", "age-changed"],
    data(){
        return {
            name:"",
            age:""
        };
    },
    watch:{
        name(val){
            this.$emit("name-changed", val);
        },
        age(val){
            this.$emit("age-changed", val);
        }
    }
}
</script>