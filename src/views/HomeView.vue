<!-- <script setup lang="ts">


</script> -->


<template>
  <div class="homepage">
    <img src="../assets/glossy.png" alt="logo" class="picture">
    <h1>Välkommen!</h1>
    <router-link to="/login">
      <button class="loginbutton login" >Logga in</button>
    </router-link>
    <router-link to = "/signupview">
      <button class="register login">Registrera dig</button>
    </router-link>
  </div>
    

</template>


<style>

body {
  background-image: url(../assets/wallpaper.png);
}

.homepage{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2ebfb;
}

.picture{
  width: 500px;
  height: auto;
}

.login{
  margin-top: 5px;
  width: 170px;
  border-radius: 4px;
  color:white;
  height: 40px;
}

.loginbutton{
  background-color: #D4BBFC;
  border: 0.5px solid #9667e0;
}

.register{
  background-color: #9667e0;
  border: 0.5px solid #d4bbfc
}
</style>