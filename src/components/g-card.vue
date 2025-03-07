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
    // title for card.
    title: {
      type: String,
      required: true
    },
    // if card is going to be a routerlink
    link: {
      type: Boolean
    },
    // if card is going to have a left button, can also input a string through this to give the button a label
    leftButton: {
      type: [Boolean, String]
    },
    // if card is going to have a middle button
    middleButton: {
      type: [Boolean, String]
    },
    // if card is going to have a right button
    rightButton: {
      type: [Boolean, String]
    },
    // the string link to where
    routeTo: {
      type: String,
      default: "/"
    },
    // height of the card
    height: {
      type: Number,
      default: 150
    },
    // width of the card
    width: {
      type: Number,
      default: 300
    },
    // background color
    bg: {
      type: String,
      default: "white"
    }
  })

  const router = useRouter()
  const emit = defineEmits(["lclick", "mclick", "rclick"])
  //console.log(bg)

  function propagate(em, event) {
    event.stopPropagation()
    emit(em, event)
  }
</script>

<template>
  <template v-if="link">
    <div class="course-card-container" @click="router.push(routeTo)">
      <div id="course-card">
        <h1>{{ title }}</h1>
      </div>

      <g-button
        :label="leftButton"
        v-if="leftButton"
        @click="propagate('lclick', event)"
        id="left-button"
        class="buttons"
      />
      <g-button
        :label="middleButton"
        v-if="middleButton"
        @click="propagate('mclick', event)"
        id="middle-button"
      />
      <g-button
        :label="rightButton"
        v-if="rightButton"
        @click="propagate('rclick', event)"
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
    background-color: var(--bg);
    grid-area: main;
  }

  #course-card h1 {
    background-color: white;
    color: black;
    margin: 0;
    padding-bottom: 5px;
    border-bottom: black solid 2px;
    border-radius: 8px 8px 0px 0px;
  }

  #bottom-container {
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
