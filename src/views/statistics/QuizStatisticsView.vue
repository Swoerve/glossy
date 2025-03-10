<script setup>
  import { getLocalStorage } from "@/storageHandler"
  import { ref, computed } from "vue"
  import { useRoute } from "vue-router"
  const route = useRoute()
  const quizzes = ref(null)
  const quiz = ref(null)

  const foundQuiz = ref(null)

  const quizData = getLocalStorage("statistics").filter((obj) => {
    return obj.quizid === route.params.quizid
  })

  const course = getLocalStorage("courses").filter((obj) => {
    console.log(obj.id)
    return obj.id === route.params.courseid
  })[0]

  if (course) {
    foundQuiz.value = course.quizzes.filter(
      (quiz) => quiz.id === route.params.quizid
    )
    if (foundQuiz.value !== null) {
      quizzes.value = foundQuiz
      console.log(foundQuiz)
    }
  }

  console.log(quizData)
</script>
<template>
  <h1>Statitik på {{ quiz?.title || "Okänt quiz" }}</h1>
  <router-link
    :to="`/teacher/${route.params.userid}/course/${route.params.courseid}/coursestatistics`"
  >
    <button class="back">Tillbaka till statistik sidan</button>
  </router-link>
  <div>
    <p>{{ quizData }}</p>
  </div>

  <div>
    <p>Totala försök:{{ quizData.try }}</p>
  </div>
</template>
<style scoped>
  @media (min-width: 581px) {
  }

  @media (max-width: 580px) {
    h1 {
      font-size: 1.8rem;
    }
    .back {
    }
  }
</style>
