<template>
  <div class="flex justify-around">
    <v-btn
        @click="clickBtn"
        title="Кнопка"
        :inversion="false"
        :disabled="false"
    />
    <v-btn
        @click="clickBtn"
        title="Кнопка"
        :inversion="false"
        :disabled="false"
        size="Small"
    />
  </div>
</template>
<script setup>
import VBtn from "./components/v-btn";

const clickBtn = () => {
  console.log('click');
};
</script>

<style>
html,body {
  height: 100%;
  background: gray;
}
</style>