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

  quiz.value = course.quizzes.filter((obj) => {
    return obj.id === route.params.quizid
  })[0]

  console.log(quizData)
</script>
<template>
  <h1>Statistik på {{ quiz.title }}</h1>
  <router-link
    :to="`/teacher/${route.params.userid}/course/${route.params.courseid}/coursestatistics`"
  >
    <button class="back">Tillbaka till statistik sidan</button>
  </router-link>
  <div>
    <!-- <p>{{ quizData }}</p> -->
  </div>

  <div>
    <p>Totala inlämningar:{{ quizData.length }}</p>
  </div>
</template>
<style scoped>
  .back {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 580px) {
    h1 {
      font-size: 1.8rem;
    }
  }
</style>
