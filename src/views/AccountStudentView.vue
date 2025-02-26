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

  <h1>Hej elev!</h1>

  <section id="course-section">
    <h2>Kurser</h2>
    <div id="list-items">
      <ul>
        <!--Här ska alla kurser som eleven har läggas in-->
        <li>Hejsan</li>
        <li>Hej</li>
        <li>h</li>
        <li>5</li>
        <li>yghu</li>
      </ul>
    </div>
  </section>
</template> 

<style scoped>

/*Detta är bara tillfällig css*/

#navbar{
  display: flex;
  justify-content:space-evenly; 
}

#course-section{
  background-color: aqua;
  padding: 20px;
  border-radius: 5px;
 /* Adjust based on your layout */
  text-align: center;
}

#list-items {
  display: flex;
  background-color: beige;
  flex-wrap: wrap; /* Ensures items wrap on smaller screens */
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  /* justify-content: center; */
  list-style: none;
  width: 100em;
}

li {
  background-color: white;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  text-align: center;
  min-width: 80px; /* Ensures a good size */
}


</style>