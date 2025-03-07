<script setup>
  import { ref } from "vue"
  import { getLocalStorage, getSessionStorage } from "@/storageHandler"
  import { useRoute } from "vue-router"

  const route = useRoute()

  let numberOfTries = getLocalStorage("statistics").filter((obj) => {
    return obj.courseid === route.params.courseid
  })
  console.log(numberOfTries[0].answers)
</script>
<template>
  <h1 v-if="numberOfTries.length && numberOfTries[0].answers.length">
    Statistik:{{ numberOfTries[0].answers[1] }}
  </h1>
  <h1 v-else>Ingen staistik tillgänlig</h1>
</template>
