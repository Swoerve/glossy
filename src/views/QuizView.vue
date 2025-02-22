<script setup>
import Question from "@/components/quiz/Question.vue"
import { ref } from "vue";

const quiz = ref({
  title: "Quiz 1",
  difficulty: 1,
  questions: [{
    title: "question 1",
    answers: [
      "answer 1",
      "answer 2",
      "answer 3",
      "answer 4"
    ],
    correctAnswer: 1
  }, {
    title: "question 2",
    answers: [
      "answer 1",
      "answer 2",
      "answer 3",
      "answer 4"
    ],
    correctAnswer: 0
  }],
  stars: 3
})

const currQuestion = ref(0)

</script>

<!-- 
have a quiz object that contains all necessary info?
then retrieve that info and put it into question components?
-->

<template>
<h1>{{quiz.title}}</h1>
<Question :question="quiz.questions[currQuestion]"></Question>
<button @click="currQuestion-=1">Prev Question</button>
<button @click="currQuestion+=1">Next Question</button>
</template>

<style>

</style>