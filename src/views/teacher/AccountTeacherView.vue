<script setup>
  import { ref } from "vue"
  import {
    deleteLocalStorage,
    getLocalStorage,
    getSessionStorage,
    replaceLocalStorage
  } from "@/storageHandler"
  import { useRoute } from "vue-router"
  import gCard from "@/components/g-card.vue"

  const teacher = ref(null)
  const courses = ref(null)
  const route = useRoute()

  // check if we are logged in
  if (getSessionStorage("loggedin")) {
    teacher.value = getSessionStorage("loggedin")
  }

  // get courses if they exist already
  if (getLocalStorage("courses")) {
    let temp = getLocalStorage("courses")
    let result = temp.filter((course) => {
      return true //teacher.value.courses.includes(course.id)
    })
    courses.value = result
  }

  function deleteCourse(id) {
    let students = []

    // filter out specific course we want to delete
    let course = courses.value.filter((obj) => {
      return obj.id === id
    })[0]

    // for each student in this course we want to find them from localstorage
    // and push them into our temporary array
    course.students.forEach((student) => {
      students.push(
        getLocalStorage("students").filter((stud) => {
          return student === stud.id
        })[0]
      )
    })

    // for each student we want to splice out this course id
    students.forEach((stud) => {
      let ind = stud.courses.findIndex((cors) => {
        return cors === id
      })

      stud.courses.splice(ind, 1)
    })

    // for each student we want to update it in local storage
    students.forEach((stud) => {
      replaceLocalStorage("students", stud)
    })

    // delete this course from the local storage
    deleteLocalStorage("courses", id)
  }

  const showModal = ref(false)
  const showSettings = ref(false)
</script>

<template id="main">
  <h1 id="h1">Välkommen {{ teacher.name }}</h1>

  <section id="course-section">
    <h2>Dina kurser</h2>
    <template v-if="courses">
      <div class="course-container">
        <template v-for="course in courses" :key="course.id">
          <g-card
            :title="course.name"
            :bg="course.id.substr(0, 6)"
            :route-to="`/teacher/${route.params.userid}/course/${course.id}/`"
            right-button="delete"
            left-button="statistik"
            link
            @lclick="
              $router.push(
                `/teacher/${route.params.userid}/course/${course.id}/coursestatistics`
              )
            "
            @rclick="deleteCourse(course.id)"
          />
        </template>
      </div>
    </template>
    <template v-else>
      <h1>Du har inga kurser inlagda</h1>
    </template>
    <router-link :to="`/teacher/${route.params.userid}/createcourseview`">
      <button class="account-button">Skapa en ny kurs (+)</button>
    </router-link>
  </section>
</template>

<style scoped>
  .logo-container {
    display: flex;
    justify-content: center;
    margin-left: 30px;
  }

  .logo {
    width: 500px;
    height: auto;
  }

  #h1 {
    color: black;
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  #idk {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 20px;
  }

  .account-button {
    margin: 0;
    height: 40px;
    width: 150px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
  }

  .course-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 800px) {
    .course-container div {
      margin: auto;
    }
  }
</style>
