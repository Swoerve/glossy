<script setup>
  import Question from "@/components/quiz/quiz-question.vue"
  import { getLocalStorage } from "@/storageHandler"
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
  const answered = ref({})

  // contains the current question index
  const currQuestion = ref(0)

  // adds the chosen answer to a list of answers where the index is related to the respective question
  // i.e. answer in index 0 is the answer chosen for question 1
  function addAnswer(n) {
    if (n[1] in answered.value) {
      answered.value[n[1]] = n[0]
    } else {
      answered.value[n[1]] = n[0]
    }
    console.log(answered.value)
  }

  // end screen true or false variable
  const endScreen = ref(false)

  // literally just makes endscreen true
  function switchToEndScreen() {
    endScreen.value = true
  }
</script>

<!--
have a quiz object that contains all necessary info?
then retrieve that info and put it into question components?
-->

<template>
  <h1>{{ quiz.title }}</h1>
  <template v-if="!endScreen">
    <Question
      :qid="currQuestion"
      :question="quiz.questions[currQuestion]"
      @answered="addAnswer"
    />
    <button v-if="currQuestion > 0" @click="currQuestion -= 1">
      Prev Question
    </button>
    <button
      v-if="currQuestion < quiz.questions.length - 1"
      @click="currQuestion += 1"
    >
      Next Question
    </button>
    <button
      v-if="Object.keys(answered).length == quiz.questions.length"
      @click="switchToEndScreen"
    >
      End Quiz
    </button>
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
  .correct {
    background-color: greenyellow;
  }

  .incorrect {
    background-color: red;
  }
</style>
