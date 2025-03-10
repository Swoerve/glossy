<script setup>
  import Button from "@/components/buttonComponent.vue"
  import logo from "@/assets/glossy.png"
  //import SignUpView from "./SignUpView.vue"

  const handleClick = () => {
    if (!isRouterLink.value) {
      emit("click")
    }
  }
</script>

<template>
  <div class="homepage">
    <img :src="logo" alt="logo" class="picture" />
    <h1>Välkommen!</h1>
    <Button
      label="Logga in"
      color="btn-secondary"
      :to="{ name: 'loginview' }"
    />
    <Button
      label="Registrera dig"
      color="btn-primary"
      :to="{ name: 'signupview' }"
    />
  </div>
</template>

<style scoped>
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: testfont;
  }

  .picture {
    width: auto;
    height: calc(40dvh - 50px);
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
