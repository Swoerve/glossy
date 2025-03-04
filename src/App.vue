<script setup>
  import { ref, computed } from "vue"
  import { RouterLink, RouterView } from "vue-router"
  import { useRoute } from "vue-router"
  import Settings from "@/components/user-settings.vue"
  import { getLocalStorage, getSessionStorage } from "./storageHandler"

  const showSettings = ref(null)
  const route = useRoute()

  function seeIfLoggedin() {
    // console.log("boohoo")
    // console.log(getSessionStorage("loggedin"))
    if (getSessionStorage("loggedin")) {
      return true
    } else {
      return false
    }
  }

  //Håller koll om det är lärare eller student i route
  const studentRoute = computed(() => route.name === "accountstudentview")
  const teacherRoute = computed(() => route.name === "accountteacherview")

  const student = ref(getLocalStorage("students"))
  const teacher = ref(getLocalStorage("teachers"))
  console.log(student)

  function logOut() {
    sessionStorage.removeItem("loggedin")
  }
</script>

<template>
  <nav>
    <div v-if="seeIfLoggedin()" class="profile-container">
      <i id="user" class="fa fa-user" />
      <ul class="user-menu">
        <!--La in en v-if som kollar om routern är för en elev och då visas
      profilknappen för elven-->
        <router-link
          v-if="student && studentRoute"
          :to="`/student/${route.params.userid}/studentprofileview`"
        >
          <li>Din profil</li>
        </router-link>

        <!--En v-if som kollar länken är för lärare och visar då kanppen-->
        <router-link
          v-if="teacher && teacherRoute"
          :to="`/teacher/${route.params.userid}/teacherprofileview`"
        >
          <li>Profil</li>
        </router-link>

        <router-link v-if="seeIfLoggedin()" @click="logOut" :to="`/`">
          <li>Logga ut</li>
        </router-link>
      </ul>
    </div>

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

  .profile-container {
    position: relative;
    display: inline-block;
  }

  #user {
    font-size: 1.87em;
  }

  .user-menu {
    visibility: hidden;
    opacity: 0;
    margin: 0.4em;
    background-color: #cc79ff;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 160px;
    z-index: 1;
    transition: opacity 0.1s ease, visibility 0.1s ease;
    border-radius: 5px;
    padding: 0;
  }

  .user-menu li {
    color: #141313;
    display: block;
    text-decoration: none;
    padding: 1em;
  }

  .user-menu li:hover {
    background-color: #d99dff;
  }

  .profile-container:hover .user-menu {
    visibility: visible;
    opacity: 1;
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
