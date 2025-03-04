<script setup>
  import { ref } from "vue"
  import Settings from "@/components/user-settings.vue"
  import { getLocalStorage, getSessionStorage } from "@/storageHandler"
  import { updateLocalStorage, updateSessionStorage } from "@/storageHandler"
  import { useRoute } from "vue-router"

  const teacher = ref(null)
  const courses = ref(null)
  const route = useRoute()

  if (getSessionStorage("loggedin")) {
    teacher.value = getSessionStorage("loggedin")
  }

  if (getLocalStorage("courses")) {
    let temp = getLocalStorage("courses")
    let result = temp.filter((course) => {
      return true //teacher.value.courses.includes(course.id)
    })
    courses.value = result
  }

  const showModal = ref(false)
  const showSettings = ref(false)
</script>

<template>
  <!-- <router-link to="/test">
    <button class="account-button">Statistik</button>
  </router-link> -->

  <h1 id="h1">Välkommen {{ teacher.name }}</h1>

  <section id="course-section">
    <h2>Dina kurser</h2>
    <template v-if="courses">
      <template v-for="course in courses" :key="course.id">
        <router-link
          :to="`/teacher/${route.params.userid}/course/${course.id}/`"
        >
          <h3>{{ course.name }}</h3>
        </router-link>
      </template>
    </template>
    <template v-else>
      <h1>Du har inga kurser inlaggda</h1>
    </template>
    <router-link to="/createcourseview">
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
    color: #0d0d0d;
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
</style>
