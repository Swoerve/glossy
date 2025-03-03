<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"

  student = ref(null)

  if (getSessionStorage("loggedin")) {
    student.value = getSessionStorage("loggedin")
  }
</script>

<template>
  <h1>{{ student.name }}s profil</h1>
  <p>hej</p>
</template>
