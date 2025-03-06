<script setup>
  import { getLocalStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
  const courses = ref(getLocalStorage("courses") || [])
  const course = ref(
    courses.value.find((c) => c.id === route.params.courseid) || { quizzes: [] }
  )
  const quizzes = ref(course.value.quizzes || [])

  course.value = getLocalStorage("courses").filter((obj) => {
    return obj.id === route.params.courseid
  })
  course.value = course.value[0]
  console.log(course.value)

  // Delete-funktion
  function deleteQuiz(quizId) {
    // Uppdaterar quizzes och kursens quiz-lista
    quizzes.value = quizzes.value.filter((quiz) => quiz.id !== quizId)
    course.value.quizzes = quizzes.value

    // Uppdaterar localStorage
    courses.value = courses.value.map((c) =>
      c.id === course.value.id ? course.value : c
    )
    setLocalStorage("courses", courses.value)
  }
</script>

<template>
  <section>
    <!-- Kursens namn -->
    <h1>{{ course.name }}</h1>

    <!-- Knapp för att skapa nytt quiz -->
    <router-link to="newquiz">
      <button class="create-button">Skapa nytt quiz</button>
    </router-link>

    <!-- Lista över skapade quiz -->
    <h2>Skapade quiz</h2>
    <div class="quiz-grid">
      <template v-if="quizzes.length">
        <div v-for="quiz in quizzes" :key="quiz.id" class="quiz-card">
          <router-link
            :to="`/student/${route.params.userid}/course/${route.params.courseid}/quiz/${quiz.id}`"
          >
            <h3>{{ quiz.title }}</h3>
          </router-link>
          <button @click="deleteQuiz(quiz.id)" class="delete-button">
             Ta bort
          </button>
        </div>
      </template>
      <template v-else>
        <p>Inga quiz har skapats ännu.</p>
      </template>
    </div>
  </section>
</template>

<style scoped>
  section {
    max-width: 800px;
    margin: auto;
    text-align: center;
  }

  .quiz-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
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

  button {
    background-color: rgb(210, 221, 218);
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }

  .delete-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
  }

  .delete-button:hover {
    background-color: #c0392b;
  }
</style>
