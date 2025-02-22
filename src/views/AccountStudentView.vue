<script setup>
  import{ref} from "vue"
  import Settings from "@/components/Settings.vue"
  const showSettings = ref(null)

</script>

<template>
  <Router-Link to="accountstudentview/quizview"> Gå till quiz </Router-Link>
  <button>Profil</button>

  <div> <!-- Detta gör att en settings ruta dyker upp-->
    <button @click="showSettings = true" class="account-button">Inställningar</button>
    <Settings :isOpen="showSettings" @close="showSettings = false"></Settings>
  </div>

</template>