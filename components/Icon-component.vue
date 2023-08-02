<template>
  <component :is="icon" :style="{ width: props.size.width, height: props.size.height }" />
</template>

<script setup>
import {defineAsyncComponent} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Object,
    default: () => ({width: '16px', height: '16px'}),
  },
});

const icon = defineAsyncComponent(() => import(`/assets/icons/${props.name}.svg`))
</script>

<style scoped>

</style>