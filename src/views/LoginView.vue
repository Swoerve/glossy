<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { RouterLink, RouterView } from "vue-router";

const router = useRouter();
</script>


<template>
    <main>
        <img src="../assets/glossy.png" alt="logo">
      <button href="">Logga in som elev</button>
      <router-link to="/accountteacherview">
        <button>Logga in som lärare</button>
      </router-link>
      

    </main>
  </template>

<style scoped>

</style>