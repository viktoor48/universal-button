<template>
  <NuxtLink :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  }
})
</script>
