<script setup>
  import { ref, computed } from "vue"
  import { RouterLink, RouterView } from "vue-router"
  import { useRoute } from "vue-router"
  import Settings from "@/components/user-settings.vue"
  import { getLocalStorage, getSessionStorage } from "./storageHandler"

  const showSettings = ref(null)
  const route = useRoute()

  //Håller koll om det är lärare eller student i route
  const studentRoute = computed(() => route.name === "accountstudentview")
  const teacherRoute = computed(() => route.name === "accountteacherview")

  const student = ref(getLocalStorage("students"))
  const teacher = ref(getLocalStorage("teacher"))
  console.log(student)
  console.log(`${student.value}`)
</script>

<template>
  <nav>
    <router-link v-if="studentRoute || teacherRoute" :to="`/`">
      <button class="navbar-button">Logga ut</button>
    </router-link>

    <!--La in en v-if som kollar om routern är för en elev och då visas
    profilknappen för elven-->
    <router-link
      v-if="student && studentRoute"
      :to="`/student/${student.id}/studentprofileview`"
    >
      <button class="navbar-button">Elev profil</button>
    </router-link>

    <!--En v-if som kollar länken är för lärare och visar då kanppen-->
    <router-link
      v-if="teacher && teacherRoute"
      :to="`/teacher/${teacher.id}/teacherprofileview`"
    >
      <button class="navbar-button">lärare profil</button>
    </router-link>

    <div>
      <button class="navbar-button" @click="showSettings = true">
        Inställningar
      </button>
      <Settings :is-open="showSettings" @close="showSettings = false" />
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: end;
    gap: 20px;
    background: linear-gradient(
      90deg,
      #ddadeb 7%,
      #c56bde 37%,
      #9f4edd 65%,
      #8b2ad5 89%,
      #950bbf 98%
    );
    height: 50px;
    align-items: center;
  }

  .navbar-button {
    color: #ffffff;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 300;
    background-color: #5c04660e;
    padding: 12px;
    text-decoration: none;
    border: none;
  }

  .navbar-button:hover {
    color: #3e1e40;
  }
</style>
