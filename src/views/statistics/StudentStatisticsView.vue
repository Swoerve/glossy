<script setup>
  import { ref } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute()
</script>
<template>
  <h1>Hej</h1>
  <router-link
    :to="`/teacher/${route.params.userid}/course/${route.params.courseid}/coursestatistics`"
    ><button>Tillbaka</button></router-link
  >
</template>
