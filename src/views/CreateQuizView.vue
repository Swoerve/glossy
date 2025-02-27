<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const role = ref(null)
  const classCode = ref(null)
  const email = ref(null)
  const password = ref(null)
  const checked = ref(null)

  // Quiz object
  const quiz = ref({
    title: '',
    difficulty: 1,
    questions: [
      {
        title: '',
        answers: [],
        correctAnswer: 0
      }
    ],
    stars: 0
  })

  // Funktion för att lägga till en ny fråga
  function addQuestion() {
    quiz.value.questions.push({
      title: '',
      answers: [''],
      correctAnswer: 0
    })
  }

  // Funktion för att lägga till ett nytt svarsalternativ till en specifik fråga
  function addAnswer(questionIndex) {
    quiz.value.questions[questionIndex].answers.push('')
  }
</script>

<template>
  <div class="createquiz-container">
    <div id="quiz">
      <h1 id="header">Skapa quiz</h1>
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

        <!-- Poängknapp -->
        <p class="quiztext">Poäng för denna fråga</p>
        <input
          type="number"
          v-model="question.points"
          placeholder="Poäng"
          class="quizbutton"
        />

        <!-- Loopar igenom svarsalternativ för varje fråga -->
        <p class="quiztext">Svarsalternativ:</p>
        <div
          v-for="(answer, aIndex) in question.answers"
          :key="aIndex"
          class="answer-block"
        >
          <input
            v-model="question.answers[aIndex]"
            placeholder="Skriv svarsalternativ"
            class="quizbutton"
          />
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

      <button class="done-button">Klar</button>
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
