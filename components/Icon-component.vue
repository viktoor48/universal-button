<template>
    <img :src="getIconPath(props.name)" :style="{ width: props.size.width, height: props.size.height }" />
<!--  <svg :style="{ width: props.size.width, height: props.size.height }">-->
<!--    <use :xlink:href="getIconPath(props.name)"/>-->
<!--  </svg>-->
</template>

<script setup>
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

const getIconPath = (iconName) => {
  return `../assets/icons/${iconName}`;
}

// const getIconPath = (iconName) => {
//   return `#icon-${iconName}`;
// }
</script>

<style scoped>

</style>