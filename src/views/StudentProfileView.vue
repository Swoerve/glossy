<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"
  import { RouterLink } from "vue-router"

  const student = ref(null)

  if (getSessionStorage("loggedin")) {
    student.value = getSessionStorage("loggedin")
  }
</script>

<template>
  <h1>{{ student.name }}s profil</h1>
  <p>hej</p>
</template>

<style scoped>
  h1 {
    font-size: 3em;
    margin-block: 0.67em;
  }
</style>
