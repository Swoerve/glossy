<script setup>
  import { setSessionStorage, setLocalStorage } from '@/storageHandler'
  import { updateLocalStorage, updateSessionStorage } from '@/storageHandler'

  import { v4 } from 'uuid'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const role = ref('student')
  const classCode = ref(null)
  const email = ref('')
  const password = ref(null)
  const checked = ref(false)
  const name = ref(null)

  function isValidEmail() {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regex.test(email.value)) {
      return true
    } else {
      return false
    }
  }

  //Kollar så att alla fält är ifyllda och checkar om värdet från select element är lärare eller elev
  function register() {
    if (!isValidEmail()) {
      return null
    }

    //Skapar ett objekt för användaren
    let user = {
      id: null,
      name: '',
      email: '',
      password: '',
      courses: []
    }

    if (email.value && password.value && role.value && checked.value) {
      if (role.value === 'teacher') {
        user.id = v4()
        user.name = name.value
        user.email = email.value
        user.password = password.value
        setSessionStorage('loggedin', user) //Kollar att användaren är inloggad
        updateLocalStorage('teacher') //Lägger till konton i localStorage

        router.push(`/teacher/${user.id}`) //Gör att knappen skickar dig till lärarvyn
      } else if (role.value === 'student') {
        user.id = v4()
        user.name = name.value
        user.email = email.value
        user.password = password.value
        setSessionStorage('loggedin', user)
        updateLocalStorage('students', user)

        router.push(`/student/${user.id}`) // Gör att knappen skickar användren till elevvyn
      }
    } else {
      alert('Fyll i alla fält och acceptera villkoren')
    }
  }
</script>

<template>
  <div class="logo-container">
    <img src="../assets/glossy.png" alt="logo" class="logo" />
  </div>
  <div class="signup-container">
    <div id="signup">
      <h1 id="header">Registrera dig</h1>
      <p>E-mail: {{ email }}</p>
      <input
        type="email"
        v-model="email"
        placeholder="Skriv in din skolmail här"
        class="signup-input"
      /><br />
      <p v-show="!isValidEmail() && email.length > 0">hej</p>
      <p>Namn: {{ name }}</p>
      <input
        v-model="name"
        placeholder="John Doe"
        class="signup-input"
        type="text"
      /><br />
      <p>Lösenord: {{ password }}</p>
      <input
        v-model="password"
        placeholder="Ge aldrig ut ditt lösenord"
        class="signup-input"
        type="password"
      /><br />
      <p>Välj din roll:</p>
      <select v-model="role" class="signup-input">
        <option value="teacher">Lärare</option>
        <option value="student">Elev</option></select
      ><br />

      <p v-if="role === 'Student'">Klasskod: {{ classCode }}</p>
      <input
        v-if="role === 'Student'"
        v-model="classCode"
        placeholder="Skriv in din klasskod här"
        class="signup-input"
      /><br />
      <p>Jag accepterar villkoren✅</p>
      <a href="https://www.google.se/?hl=sv">Villkor</a>
      <input type="checkbox" id="terms" v-model="checked" />
      <label for="terms"> {{ checked }}</label>
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
    width: 500px;
    height: auto;
  }

  .signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
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

  #terms {
    display: flex;
    align-items: flex-start;
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
</style>
