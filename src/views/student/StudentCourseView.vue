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
  <section>
    <h1>{{ course.name }}</h1>
    <div class="quiz-grid">
      <template v-if="course.quizzes.length">
        <div v-for="quiz in course.quizzes" :key="quiz.id" class="quiz-card">
          <router-link
            :to="`/student/${route.params.userid}/course/${route.params.courseid}/quiz/${quiz.id}/`"
          >
            <h1>{{ quiz.title }}</h1>
          </router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
  section {
    max-width: 980px;
    margin: auto;
    text-align: center;
  }

  .quiz-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px;
  }

  .quiz-card {
    background: #f4f4f4;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .quiz-card:hover {
    transform: scale(1.05);
  }

  .quiz-card a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
