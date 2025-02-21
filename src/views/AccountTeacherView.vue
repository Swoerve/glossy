<script setup> 
  import{ref}from "vue"
  import CreateCourse from "@/components/CreateCourse.vue"
 
  const showModal = ref(false)
  
</script>

<template>
  <h1>Välkommen</h1>
  <div>
    <button @click="showModal = true">Skapa en ny kurs</button>
    <CreateCourse :isOpen="showModal" @close="showModal = false"></CreateCourse>
  </div>
  <button>Statistik</button>
  <button></button>
</template>

<style scoped>
  
</style>