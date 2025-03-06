<script setup>
  import { ref, computed, onMounted, watch } from "vue"
  import { onBeforeRouteUpdate, RouterLink, RouterView } from "vue-router"
  import { useRoute } from "vue-router"
  import navbar from "@/components/NavbarComponent.vue"
</script>

<template>
  <navbar />

  <RouterView />
</template>

<style scoped></style>
