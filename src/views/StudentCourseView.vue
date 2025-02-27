<script setup>
  import { getLocalStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
  const course = ref(null)
  course.value = getLocalStorage("courses").filter((obj) => {
    return obj.id === route.params.courseid
  })
  course.value = course.value[0]
  console.log(course.value)
</script>

<template>
  <h1>course name: {{ course.name }}</h1>
  <router-link to="newquiz">
    <button>Test</button>
  </router-link>
</template>

<style scoped></style>
