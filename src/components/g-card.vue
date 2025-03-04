<script setup>
  import { ref } from "vue"
  const { title } = defineProps({
    title: {
      type: String,
      required: true
    },
    link: {
      type: Boolean
    },
    routeTo: {
      type: String
    }
  })
</script>

<template>
  <template v-if="link">
    <div>
      <router-link>
        <div>
          <h1>{{ title }}</h1>
        </div>
      </router-link>
    </div>
  </template>
  <template v-else>
    <div>
      <h1>{{ title }}</h1>
    </div>
  </template>
</template>

<style scoped>
  div {
  }
</style>
