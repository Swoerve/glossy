<script setup> 
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const role = ref(null)
const classCode = ref(null)
const email = ref(null)
const password = ref(null)
const checked = ref(null)


</script>

<template>
    <div class="createquiz-container">
      <div id="quiz">
        <h1 id="header">Skapa quiz</h1>
        <p class="quiztext">Titel</p>
        <input v-model="titel" placeholder="Quiz 1 titel" class="quizbutton">
        <p class="quiztext">Svårighetsgrad:</p>
        <select name="difficulty" id="difficulty" class="quizbutton">
            <option value="easy">Enkel</option>
            <option value="medium">Medel</option>
            <option value="hard">Hård</option>
        </select>
        <p class="quiztext">Fråga 1 {{ question1 }}</p>
        <input v-model="question1" placeholder="Skriv fråga 1" class="quizbutton"   >
        <p class="quiztext">Lägg till svarsalternativ</p>
        <button class="quizbutton">+</button>
        <p class="quiztext">Lägg till fler frågor</p>
        <button class="quizbutton">+</button><br>
        <button class="done-button">Klar</button>
      </div>
    </div>
</template>

<style scoped>

#header {
    color: black;
}

.createquiz-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

#quiz {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 0.5px solid #9667e0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #f2ebfb;
}

.quiztext {
    color: black;   
}

.quizbutton {
    text-align: left;
    background-color: white;
    border: 0.5px solid #9667e0;
}

.done-button {
    height: 40px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #D4BBFC;
    border-radius: 4px;
    margin-top: 10px;
}

</style>