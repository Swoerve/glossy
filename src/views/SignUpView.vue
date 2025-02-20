<script setup> 
import { ref } from "vue"
import { useRouter } from "vue-router"
</script>

<template>
    <div id="signup">
        <p>Namn: {{ email }}</p>
        <input v-model="email" placeholder="Skriv in din skolmail här!">
        <select v-model="role">
            <option disabled value="">Välj din roll</option>
            <option>Lärare</option>
            <option>Elev</option>
        </select>
        <p>Kurskod: {{ courseCode }}</p>
        <input v-model="courseCode" placeholder="Skriv in din kurskod här!">
        <input type="checkbox" id="terms" v-model="checked" />
        <label for="terms"> {{ checked }}</label>
    </div>
</template>

<style scoped>
  
</style>