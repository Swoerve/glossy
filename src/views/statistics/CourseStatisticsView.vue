<script setup>
  import { ref } from "vue"
  import { getLocalStorage, getSessionStorage } from "@/storageHandler"
  import { useRoute } from "vue-router"

  const route = useRoute()

  let numberOfTries = getLocalStorage("statistics").filter((obj) => {
    return obj.courseid === route.params.courseid
  })
  console.log(numberOfTries)
</script>
<template>
  <h1>Statistik:{{ numberOfTries[0].answers[1] }}</h1>
</template>
