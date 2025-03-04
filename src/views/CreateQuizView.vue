<script setup>
  import { getLocalStorage, setLocalStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRoute, useRouter } from "vue-router"

  const route = useRoute()
  const router = useRouter()
  const course = ref(null)
  course.value = getLocalStorage("courses").filter((obj) => {
    return obj.id === route.params.courseid
  })
  course.value = course.value[0]
  console.log(course.value)

  // Quiz object
  const quiz = ref({
    title: "",
    difficulty: 1,
    questions: [
      {
        title: "",
        answers: [],
        correctAnswer: 0
      }
    ],
    stars: 0
  })

  // Function to add a new question to the quiz
  function addQuestion() {
    quiz.value.questions.push({
      title: "",
      answers: [""],
      correctAnswer: 0
    })
  }

  // Function to add a new answer to a specific question
  function addAnswer(questionIndex) {
    quiz.value.questions[questionIndex].answers.push("")
  }

  function createQuestion() {
    console.log("creating")
    let courses = getLocalStorage("courses")
    let obj = courses.find((o, i) => {
      if (o.id === route.params.courseid) {
        console.log("found course")
        courses[i].quizzes.push(quiz.value)
        return true
      }
    })
    setLocalStorage("courses", courses)
    router.push(
      `/teacher/${route.params.userid}/course/${route.params.courseid}/`
    )
  }
</script>

<template>
  <div class="createquiz-container">
    <div id="quiz">
      <h1 id="header">Skapa ny quiz for {{ course.name }}</h1>
      <p class="quiztext">Titel</p>
      <input
        v-model="quiz.title"
        placeholder="Quiz 1 titel"
        class="quizbutton"
      />
      <p class="quiztext">Svårighetsgrad:</p>
      <select
        name="difficulty"
        id="difficulty"
        class="quizbutton"
        v-model="quiz.difficulty"
      >
        <option value="1">Enkel</option>
        <option value="2">Medel</option>
        <option value="3">Hård</option>
      </select>

      <!-- Loopar igenom alla frågor -->
      <div
        v-for="(question, qIndex) in quiz.questions"
        :key="qIndex"
        class="question-block"
      >
        <p class="quiztext">Fråga {{ qIndex + 1 }}</p>
        <input
          v-model="question.title"
          placeholder="Skriv fråga"
          class="quizbutton"
        />

        <!-- Loopar igenom svarsalternativ för varje fråga -->
        <p class="quiztext">Svarsalternativ:</p>
        <div class="answer-block">
          <template v-for="(answer, aIndex) in question.answers" :key="aIndex">
            <input
              v-model="question.answers[aIndex]"
              placeholder="Skriv svarsalternativ"
              class="quizbutton"
            />
            <input
              type="radio"
              :value="aIndex"
              v-model="question.correctAnswer"
              :id="aIndex"
              name="correct"
            />
          </template>
        </div>
        <!-- Lägger till nytt svarsalternativ -->
        <button @click="addAnswer(qIndex)" class="quizbutton">
          + Lägg till svarsalternativ
        </button>
      </div>

      <!-- Lägger till ny fråga -->
      <p class="quiztext">Lägg till fler frågor</p>
      <button @click="addQuestion" class="quizbutton">+ Lägg till fråga</button
      ><br />

      <button class="done-button" @click="createQuestion">Klar</button>
    </div>
  </div>
</template>

<style scoped>
  #header {
    color: black;
  }

  .createquiz-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
  }

  #quiz {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    border: 0.5px solid #9667e0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f2ebfb;
  }

  .quiztext {
    color: black;
  }

  .quizbutton {
    text-align: left;
    background-color: white;
    border: 0.5px solid #9667e0;
  }

  .done-button {
    height: 40px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
    margin-top: 10px;
  }
</style>
