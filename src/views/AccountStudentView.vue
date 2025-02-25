<script setup>
  import{ref} from "vue"
  import Settings from "@/components/Settings.vue"
  const showSettings = ref(null)

</script>

<template>
  <nav id="navbar">
    <router-link to="accountstudentview/quizview">
      <button>Gå till quiz</button>  
    </router-link>
  
    <router-link to="/studentprofileview">
      <button>Profil</button>
    </router-link>
  
    <div> <!-- Detta gör att en settings ruta dyker upp-->
      <button @click="showSettings = true" class="account-button">Inställningar</button>
      <Settings :isOpen="showSettings" @close="showSettings = false"></Settings>
    </div>
  </nav>

  <h1>Välkommen elev!</h1>

  <section>
    <h2>Kurser</h2>

  </section>
  


</template> 

<style scoped>

#navbar{
  display: flex;
  justify-content:space-evenly; 
}

</style>