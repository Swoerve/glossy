<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { RouterLink, RouterView } from "vue-router";

const router = useRouter();
</script>


<template>
    <main>
      <img src="../assets/glossy.png" alt="logo">

      <router-link  to="/accountstudentview">
        <button>Logga in som elev</button>
      </router-link>

      <router-link to="/accountteacherview">
        <button>Logga in som lärare</button>
      </router-link>

    </main>
  </template>

<style scoped>

</style>