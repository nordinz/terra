<script setup>
const props = defineProps({
  page: Number,
  totalPages: Number
})
const emit = defineEmits(['goToPage'])
function buttonClick(page) {
  emit('goToPage', page)
}
</script>

<template>
  <button class="button" v-for="page in props.totalPages" :key="page" @click="buttonClick(page)">
    {{ page }}
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: var(--clr-accent);
  width: fit-content;
  border-radius: 0.25em;
  margin-left: 8px;
  inset: 0;
  border-width: 0;
  text-decoration: none;
  padding: 1rem;
}
</style>
