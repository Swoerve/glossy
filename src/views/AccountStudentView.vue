<script setup>
  import { ref } from 'vue'
  import Settings from '@/components/user-settings.vue'
  import { getLocalStorage, getSessionStorage } from '@/storageHandler'
  const showSettings = ref(null)
  const student = ref(null)
  const courses = ref(null)

  if (getSessionStorage('loggedin')) {
    student.value = getSessionStorage('loggedin')
  }

  if (getLocalStorage('courses')) {
    let temp = getLocalStorage('courses')
    let result = temp.filter((course) => {
      return student.value.courses.includes(course.id)
    })
    courses.value = result
  }
</script>

<template>
  <nav id="navbar">
    <router-link to="accountstudentview/quizview">
      <button>Gå till quiz</button>
    </router-link>

    <router-link to="/studentprofileview">
      <button>Profil</button>
    </router-link>

    <div>
      <!-- Detta gör att en settings ruta dyker upp-->
      <button @click="showSettings = true" class="account-button">
        Inställningar
      </button>
      <Settings :is-open="showSettings" @close="showSettings = false" />
    </div>
  </nav>

  <h1>Hej {{ student.name }}!</h1>

  <section id="course-section">
    <h2>Kurser</h2>
    <template v-if="courses">
      <template v-for="course in courses">
        <div>
          <h1>{{ course.name }}</h1>
        </div>
      </template>
    </template>
    <template v-else>
      <h1>
        You aren't part of any courses, ask your teacher for a course code
      </h1>
    </template>
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
