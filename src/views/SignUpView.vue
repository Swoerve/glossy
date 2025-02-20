<script setup> 
import { ref } from "vue"
import { useRouter } from "vue-router"
</script>

<template>
    <div id="signup">
        <h1>Registrera dig</h1>
        <p>E-mail: {{ email }}</p>
        <input v-model="email" placeholder="Skriv in din skolmail här!"><br>
        <p>Välj din roll</p>
        <select v-model="role">
            <option>Lärare</option>
            <option>Elev</option>
        </select><br>
        <p>Kurskod: {{ courseCode }}</p>
        <input v-model="courseCode" placeholder="Skriv in din kurskod här!"><br>
        <p>Jag accepterar villkoren</p>
        <input type="checkbox" id="terms" v-model="checked" />
        <label for="terms"> {{ checked }}</label>
    </div>
</template>

<style scoped>

</style>