<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"

  const teacher = ref(null)

  if (getSessionStorage("loggedin")) {
    teacher.value = getSessionStorage("loggedin")
  }
</script>
<template>
  <h1>{{ teacher.name }}</h1>
</template>
