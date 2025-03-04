<script setup>

import { computed } from 'vue'

const props = defineProps({
    label: String,
    color: String,
    size: String,
    to: [String, Object]
})

defineEmits(['click'])

const isRouterLink = computed(() => !!props.to)

</script>

<template>
    <router-link v-if="isRouterLink" :to="to">
        <button :class="[color, size]">
            {{ label }}
        </button>
    </router-link>
    <button v-else :class="[color, size]" @click="$emit('click')">
        {{ label }}
    </button>
</template>

<style scoped>

.btn-primary {
    height: 40px;
    color: white;
    background-color: #9667e0;
    border: 0.5px solid #d4bbfc;
    border-radius: 4px;
    width: 170px;
    margin-top: 5px;
}

.btn-secondary {
    height: 40px;
    color: white;
    background-color: #d4bbfc;
    border: 0.5px solid #9667e0;
    border-radius: 4px;
    width: 170px;
    margin-top: 5px;
}

</style>