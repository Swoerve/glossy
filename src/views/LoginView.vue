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
      <RouterLink to="./accountteacherview"></RouterLink>
      <button href="../views/AccountTeacherView.vue">Logga in som lärare</button>

    </main>
  </template>

<style scoped>

</style>