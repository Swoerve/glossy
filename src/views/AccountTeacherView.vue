<script setup>
  import { ref } from 'vue'
  import Settings from '@/components/user-settings.vue'
  import { getLocalStorage, getSessionStorage } from '@/storageHandler'
  import { updateLocalStorage, updateSessionStorage } from '@/storageHandler'

  const teacher = ref(null)
  const courses = ref(null)

  if (getSessionStorage('loggedin')) {
    teacher.value = getSessionStorage('loggedin')
  }

  if (getLocalStorage('courses')) {
    let temp = getLocalStorage('courses')
    let result = temp.filter((course) => {
      return teacher.value.courses.includes(course.id)
    })
    courses.value = result
  }

  const showModal = ref(false)
  const showSettings = ref(false)
</script>

<template>
  <div class="logo-container">
    <img src="../assets/glossy.png" alt="logo" class="logo" />
  </div>

  <nav id="idk">
    <!--Tar dig kurs sidan-->
    <router-link to="/createcourseview">
      <button class="account-button">Kurser</button>
    </router-link>

    <!--Detta tar en till en ny sida där man kan skapa ett quiz-->
    <!-- <router-link to="/createquizview">
      <button class="account-button">Skapa quiz</button>
    </router-link> -->

    <router-link>
      <button class="account-button">Statistik</button>
    </router-link>

    <!-- Detta gör att en settings ruta dyker upp-->
    <button @click="showSettings = true" class="account-button">
      Inställningar
    </button>
    <Settings :is-open="showSettings" @close="showSettings = false" />
  </nav>

  <h1 id="h1">Välkommen {{ teacher.name }}</h1>

  <section id="course-section">
    <h2>Dina kurser</h2>
    <template v-if="courses">
      <template v-for="course in courses" :key="course.id">
        <h1>{{ course.name }}</h1>
      </template>
    </template>
    <template v-else>
      <h1>Du har inga kurser inlaggda</h1>
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
    color: white;
  }

  #idk {
    display: flex;
    flex-direction: row;
  }

  .account-button {
    margin-top: 15px;
    height: 40px;
    width: 170px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
  }
</style>
