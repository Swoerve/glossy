<script setup>
  // props
  const { question, qid } = defineProps({
    question: { type: Object, required: true },
    qid: { type: Number, required: true }
  })

  // emits
  defineEmits(['answered'])
</script>

<template>
  <h1>{{ question.title }}</h1>
  <div class="answers">
    <button
      v-for="(answer, ind) in question.answers"
      :value="ind"
      @click="$emit('answered', [ind, qid])"
      :key="ind"
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
    max-width: 50%;
    max-height: 50%;
  }
</style>
