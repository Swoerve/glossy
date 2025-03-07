<script setup>
  // props
  const { question, qid, answers } = defineProps({
    question: { type: Object, required: true },
    qid: { type: Number, required: true },
    answers: { type: Array, required: true }
  })

  // emits
  defineEmits(["answered"])
</script>

<template>
  <h2>{{ question.title }}</h2>
  <div class="answers">
    <button
      v-for="(answer, ind) in question.answers"
      :value="ind"
      @click="$emit('answered', [ind, qid])"
      :key="ind"
      :class="{ selected: answers[qid] === ind }"
    >
      {{ answer }}
    </button>
  </div>
</template>

<style scoped>
  .answers {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 80%;
  }

  button {
    margin-bottom: 1rem;
    height: 2rem;
    max-height: 5rem;
    width: 100%;
    flex-grow: 1;

    border: none;
    background-color: seashell;
    text-align: center;
    border-radius: 10px;
  }

  .selected {
    border: yellow 5px solid;
    border-radius: 10px;
  }

  h2 {
    text-align: center;
  }
</style>
