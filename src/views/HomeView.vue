<script setup lang="ts">
import LoginView from './LoginView.vue';

</script>


<template>
  <div>
    <h1>Välkommen!</h1>
    <router-link to="/login">
      <button>Logga in</button>
    </router-link>
  </div>
</template>
