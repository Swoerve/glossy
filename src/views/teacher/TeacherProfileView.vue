<script setup>
  import { ref } from "vue"
  import { getSessionStorage } from "@/storageHandler"
  import { RouterLink } from "vue-router"
  import Button from "@/components/buttonComponent.vue"
  import userSettings from "@/components/user-settings.vue"

  const teacher = ref({
    name: "",
    email: "",
    password: ""
  });
  const showSettings = ref(false)
  const showEmailModal = ref(false)
  const showPasswordModal = ref(false)
  const newEmail = ref("")
  const newPassword = ref("")

  if (getSessionStorage("loggedin")) {
    teacher.value = getSessionStorage("loggedin")
  }

  // Update email function
  const updateEmail = () => {
    if (newEmail.value) {
      student.value.email = newEmail.value;
      newEmail.value = "";
      showEmailModal.value = false;
    }
  }

  // Update password function
  const updatePassword = () => {
    if (newPassword.value) {
      student.value.password = newPassword.value;
      newPassword.value = "";
      showPasswordModal.value = false;
    }
  }

</script>

<template>
  <div id="app">
  <h1>{{ teacher.name }}s profil</h1>
  <div id="picture-container">
    <img src="http://imgc.allpostersimages.com/images/P-473-488-90/68/6896/2GOJ100Z/posters/despicable-me-2-minions-movie-poster.jpg" class="image-cover" />
  </div>
  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*" />
  <input type="submit" />

  <!-- display email -->
  <p>E-mail: {{ teacher.email }}</p>
  <Button
  label="Ändra e-mail"
  color="btn-primary"
  @click="showEmailModal = true"
/>

  <!-- display password -->
  <p>Lösenord: {{ teacher.password }}</p>
  <Button
  label="Ändra lösenord"
  color="btn-primary"
  @click="showPasswordModal = true"
  />

  <br />

  <!-- setting  button -->
  <div>
    <Button
    label="Inställningar"
    color="btn-primary"
    @click="showSettings = true"
    />
  </div>

  <user-settings :is-open="showSettings" @close="showSettings = false" />

  <!-- email modal -->
  <div v-if="showEmailModal" class="modal">
    <div class="modal-content">
      <h2>Ändra E-Mail</h2>
      <input type="email" v-model="newEmail" placeholder="Ny e-mail" />
      <button @click="updateEmail">Spara</button>
      <button @click="showEmailModal = false">Avbryt</button>
    </div>
  </div>

  <!-- password modal -->
  <div v-if="showPasswordModal" class="modal">
    <div clasS="modal-content">
      <h2>Ändra Lösenord</h2>
      <input type="password" v-model="newPassword" placeholder="Nytt lösenord" />
      <button @click="updatePassword">Spara</button>
      <button @click="showPasswordModal = false">Avbryt</button>
    </div>
  </div>
</div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}


h1 {
  font-size: 24px;
  color: #222;
  margin-bottom: 20px;
}


#picture-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-cover {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #ddd;

}

button,
.Button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

button:hover,
.Button:hover {
  background-color: #0056b3;
}


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
}


.modal h2 {
  font-size: 20px;
  margin-bottom: 16px;
}

</style>
