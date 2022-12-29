<script setup>
import { ref } from "vue";
import ProgressBar from "@/components/progress/ProgressBar.vue";
import ProgressCircle from "@/components/progress/ProgressCircle.vue";
import Button from "@/components/Button.vue";

const percentBar = ref(40);
const percentCircle = ref(60);

const addPercentBar = () => {
  percentBar.value += 10;
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
};
const addPercentCircle = () => {
  percentCircle.value += 10;
  if (percentCircle.value > 100) {
    percentCircle.value = 100;
  }
};
</script>

<template>
  <h1 class="title-1">Progress</h1>
  <h2 class="title-2">Progress bar</h2>
  <div class="line line__block">
    <progress-bar maxWidth="400px" :percent="percentBar" color="primary" />
    <Button label="Add 10%" @click="addPercentBar" />
  </div>
  <h2 class="title-2">Progress Circle</h2>
  <div class="line line__block">
    <progress-circle :percent="percentCircle" color="secondary" />
    <Button label="Add 10%" color="secondary" @click="addPercentCircle" />
  </div>
</template>
