<script setup>
  import { ref } from 'vue'
  import { defineProps } from 'vue'
  import { defineEmits } from 'vue'

  const props = defineProps({
    isOpen: Boolean
  })

  const emit = defineEmits(['close'])
  function closeSettings() {
    emit('close')
  }

  const volume = ref(50)

  function changeVolume() {
    volume.value
  }
</script>

<template>
  <div v-if="isOpen" class="settings-container">
    <h2>Inställningar!</h2>
    <div class="settings-content" @click.stop>
      <section>
        <div>
          <label for="volume">Volym:{{ volume }}%</label>
          <input
            id="volume"
            type="range"
            min="0"
            max="100"
            v-model="volume"
            @input="changeVolume"
          />
        </div>
        <div />
        <button @click="closeSettings" />
      </section>
    </div>
  </div>
</template>

<style scoped>
  .settings-container {
    width: 320px;
    padding: 20px;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

  .settings-container:hover {
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .volume-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  label {
    font-size: 18px;
    font-weight: 500;
    color: #555;
  }

  input[type='range'] {
    width: 90%;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    background: #9667e0;
    border-radius: 5px;
    outline: none;
    transition: background 0.3s ease-in-out;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #9667e0;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
  }

  input[type='range']::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  input[type='range']:hover {
    background: #7e4dcf;
  }
</style>
