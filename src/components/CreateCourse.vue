<script setup>
  import { defineEmits } from 'vue'
  import { defineProps } from 'vue'
  import {ref} from 'vue'

  const emit = defineEmits(["close"])
  const closeModal = () =>{
    emit("close")
  }

  const props = defineProps({
    isOpen: Boolean,
  })

  const course = ref([])


</script>

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content" @click.stop>  <!-- stoppar alla clicks i modal från att stänga ner den -->
      <section>
        <form>
          <label for="coursename"></label>
          <input id="#coursename" v-model="course">
        </form>
      </section>
      <button class="close-btn" @click="closeModal">Stäng ner</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000a6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
 </style>