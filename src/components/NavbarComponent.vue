<script setup>
  import { ref, computed, watch } from "vue"
  import { RouterLink, RouterView } from "vue-router"
  import { useRoute } from "vue-router"
  import { getLocalStorage, getSessionStorage } from "../storageHandler"
  // import router from "..router/"
  const route = useRoute()
  const isLoggedIn = ref(false)
  const showProfile = computed(() => isLoggedIn.value)
  const showHomeButton = ref(false)
  const showProfileMenu = ref(false)

  //En funktion för att man ska kunna klicka på profil knappen för att få fram menun på mobil
  function toggleProfileMenu() {
    showProfileMenu.value = true
  }

  function closeProfileMenu(event) {
    if (!event.target.closest(".profile-container")) {
      showProfileMenu.value = false
    }
  }

  if (getSessionStorage("loggedin")) {
    showHomeButton.value = true
  }

  //Håller koll om det är lärare eller student i route
  const studentRoute = computed(() => route.name === "accountstudentview")
  const teacherRoute = computed(() => route.name === "accountteacherview")

  //Kollar om path är elev och returnerar true
  const student = computed(() => {
    if (route.fullPath.includes("/student/")) {
      return true
    }
    return false
  })
  const teacher = computed(() => {
    if (route.fullPath.includes("/teacher")) {
      return true
    }
    return false
  })
  console.log(student)

  function loadUserProfile() {
    if (getSessionStorage("loggedin")) {
      isLoggedIn.value = true
    }
  }

  // vue watcher that keeps track of route, whenever route changes, it calls loaduserProfile()
  watch(route, (to, from) => {
    //console.log("app watch route tick")
    loadUserProfile()
  })

  function logOut() {
    sessionStorage.removeItem("loggedin")
    isLoggedIn.value = false
  }
</script>
<template>
  <nav>
    <div v-if="showHomeButton">
      <router-link
        v-if="student && isLoggedIn"
        :to="`/student/${route.params.userid}`"
      >
        <i id="home" class="fa fa-home" />
      </router-link>

      <router-link
        v-if="teacher && isLoggedIn"
        :to="`/teacher/${route.params.userid}`"
      >
        <i id="home" class="fa fa-home" />
      </router-link>
    </div>
    <div v-if="isLoggedIn" class="profile-container">
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

        <router-link v-if="isLoggedIn" @click="logOut" :to="`/`">
          <li>Logga ut</li>
        </router-link>
      </ul>
    </div>
  </nav>
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

  #home {
    font-size: 1.87em;
    color: #fcfbfb;
    margin-left: 0.45em;
  }

  #home:hover {
    color: #141313;
  }

  .profile-container {
    position: relative;
    display: inline-block;
  }

  #user {
    font-size: 1.87em;
    color: #fcfbfb;
    margin-left: 0.55em;
    margin-right: 1.2em;
  }

  #user:hover {
    color: #141313;
    cursor: pointer;
  }

  .user-menu {
    visibility: hidden;
    opacity: 0;
    margin: 0.4em;
    background-color: #cc79ff;
    position: absolute;
    top: 100%;
    left: 2%;
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

  @media (max-width: 580px) {
    #user {
      margin-right: 1.4em;
    }
  }
</style>
