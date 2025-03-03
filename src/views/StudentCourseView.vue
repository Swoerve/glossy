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
  <template v-for="quiz in course.quizzes" :key="quiz.id">
    <div>
      <router-link
        :to="`/student/${route.params.userid}/course/${route.params.courseid}/quiz/${quiz.id}/`"
      >
        <h1>{{ quiz.title }}</h1>
      </router-link>
    </div>
  </template>
</template>

<style scoped></style>
