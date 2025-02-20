<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { RouterLink, RouterView } from "vue-router"


const router = useRoute();
</script>


<template>
    <main>
        <img src="../assets/glossy.png" alt="logo">
      <button>Logga in</button>
      <button>Registrera dig</button>
      <router-link to="">Tillbaka</router-link>

    </main>
  </template>