
<script setup>
import { ref, computed } from "vue"
import { getLocalStorage, getSessionStorage } from "@/storageHandler"
import { useRoute } from "vue-router"

const route = useRoute()
const students = ref([])
const quizzes = ref([])

const statistics = getLocalStorage("statistics").filter((obj) => {
  return obj.courseid === route.params.courseid
})

const course = getLocalStorage("courses").filter((obj) => {
  return obj.id === route.params.courseid
})[0]

// Hämtar elever från kursen
course.students.forEach((student) => {
  const foundStudent = getLocalStorage("students").find((obj) => obj.id === student)
  if (foundStudent) students.value.push(foundStudent)
})

// Hämtar quizzes
course.quizzes.forEach((quiz) => {
  quizzes.value.push(quiz)
})

// Funktion för att beräkna rätt och fel svar för varje quiz
const quizResults = computed(() => {
  return quizzes.value.map((quiz) => {
    const quizStats = statistics.filter((stat) => stat.quizid === quiz.id)

    let correctAnswers = 0
    let incorrectAnswers = 0

    quizStats.forEach((stat) => {
      stat.answers.forEach((answer) => {
        if (answer.correct) {
          correctAnswers++
        } else {
          incorrectAnswers++
        }
      })
    })

    return {
      id: quiz.id,
      title: quiz.title,
      correctAnswers,
      incorrectAnswers
    }
  })
})

// Hämta kursnamn
function getCourseName() {
  const courses = getLocalStorage("courses")
  const currentCourse = courses.find(
    (course) => course.id === route.params.courseid
  )
  return currentCourse ? currentCourse.name : "Kursen Hittades Inte"
}
</script>

<template>
  <h1>Statistik för {{ getCourseName() }}</h1>

  <h2>Elever</h2>
  <ul>
    <li v-for="(student, index) in students" :key="index">
      <router-link
        :to="`/teacher/${route.params.userid}/course/${course.id}/${student.id}/studentstatistics`"
      >
        {{ student.name }}
      </router-link>
    </li>
  </ul>

  <h3>Quiz</h3>
  <ul>
    <li v-for="(quiz, index) in quizResults" :key="index">
      <router-link
        :to="`/teacher/${route.params.userid}/course/${course.id}/quiz/${quiz.id}/quizstatistics`"
      >
        {{ quiz.title }}
      </router-link>
      <!-- Visa antal rätt och fel -->
      <p>
         Rätt: {{ quiz.correctAnswers }} |  Fel: {{ quiz.incorrectAnswers }}
      </p>
    </li>
  </ul>
</template>
