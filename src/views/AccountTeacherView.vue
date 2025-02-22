<script setup> 
  import{ref}from "vue"
  import CreateCourse from "@/components/CreateCourse.vue"
import Settings from "@/components/Settings.vue";
 
  const showModal = ref(false)
  const showSettings = ref(false)
  
</script>

<template>
  <div class="logo-container">
    <img src="../assets/glossy.png" alt="logo" class="logo">
  </div>

  <div id="idk">
  <h1 id="h1">Välkommen lärare</h1>

  <div> <!--Detta gör att en liten ruta med ett input fålt dyker upp-->
    <button @click="showModal = true" class="account-button">Skapa en ny kurs</button>
    <CreateCourse :isOpen="showModal" @close="showModal = false"></CreateCourse>
  </div>

  <div> <!--Detta tar en till en ny sida där man kan skapa ett quiz-->
    <router-link to = "/createquizview">
    <button class="account-button">Skapa quiz</button>
    </router-link>
  </div>
  <button class="account-button">Statistik</button>


  <div> <!-- Detta gör att en settings ruta dyker upp-->
    <button @click="showSettings = true" class="account-button">Inställningar</button>
    <Settings :isOpen="showSettings" @close="showSettings = false"></Settings>
  </div>
</div>
</template>

<style scoped>

.logo-container {
  display: flex;
  justify-content: center;
  margin-left: 30px;
}

.logo {
  width: 500px;
  height: auto;
}

#h1 {
  color: white;
}

#idk {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.account-button {
  margin-top: 15px;
  height: 40px;
  width: 170px;
  color: white;
  background-color: #9667e0;
  border: 0.5px solid #D4BBFC;
  border-radius: 4px;
}

</style>