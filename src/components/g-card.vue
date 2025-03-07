<script setup>
  import { ref } from "vue"
  import gButton from "./buttonComponent.vue"
  import { useRoute, useRouter } from "vue-router"
  const {
    title,
    link,
    leftButton,
    middleButton,
    rightButton,
    routeTo,
    height,
    width,
    bg
  } = defineProps({
    title: {
      type: String,
      required: true
    },
    link: {
      type: Boolean
    },
    leftButton: {
      type: [Boolean, String],
      default: "left button"
    },
    middleButton: {
      type: Boolean
    },
    rightButton: {
      type: Boolean
    },
    routeTo: {
      type: String,
      default: "/"
    },
    height: {
      type: Number,
      default: 150
    },
    width: {
      type: Number,
      default: 300
    },
    secondary: Boolean,
    bg: {
      type: String,
      default: "white"
    }
  })

  const router = useRouter()
  const emit = defineEmits(["lclick", "mclick", "rclick"])
  console.log(bg)

  function propagate(event) {
    event.stopPropagation()
    emit("lclick", event)
  }
</script>

<template>
  <template v-if="link">
    <div class="course-card-container link" @click="router.push(routeTo)">
      <div id="course-card">
        <h1>{{ title }}</h1>
      </div>

      <g-button
        :label="leftButton"
        v-if="leftButton"
        @click="
          (event) => {
            event.stopPropagation()
            emit('lclick', event)
          }
        "
        id="left-button"
        class="buttons"
      />
      <g-button
        :label="middleButton"
        v-if="middleButton"
        @click="
          (event) => {
            event.stopPropagation()
            emit('mclick', event)
          }
        "
        id="middle-button"
      />
      <g-button
        :label="rightButton"
        v-if="rightButton"
        @click="
          (event) => {
            event.stopPropagation()
            emit('rclick', event)
          }
        "
        id="right-button"
      />
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

  .link {
    cursor: pointer;
    transition: all 0.3s;
  }

  .link:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.75);
  }

  .course-card-container {
    box-sizing: border-box;
    position: relative;
    height: var(--height);
    width: var(--width);
    border-radius: 10px;
    background-color: var(--bg);
    overflow: hidden;
    display: grid;
    grid-template-areas:
      "main main main"
      "left middle right";
    grid-template-rows: 4fr 1fr;
    grid-template-columns: repeat(3, 1fr);
  }

  #course-card {
    /* border: black 2px solid;
    border-radius: 10px; */
    /* height: var(--height);
    width: var(--width); */
    background-color: var(--bg);
    grid-area: main;
  }

  #course-card h1 {
    background-color: white;
    color: black;
    margin: 0;
    padding-bottom: 5px;
    border-radius: 8px 8px 0px 0px;
    box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 10px 0px 10px rgba(255, 255, 255, 1);
    overflow: hidden;
  }

  #bottom-container {
    /* height: 20%;
    width: 100%; */
    border-radius: 0 0 10px 10px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    border-left: 2px solid black;
    box-sizing: border-box;
    overflow: hidden;
    display: grid;
    grid-template-areas: "left middle right";
  }

  #left-button {
    border-radius: 0 0 0 8px;
    grid-area: left;
  }
  #middle-button {
    border-radius: 0;
    grid-area: middle;
  }
  #right-button {
    border-radius: 0 0 8px 0;
    grid-area: right;
  }
</style>
