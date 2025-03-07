<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"
  import { RouterLink } from "vue-router"
  import Button from "@/components/buttonComponent.vue"
  import userSettings from "@/components/user-settings.vue"

  const student = ref(null)
  const showSettings = ref(null)

  if (getSessionStorage("loggedin")) {
    student.value = getSessionStorage("loggedin")
  }
</script>

<template>
  <h1>{{ student.name }}s profil</h1>
  <div id="picture-container">
    <img
      src="http://imgc.allpostersimages.com/images/P-473-488-90/68/6896/2GOJ100Z/posters/despicable-me-2-minions-movie-poster.jpg"
      class="image--cover"
    />
  </div>
  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*" />
  <input type="submit" />
  <p>E-mail: {{ student.email }}</p>
  <Button
    label="Ändra e-mail"
    color="btn-primary"
    :to="{ name: 'loginview' }"
  />
  <p>Lösenord: {{ student.password }}</p>
  <Button
    label="Ändra lösenord"
    color="btn-primary"
    :to="{ name: 'loginview' }"
  />
  <br />
  <div>
    <Button
      label="Inställningar"
      color="btn-primary"
      @click="showSettings = true"
    />
  </div>

  <user-settings :is-open="showSettings" @close="showSettings = false" />
</template>

<style scoped>
  h1 {
    font-size: 3em;
    margin-block: 0.67em;
  }

  .picture-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .italic {
    font-style: italic;
  }

  .image--cover {
    width: 150px;
    height: 150px;
    border-radius: 50%;

    object-fit: cover;
    object-position: center right;
  }

  .form {
    margin-top: 10px;
  }

  .p {
    margin-top: 20px;
  }
</style>
