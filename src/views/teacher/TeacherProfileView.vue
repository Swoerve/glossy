<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"

  const teacher = ref(null)

  if (getSessionStorage("loggedin")) {
    teacher.value = getSessionStorage("loggedin")
  }
</script>

<template>
  <h1>{{ teacher.name }}s profil</h1>
</template>

<style scoped>
  h1 {
    font-size: 3em;
    margin-block: 0.67em;
  }
</style>
