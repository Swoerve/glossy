<script setup>
  import { ref } from "vue"
  import Settings from "@/components/user-settings.vue"
  import { getLocalStorage, getSessionStorage } from "@/storageHandler"
  import { updateLocalStorage, updateSessionStorage } from "@/storageHandler"
  import { useRoute } from "vue-router"
  import gCard from "@/components/g-card.vue"

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

<template id="main">
  <h1 id="h1">Välkommen {{ teacher.name }}</h1>

  <section id="course-section">
    <h2>Dina kurser</h2>
    <template v-if="courses">
      <div class="course-container">
        <template v-for="course in courses" :key="course.id">
          <g-card
            :title="course.name"
            :width="100"
            :bg="course.id.substr(0, 6)"
            :route-to="`/teacher/${route.params.userid}/course/${course.id}/`"
            link
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
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    margin-bottom: 1rem;
  }
</style>
