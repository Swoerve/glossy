<script setup>
  import { ref } from "vue"
  const { title, link, routeTo, height, width, bg } = defineProps({
    title: {
      type: String,
      required: true
    },
    link: {
      type: Boolean
    },
    routeTo: {
      type: String,
      default: "/"
    },
    height: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 100
    },
    secondary: Boolean,
    bg: {
      type: String,
      default: "white"
    }
  })
  console.log(bg)
</script>

<template>
  <template v-if="link">
    <div class="course-card-container">
      <router-link :to="routeTo">
        <div id="course-card">
          <h1>{{ title }}</h1>
        </div>
      </router-link>
    </div>
  </template>
  <template v-else>
    <div id="course-card">
      <h1>{{ title }}</h1>
    </div>
  </template>
</template>

<style scoped>
  * {
    --height: v-bind("String(height) + 'px'");
    --width: v-bind("String(width) + 'px'");
    --bg: v-bind("'#' + bg");
  }

  #course-card {
    box-sizing: border-box;
    border: black 2px solid;
    border-radius: 10px;
    height: var(--height);
    width: var(--width);
    background-color: var(--bg);
  }

  #course-card h1 {
    background-color: white;
    color: black;
    margin: 0;
    padding-bottom: 5px;
    border-bottom: black solid 2px;
    border-radius: 10px 10px 0px 0px;
  }

  #course-card-container {
    height: var(--height);
    width: var(--width);
    border-radius: 10px;
    background-color: var(--bg);
  }
</style>
