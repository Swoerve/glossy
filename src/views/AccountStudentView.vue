<script setup>
  import { ref } from "vue"
  import Settings from "@/components/user-settings.vue"
  import {
    getLocalStorage,
    getSessionStorage,
    replaceLocalStorage,
    replaceLogin,
    replaceSessionStorage
  } from "@/storageHandler"
  const showSettings = ref(null)
  const student = ref(null)
  const courses = ref(null)
  const cCode = ref("")

  if (getSessionStorage("loggedin")) {
    student.value = getSessionStorage("loggedin")
  }

  if (getLocalStorage("courses")) {
    let temp = getLocalStorage("courses")
    let result = temp.filter((course) => {
      return student.value.courses.includes(course.id)
    })
    courses.value = result
  }

  function joinCourse() {
    let course = getLocalStorage("courses").filter((obj) => {
      return obj.code === cCode.value
    })

    student.value.courses.push(course[0].id)
    replaceLocalStorage("students", student.value)
    replaceLogin(student.value)
  }
</script>

<template>
  <h1>Hej {{ student.name }}!</h1>

  <section id="course-section">
    <h2>Kurser</h2>
    <template v-if="courses">
      <template v-for="course in courses" :key="course.id">
        <h1>{{ course.name }}</h1>
      </template>
    </template>
    <template v-else>
      <h1>
        You aren't part of any courses, ask your teacher for a course code
      </h1>
    </template>
    <input type="text" name="" id="" v-model="cCode" />
    <button @click="joinCourse()">Join course</button>
  </section>
</template>

<style scoped>
  /*Detta är bara tillfällig css*/

  #navbar {
    display: flex;
    justify-content: space-evenly;
  }

  #course-section {
    background-color: #df37e4;
    padding: 20px;
    border-radius: 5px;
    /* Adjust based on your layout */
    text-align: center;
  }

  #list-items {
    display: flex;
    background-color: #9931e4;
    flex-wrap: wrap; /* Ensures items wrap on smaller screens */
    justify-content: center;
    padding: 10px;
    border-radius: 8px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    /* justify-content: center; */
    list-style: none;
    width: 100em;
  }

  li {
    background-color: white;
    padding: 10px;
    margin: 20px;
    border-radius: 5px;
    text-align: center;
    min-width: 80px; /* Ensures a good size */
  }
</style>
