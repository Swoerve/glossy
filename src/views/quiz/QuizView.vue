<script setup>
  import Question from "@/components/quiz/quiz-question.vue"
  import {
    getLocalStorage,
    setLocalStorage,
    setSessionStorage,
    updateLocalStorage
  } from "@/storageHandler"
  import { v4 } from "uuid"
  import { ref } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
  // Quiz object
  const oldHardCodedQuiz = ref({
    title: "Quiz 1",
    difficulty: 1,
    questions: [
      {
        title: "what is water?",
        answers: ["A Liquid", "A Solid", "A Gas"],
        correctAnswer: 0
      },
      {
        title: "what color is grass?",
        answers: [
          "It's red",
          "It's blue",
          "It's green",
          "It's purple",
          "It's yellow",
          "It's magenta"
        ],
        correctAnswer: 2
      },
      {
        title: "what laptops do we use at ITHS",
        answers: ["Dell", "Alienware", "MSI", "HP"],
        correctAnswer: 3
      },
      {
        title: "Ducks",
        answers: ["Yellow Ducks", "Green Ducks", "Blue Ducks", "Purple Ducks"],
        correctAnswer: 3
      }
    ],
    stars: 3
  })

  const course = getLocalStorage("courses").filter((obj) => {
    console.log(obj.id)
    return obj.id === route.params.courseid
  })[0]
  console.log(course)
  const quiz = ref(null)
  quiz.value = course.quizzes.filter((obj) => {
    return obj.id === route.params.quizid
  })[0]

  // answered list containing all the answers the user has made
  const answered = ref([])

  // contains the current question index
  const currQuestion = ref(0)

  // adds the chosen answer to a list of answers where the index is related to the respective question
  // i.e. answer in index 0 is the answer chosen for question 1
  function addAnswer(n) {
    // add answer to quizresult
    if (n[1] in answered.value) {
      answered.value[n[1]] = n[0]
    } else {
      answered.value[n[1]] = n[0]
    }
    console.log(answered.value)
    // add answer to data statistic
    if (newData.value.answers[n[1]]) {
      newData.value.answers[n[1]].push(n[0])
    } else {
      newData.value.answers[n[1]] = [n[0]]
    }
  }

  // end screen true or false variable
  const endScreen = ref(false)

  // literally just makes endscreen true
  function switchToEndScreen() {
    updateLocalStorage("statistics", newData.value)
    endScreen.value = true
  }

  function tryCount() {
    if (getLocalStorage("statistics")) {
      let tries = getLocalStorage("statistics").filter((data) => {
        console.log(data)
        if (
          data.courseid === course.id &&
          data.quizid === quiz.value.id &&
          data.studentid === route.params.userid
        ) {
          return data
        }
      })
      return tries.length
    }
    return 0
  }

  const newData = ref({
    id: v4(),
    courseid: course.id,
    quizid: quiz.value.id,
    studentid: route.params.userid,
    try: tryCount(),
    answers: []
  })

  // moves the current question forwards or backwards but also clamps it so we dont fall out of bounds in the array
  function moveQuestion(change) {
    let temp = currQuestion.value
    temp += change
    if (temp < 0) {
      temp = 0
    }
    if (temp > quiz.value.questions.length - 1) {
      temp = quiz.value.questions.length - 1
    }
    currQuestion.value = temp
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      moveQuestion(-1)
    } else if (e.key === "ArrowRight") {
      moveQuestion(1)
    }
  })
</script>

<!--
have a quiz object that contains all necessary info?
then retrieve that info and put it into question components?
-->

<template>
  <template v-if="!endScreen">
    <main class="quiz-container">
      <div class="question-container">
        <h1>{{ quiz.title }}</h1>
        <Question
          :qid="currQuestion"
          :question="quiz.questions[currQuestion]"
          :answers="answered"
          @answered="addAnswer"
        />
      </div>
      <button
        v-if="currQuestion > 0"
        @click="moveQuestion(-1)"
        id="previous-button"
      >
        Previous
      </button>
      <button
        v-if="currQuestion < quiz.questions.length - 1"
        @click="moveQuestion(1)"
        id="next-button"
      >
        Next
      </button>
      <button
        v-if="
          Object.keys(answered).length === quiz.questions.length &&
          currQuestion === quiz.questions.length - 1
        "
        @click="switchToEndScreen"
        id="end-button"
      >
        End Quiz
      </button>
    </main>
  </template>
  <template v-else>
    <div>
      <template v-for="(question, ind) in quiz.questions" :key="ind">
        <h4>{{ question.title }}</h4>
        <!-- <p>Correct: {{ question.answers[question.correctAnswer] }}</p> -->
        <p
          :class="{
            correct: question.correctAnswer == answered[ind],
            incorrect: question.correctAnswer != answered[ind]
          }"
        >
          answered: {{ question.answers[answered[ind]] }}
        </p>
      </template>
    </div>
  </template>
</template>

<style>
  h1 {
    text-align: center;
  }

  .correct {
    background-color: greenyellow;
  }

  .incorrect {
    background-color: red;
  }

  .quiz-container {
    height: calc(100vh - 50px);
    width: 50dvw;
    margin: auto;
    display: grid;
    grid-template-areas:
      "left main right"
      "left main right"
      "left main right"
      "end end end";
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr;
  }

  .question-container {
    grid-area: main;
  }

  #previous-button {
    background-color: transparent;
    border: 0;
    grid-area: left;
    transition: 0.3s;
  }

  #previous-button:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  #next-button {
    background-color: transparent;
    border: 0;
    grid-area: right;
    transition: 0.3s;
  }

  #next-button:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  #end-button {
    grid-area: right;
  }
</style>
