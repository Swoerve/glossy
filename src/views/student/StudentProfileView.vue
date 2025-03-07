<script setup>
import { ref } from "vue";
import { getSessionStorage } from "@/storageHandler";
import { RouterLink } from "vue-router";
import Button from "@/components/buttonComponent.vue";
import userSettings from "@/components/user-settings.vue";

const student = ref({
  name: "",
  email: "",
  password: ""
});
const showSettings = ref(false);
const showEmailModal = ref(false);
const showPasswordModal = ref(false);
const newEmail = ref("");
const newPassword = ref("");

if (getSessionStorage("loggedin")) {
  student.value = getSessionStorage("loggedin");
}

// Function to update email
const updateEmail = () => {
  if (newEmail.value) {
    student.value.email = newEmail.value;
    newEmail.value = ""; 
    showEmailModal.value = false; 
  }
};

// Function to update password
const updatePassword = () => {
  if (newPassword.value) {
    student.value.password = newPassword.value;
    newPassword.value = ""; 
    showPasswordModal.value = false; 
  }
};
</script>

<template>
  <h1>{{ student.name }}s profil</h1>
  <div id="picture-container">
    <img src="http://imgc.allpostersimages.com/images/P-473-488-90/68/6896/2GOJ100Z/posters/despicable-me-2-minions-movie-poster.jpg" class="image-cover" />
  </div>
  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*" />
  <input type="submit" />
  
  <!-- Display email -->
  <p>E-mail: {{ student.email }}</p>
  <Button
    label="Ändra e-mail"
    color="btn-primary"
    @click="showEmailModal = true"
  />

  <!-- Display password -->
  <p>Lösenord: {{ student.password }}</p>
  <Button
    label="Ändra lösenord"
    color="btn-primary"
    @click="showPasswordModal = true"
  />

  <br />
  
  <!-- Settings Button -->
  <div>
    <Button
      label="Inställningar"
      color="btn-primary"
      @click="showSettings = true"
    />
  </div>

  <user-settings :is-open="showSettings" @close="showSettings = false" />

  <!-- Email Modal -->
  <div v-if="showEmailModal" class="modal">
    <div class="modal-content">
      <h2>Ändra E-mail</h2>
      <input type="email" v-model="newEmail" placeholder="Ny e-mail" />
      <button @click="updateEmail">Spara</button>
      <button @click="showEmailModal = false">Avbryt</button>
    </div>
  </div>

  <!-- Password Modal -->
  <div v-if="showPasswordModal" class="modal">
    <div class="modal-content">
      <h2>Ändra Lösenord</h2>
      <input type="password" v-model="newPassword" placeholder="Nytt lösenord" />
      <button @click="updatePassword">Spara</button>
      <button @click="showPasswordModal = false">Avbryt</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3em;
}

.picture-container {
  width: 150px;
}

.image--cover {
  width: 150px;
  height: 180px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  margin: auto;
  margin-top: calc(50vh - 100px);
}
</style>
