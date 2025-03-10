<script setup>
  import { getLocalStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRoute } from "vue-router"
  const route = useRoute()

  const quizData = getLocalStorage("statistics").filter((obj) => {
    return obj.quizid === route.params.quizid
  })

  console.log(quizData)
</script>
<template>
  <h1>Hej</h1>
  <router-link
    :to="`/teacher/${route.params.userid}/course/${route.params.courseid}/coursestatistics`"
  >
    <button>Tillbaka till statistik sidan</button>
  </router-link>
  <div>
    <p>{{ quizData }}</p>
  </div>

  <div>
    <!-- <p>Totala försök:{{quizData }}</p> -->
  </div>
</template>
