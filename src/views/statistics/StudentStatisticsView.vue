<script setup>
  import { getLocalStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()

  const quizsData = getLocalStorage("statistics").filter((obj) => {
    return (
      obj.quizid === route.params.quizid &&
      obj.studentid === route.params.studentid
    )
  })
</script>
<template>
  <h1>Hej</h1>
  <router-link
    :to="`/teacher/${route.params.userid}/course/${route.params.courseid}/coursestatistics`"
    ><button>Tillbaka</button>
  </router-link>
  <p>totala inlämninar {{ quizsData.length }}</p>
</template>
