<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { RouterLink, RouterView } from "vue-router";

const router = useRouter();
</script>


<template>
    <main>
      <div class="logo-container">
        <img src="../assets/glossy.png" alt="logo" class="logo">
      </div>

      <router-link  to="/accountstudentview">
        <button class="login-button login-student-button" >Logga in som elev</button>
      </router-link>

      <router-link to="/accountteacherview">
        <button class="login-button login-teacher-button">Logga in som lärare</button>
      </router-link>

    </main>
  </template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 300px;
  height: auto;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-button {
  margin-top: 5px;
  width: 170px;
  border-radius: 4px;
  color:white;
  height: 40px;
}

.login-student-button {
  background-color: #D4BBFC;
  border: 0.5px solid #9667e0;
}

.login-teacher-button {
  background-color: #9667e0;
  border: 0.5px solid #d4bbfc
}
</style>