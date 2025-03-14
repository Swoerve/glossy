<script setup>
  import { getLocalStorage, setLocalStorage } from '@/storageHandler'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { v4 as uuidv4 } from 'uuid'

  const router = useRouter()

  // Pushar ut value baserat på vad som skrivits ned
  const kurser = ref([])
  const kursNamn = ref('')
  const kursKod = ref('')

  let courses = getLocalStorage('courses')
  if (courses) {
    kurser.value = courses
  }

  function läggTillKurs() {
    if (kursNamn.value && kursKod.value) {
      kurser.value.push({
        id: uuidv4(),
        name: kursNamn.value,
        code: kursKod.value,
        students: [],
        quizzes: []
      })
      kursNamn.value = ''
      kursKod.value = ''
      setLocalStorage('courses', kurser.value)
    }
  }
</script>

<!-- Sökfält samt knapp för att lägga till kurs och kurskod -->
<template>
  <div class="container">
    <h1 class="title">Lägg till kurs</h1>
    <div class="form-group">
      <input v-model="kursNamn" placeholder="Kursnamn" class="input-field" />
      <input v-model="kursKod" placeholder="Kurskod" class="input-field" />
      <button @click="läggTillKurs()" class="add-button">Lägg till kurs</button>
      <!-- Lista över kurser och kurskod som skapats -->
    </div>
    <h2 class="subtitle">Dina kurser</h2>
    <div v-for="(kurs, index) in kurser" :key="index" class="course-card">
      <p class="course-name">Kursnamn: {{ kurs.name }}</p>
      <p class="course-code">Kurskod: {{ kurs.code }}</p>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .input-field {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .input-field:focus {
    border-color: #007bff;
    outline: none;
  }
  .add-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .add-button:hover {
    background-color: #0056b3;
  }
  .subtitle {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .course-card {
    border: 1px solid #e0e0e0;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .course-name {
    font-weight: bold;
  }
  .course-code {
    color: #666;
  }
</style>
