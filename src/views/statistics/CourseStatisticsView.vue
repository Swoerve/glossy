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
    const foundStudent = getLocalStorage("students").find(
      (obj) => obj.id === student
    )
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
  <section>
    <div>
      <h2 class="heading">Elever</h2>
      <ul class="student-list">
        <li class="student" v-for="(student, index) in students" :key="index">
          <router-link
            :to="`/teacher/${route.params.userid}/course/${course.id}/${student.id}/studentstatistics`"
          >
            {{ student.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="heading">Quiz</h2>

      <ul class="quiz-list">
        <li class="quiz" v-for="(quiz, index) in quizResults" :key="index">
          <router-link
            :to="`/teacher/${route.params.userid}/course/${course.id}/quiz/${quiz.id}/quizstatistics`"
          >
            {{ quiz.title }}
          </router-link>
          <!-- Visa antal rätt och fel -->
          <p>
            Total rätt: {{ quiz.correctAnswers }} | Totala Fel:
            {{ quiz.incorrectAnswers }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
  * {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333333;
  }

  section {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
    color: #222222;
  }

  /* Lista-styling */
  .quiz-list,
  .student-list {
    list-style: none;
    padding: 0;
  }

  .quiz,
  .student {
    background-color: #f7f2f84d;
    margin: 0.78em auto;
    padding: 0.79em;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    text-align: center;
    width: 80%;
  }

  div {
    text-align: center;
    justify-content: space-evenly;
    flex: 1;
    min-width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }

  a {
    text-decoration: none;
    color: #032429;
    font-weight: bold;
  }

  @media (min-width: 580px) {
    .student:hover,
    .quiz:hover {
      background: #ffffff99;
      transform: scale(1.05);
    }

    a:hover {
      color: #ff6600;
    }
  }

  /* För mindre skärmar/mobiler */
  @media (max-width: 580px) {
    h1 {
      font-size: 1.8rem;
    }

    .heading {
      font-size: 1.3rem;
    }

    .student,
    .quiz {
      width: 95%;
      padding: 15px;
    }

    section {
      flex-direction: column;
    }

    div {
      width: 90%;
    }
  }
</style>
