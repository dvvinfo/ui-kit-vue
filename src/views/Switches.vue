<script setup>
import { ref } from "vue";
import Switch from "@/components/Switch.vue";

const switchActive = ref(false);
</script>

<template>
  <h1 class="title-1">Switch</h1>
  <div class="line">
    <Switch
      label="switch"
      id="switch"
      name="switch"
      value="I like it"
      v-model:checked="switchActive"
    />
  </div>
</template>
