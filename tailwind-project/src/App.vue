<template>
  <rememberme-header></rememberme-header>
  <display-resource
  v-for="resource in resources"
  :key="resource.title"
  v-bind="resource"
  @xClicked="removeResource">
  </display-resource>
  <button class="w-full h-full p-6 mb-10 border-4 border-grey-600 border-dashed text-gray-400 rounded-2xl
                dark:border-gray-400">Add resource</button>
</template>

<script>
import BaseCard from './components/BaseCard.vue'
import DisplayResource from "./components/DisplayResource.vue"
import RemembermeHeader from "./components/RemembermeHeader.vue"

export default {
  name: 'App',
  components: {
    BaseCard,
    DisplayResource,
    RemembermeHeader
  },
  data(){
    return{
      resources:[{
        title:"Official Guide",
        description: "The official vue.js documentation.",
        url:"https://vuejs.org/"
      },
        {
        title:"Google",
        description:"Learn to google...",
        url: "https://www.google.com/"
      }]
    };
  },
  methods:{
    removeResource(title){
      this.resources = this.resources.filter(resource => resource.title != title);
      console.log(this.resources);
    }
  }
}
</script>
