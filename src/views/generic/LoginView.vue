<script setup>
  import { getLocalStorage, setSessionStorage } from "@/storageHandler"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import { RouterLink, RouterView } from "vue-router"
  import Button from "../../components/buttonComponent.vue"

  const router = useRouter()
  const email = ref("")
  const password = ref("")

  function login(user) {
    if (user === "teacher") {
      let teachers = getLocalStorage("teachers")

      let filtered = teachers.filter((obj) => {
        console.log(obj)
        if (email.value === obj.email && password.value === obj.password) {
          return true
        } else {
          return false
        }
      })

      setSessionStorage("loggedin", filtered[0])
      router.push(`/teacher/${filtered[0].id}/`)
    } else {
      let students = getLocalStorage("students")

      let filtered = students.filter((obj) => {
        if (email.value === obj.email && password.value === obj.password) {
          return true
        } else {
          return false
        }
      })

      setSessionStorage("loggedin", filtered[0])
      router.push(`/student/${filtered[0].id}/`)
    }
  }
</script>

<template>
  <main>
    <div class="logo-container">
      <img :src="logo" alt="logo" class="logo" />
    </div>

    <input type="email" name="" id="" placeholder="email" v-model="email" />

    <input
      type="password"
      name=""
      id=""
      placeholder="password"
      v-model="password"
    />

    <Button
      label="Logga in som elev"
      color="btn-secondary"
      @click="login('student')"
    />
    <Button
      label="Logga in som lärare"
      color="btn-primary"
      @click="login('teacher')"
    />

    <router-link to="/">
      <button class="back">Tillbaka</button>
    </router-link>
  </main>
</template>

<style scoped>
  .logo-container {
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }

  .logo {
    width: 500px;
    height: auto;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login-button {
    margin-top: 10px;
    width: 170px;
    border-radius: 4px;
    color: white;
    height: 40px;
  }

  .login-student-button {
    margin-top: 200px;
    background-color: #d4bbfc;
    border: 0.5px solid #9667e0;
  }

  .login-teacher-button {
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
  }

  .back {
    border-radius: 4px;
    margin-top: 10px;
    background-color: #f2ebfb;
  }
</style>
