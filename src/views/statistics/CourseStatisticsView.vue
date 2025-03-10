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
    console.log(obj.id)
    return obj.id === route.params.courseid
  })[0]
  console.log(course)

  //En forEach som returnerar eleverna från kursen
  course.students.forEach((student) => {
    students.value.push(
      getLocalStorage("students").filter((obj) => {
        console.log("stat")
        console.log(student)
        console.log(obj.id)
        console.log(obj.id === student)
        if (obj.id === student) {
          return true
        }
      })[0]
    )
  })
  console.log(students.value)
  console.log(statistics)

  console.log(statistics[0].studentid)

  course.quizzes.forEach((quiz) => {
    quizzes.value.push(
      course.quizzes.filter((obj) => {
        console.log(quiz)
        return obj.id === quiz.id
      })[0]
    )
  })

  // student.value = statistics[0].student

  //En funktion för att filtrera och hitta kursens namn
  function getCourseName() {
    const courses = getLocalStorage("courses")
    const currentCourse = courses.find(
      (course) => course.id === route.params.courseid
    )
    return currentCourse ? currentCourse.name : "Kursen Hittades Inte"
  }

  // const data = getLocalStorage("statistics").filter((obj) => {
  //   return obj.courseid === route.params.courseid
  // })

  // console.log(data)
  // console.log(data[0].try)
  // console.log(data[0].answers)
  // console.log(data[1].try)
  // console.log(data[1].answers)
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
    <li v-for="(quiz, index) in quizzes" :key="index">
      <router-link
        :to="`/teacher/${route.params.userid}/course/${course.id}/quiz/${quiz.id}/quizstatistics`"
        >{{ quiz.title }}</router-link
      >
    </li>
  </ul>
</template>
