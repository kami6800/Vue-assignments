<template>
  <rememberme-header></rememberme-header>
  <display-resource
  v-for="resource in resources"
  :key="resource.title"
  v-bind="resource">
  </display-resource>
  <base-card class="border-4 border-grey-600 border-dashed text-gray-400 rounded-2xl">
    <button>Add resource</button>
  </base-card>
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
        description: "The official vue.js documentation."
      },
        {
        title:"Google",
        description:"Learn to google..."
      }]
    };
  }
}
</script>
