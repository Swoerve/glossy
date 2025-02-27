<!-- <script setup>
  import { defineEmits } from 'vue'
  import { defineProps } from 'vue'
  import {ref, watch} from 'vue'

  const emit = defineEmits(["close"])
  const closeModal = () =>{
    emit("close")
  }

  const props = defineProps({
    isOpen: Boolean,
  })

  const course = ref(null)

  function createCourse(event){
    event.preventDefault()
    localStorage.setItem("course", course.value)
    alert(`Kursen "${course.value}" har sparats!`)
  }


</script> -->
<!-- <template> -->
<!--Hej-->
<!-- </template> -->
<!-- <template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content" @click.stop>
      <section>
        <form @submit="createCourse">
          <label for="coursename"></label>
          <input id="#coursename" v-model="course">
          <button type="submit">Skapa kurs</button>
        </form>
      </section>
      <button class="close-btn">Stäng ner</button>
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
  padding: 100px;
  border-radius: 3px;
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
 </style> -->
