<script setup> 
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const role = ref(null)
const classCode = ref(null)
const email = ref(null)
const password = ref(null)
const checked = ref(null)


function register(){
  if(role.value === "Teacher"){
      router.push("/accountteacherview")
  }

  else if(role.value === "Student"){
    router.push("/accountstudentview")
  }

}
</script>

<template>
    <div class="logo-container">
        <img src="../assets/glossy.png" alt="logo" class="logo">
    </div>
    <div class="signup-container">
      <div id="signup">
        <h1 id="header">Registrera dig</h1>
        <p>E-mail: {{ email }}</p>
        <input v-model="email" placeholder="Skriv in din skolmail här" class="signup-input"><br>
        <p>Lösenord: {{ password }}</p>
        <input v-model="password" placeholder="Ge aldrig ut ditt lösenord" class="signup-input"><br>
        <p>Välj din roll:</p>
        <select v-model="role" class="signup-input">
            <option value="Teacher">Lärare</option>
            <option value="Student">Elev</option>
        </select><br>

        <p v-if="role === 'Student'">Klasskod: {{ classCode }}</p>
        <input v-if="role === 'Student' " v-model="classCode" placeholder="Skriv in din klasskod här" class="signup-input"><br>
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
  color:black;
}

#signup {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 0.5px solid #9667e0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
    border: 0.5px solid #D4BBFC;
    border-radius: 4px;
    margin-top: 10px;
}

.back{
  border-radius: 4px;
  margin-top: 10px;
  background-color: #f2ebfb;
  margin-left: 170px;
}

</style>