<template>
    <h1>hi</h1>
    <active-user
    :username="name"
    :age="age"
    ></active-user>
    <user-data @name-changed="nameChanged" @age-changed="ageChanged"></user-data>
</template>

<script>
import ActiveUser from './Components/ActiveUser.vue'

export default {
  components: { ActiveUser },
  data(){
      return{
          name:"name",
          age:"age"
      };
  },
    methods:{
        nameChanged(newName){
            this.name = newName;
        },
        ageChanged(newAge){
            this.age = newAge;
        }
    }
}
</script>