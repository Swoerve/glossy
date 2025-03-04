<script setup>

import Button from '../components/buttonComponent.vue'
import SignUpView from './SignUpView.vue';

const handleClick = () => {
  if (!isRouterLink.value) {
    emit('click');
  }
};

</script> 

<template>
  <div class="homepage">
    <img src="../assets/glossy.png" alt="logo" class="picture" />
    <h1>Välkommen!</h1>
    <router-link to="/login">
      <button class="loginbutton login">Logga in</button>
    </router-link>
    <router-link to="/signupview">
      <button class="register login">Registrera dig</button>
    </router-link>
    <Button label="Registrera dig" color="btn-primary" :to="{ name: 'signupview'}"></Button>
  </div>
  </template>

<style>
  body {  
    background-image: url(../assets/wallpaper.png);
    background-size: cover;
  }

  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .picture {
    width: auto;
    height: calc(40vh - 50px);
    margin-left: 20px;
  }

  .login {
    margin-top: 5px;
    width: 170px;
    border-radius: 4px;
    color: white;
    height: 40px;
  }

  .loginbutton {
    background-color: #d4bbfc;
    border: 0.5px solid #9667e0;
  }

  .register {
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
  }

  h1 {
    color: white;
  }
</style>
