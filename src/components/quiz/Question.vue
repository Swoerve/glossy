<script setup>

  const {question} = defineProps({
    question: Object
  })
</script>

<template>
 <h1>{{ question.title }}</h1> 
 <ul>
    <li v-for="answer in question.answers">{{ answer }}</li>
 </ul>
</template>

<style scoped>
  
</style>