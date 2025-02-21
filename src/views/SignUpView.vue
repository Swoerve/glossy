<script setup> 
import { ref } from "vue"
import { useRouter } from "vue-router"
</script>

<template>
    <div class="logo-container">
        <img src="../assets/glossy.png" alt="logo" class="logo">
    </div>
    <div class="signup-container">
            <div id="signup">
        <h1 id="header">Registrera dig</h1>
        <p>E-mail: {{ email }}</p>
        <input v-model="email" placeholder="Skriv in din skolmail här"><br>
        <p>Lösenord: {{ password }}</p>
        <input v-model="password" placeholder="Ge aldrig ut ditt lösenord"><br>
        <p>Välj din roll:</p>
        <select v-model="role">
            <option>Lärare</option>
            <option>Elev</option>
        </select><br>
        <p>Kurskod: {{ courseCode }}</p>
        <input v-model="courseCode" placeholder="Skriv in din kurskod här"><br>
        <p>Jag accepterar villkoren✅</p>
        <a href="https://www.google.se/?hl=sv">Villkor</a>
        <input type="checkbox" id="terms" v-model="checked" />
        <label for="terms"> {{ checked }}</label>
        <button id="signup-button">Registrera dig</button>
    </div>
    </div>
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

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

#signup {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 0.5px solid #9667e0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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

</style>