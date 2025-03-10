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
    <router-link :to="`/teacher/${route.params.userid}/createcourseview`">
      <button class="account-button">Skapa en ny kurs (+)</button>
    </router-link>
    <template v-if="courses">
      <div class="course-container">
        <template v-for="course in courses" :key="course.id">
          <g-card
            :title="course.name"
            :bg="course.id.substr(0, 6)"
            :route-to="`/teacher/${route.params.userid}/course/${course.id}/`"
            right-button
            left-button="statistik"
            link
            @lclick="
              $router.push(
                `/teacher/${route.params.userid}/course/${course.id}/coursestatistics`
              )
            "
            @mclick="console.log('edit!')"
            @rclick="console.log('delete!')"
          />
        </template>
      </div>
    </template>
    <template v-else>
      <h1>Du har inga kurser inlagda</h1>
    </template>
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
    display: block;
    margin: 1rem auto;
    height: 40px;
    width: 150px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
    cursor: pointer;
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
