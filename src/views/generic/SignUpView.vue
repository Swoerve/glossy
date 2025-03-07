<script setup>
  import {
    setSessionStorage,
    setLocalStorage,
    getLocalStorage
  } from "@/storageHandler"
  import { updateLocalStorage, updateSessionStorage } from "@/storageHandler"

  import { v4 } from "uuid"
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  import logo from "@/assets/glossy.png"

  const router = useRouter()

  const role = ref("student")
  const classCode = ref(null)
  const email = ref("")
  const password = ref(null)
  const checked = ref(false)
  const name = ref(null)

  const errorMail = ref("must be a valid email")
  const showErrorMail = ref(false)

  function isValidEmail() {
    let condition = {
      invalidEmail: false,
      existingEmail: false
    }
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regex.test(email.value)) {
      condition.invalidEmail = true
    } else {
      condition.invalidEmail = false
      errorMail.value = "must be a valid email"
    }
    if (role.value === "teacher") {
      let users = getLocalStorage("teachers")
      if (users) {
        users.forEach((user) => {
          if (email.value === user.email) {
            condition.existingEmail = true
          }
        })
      }
    } else {
      let users = getLocalStorage("students")
      if (users) {
        users.forEach((user) => {
          if (email.value === user.email) {
            condition.existingEmail = true
          }
        })
      }
    }
    return condition
  }

  //Kollar så att alla fält är ifyllda och checkar om värdet från select element är lärare eller elev
  function register() {
    let check = isValidEmail()
    if (!check.invalidEmail) {
      return null
    }
    if (check.existingEmail) {
      errorMail.value = "This email is already associated with an account"
      showErrorMail.value = true
      return null
    }

    //Skapar ett objekt för användaren
    let user = {
      id: null,
      name: "",
      email: "",
      password: "",
      courses: []
    }

    if (email.value && password.value && role.value && checked.value) {
      if (role.value === "teacher") {
        user.id = v4()
        user.name = name.value
        user.email = email.value
        user.password = password.value
        console.log(user)
        setSessionStorage("loggedin", user) //Kollar att användaren är inloggad
        updateLocalStorage("teachers", user) //Lägger till konton i localStorage

        router.push(`/teacher/${user.id}/`) //Gör att knappen skickar dig till lärarvyn
      } else if (role.value === "student") {
        user.id = v4()
        user.name = name.value
        user.email = email.value
        user.password = password.value
        setSessionStorage("loggedin", user)
        updateLocalStorage("students", user)

        router.push(`/student/${user.id}/`) // Gör att knappen skickar användren till elevvyn
      }
    } else {
      alert("Fyll i alla fält och acceptera villkoren")
    }
  }
</script>

<template>
  <div class="logo-container">
    <img :src="logo" alt="logo" class="logo" />
  </div>
  <div class="signup-container">
    <div id="signup">
      <h1 id="header">Registrera dig</h1>
      <label for="email">E-mail: {{ email }}</label>
      <input
        type="email"
        v-model="email"
        id="email"
        name="email"
        placeholder="Skriv in din skolmail här"
        class="signup-input"
      /><br />
      <p
        style="color: red"
        v-show="
          (!isValidEmail().invalidEmail && email.length > 0) || showErrorMail
        "
      >
        {{ errorMail }}
      </p>
      <label for="name">Namn: {{ name }}</label>
      <input
        v-model="name"
        placeholder="John Doe"
        id="name"
        name="name"
        class="signup-input"
        type="text"
      /><br />
      <label for="password">Lösenord: {{ password }}</label>
      <input
        v-model="password"
        id="password"
        name="password"
        placeholder="Ge aldrig ut ditt lösenord"
        class="signup-input"
        type="password"
      /><br />
      <label for="role">Välj din roll:</label>
      <select v-model="role" id="role" name="role" class="signup-input">
        <option value="teacher">Lärare</option>
        <option value="student">Elev</option></select
      ><br />

      <label for="classcode" v-if="role === 'Student'"
        >Klasskod: {{ classCode }}</label
      >
      <input
        v-if="role === 'Student'"
        v-model="classCode"
        id="classcode"
        name="classcode"
        placeholder="Skriv in din klasskod här"
        class="signup-input"
      /><br />
      <label id="label" for="terms"
        ><input type="checkbox" id="terms" v-model="checked" />Jag accepterar
        <a href="https://www.google.se/?hl=sv">Villkoren</a></label
      >
      <button @click="register" id="signup-button">Registrera dig</button>
      <router-link to="/">
        <button class="back">Tillbaka</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  #header {
    color: black;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    margin-left: 20px;
  }

  .logo {
    width: auto;
    height: calc(40vh - 50px);
  }

  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(60vh - 50px);
    width: 100%;
    color: black;
  }

  #signup {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    border: 0.5px solid #9667e0;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f2ebfb;
  }

  .signup-input {
    text-align: left;
    background-color: white;
    border: 0.5px solid #9667e0;
  }

  #signup-button {
    height: 40px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
    margin-top: 10px;
  }

  .back {
    border-radius: 4px;
    margin-top: 10px;
    background-color: #f2ebfb;
    margin-left: 170px;
  }

  #label {
    display: block;
    padding-left: 15px;
    text-indent: -15px;
  }

  #terms {
    width: 13px;
    height: 13px;
    padding: 0;
    margin-left: 0px;
  }

  br {
    margin: 10px 0px;
  }
</style>
