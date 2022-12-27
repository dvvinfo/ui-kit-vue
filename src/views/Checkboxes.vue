<script setup>
import { ref } from "vue";
import Checkbox from "@/components/checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);
const listOfHeroes = ref([
  { name: "Spider Man", id: "h1" },
  { name: "Batman", id: "h2" },
  { name: "Top", id: "h3" },
  { name: "Loki", id: "h4" },
]);

const selectedHeroes = ref([]);
</script>

<template>
  <h1 class="title-1">Checkboxes</h1>
  <h2 class="title-2">Checkboxes Active</h2>
  <div class="line">
    <Checkbox
      label="Checkboxes Active"
      id="checkboxesActive"
      name="checkboxesActive"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="title-2">Checkboxes Disabled</h2>
  <div class="line">
    <Checkbox
      label="Checkboxes Disabled"
      id="checkboxesDisabled"
      name="checkboxesDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="title-2">Checkboxes Group</h2>
  <div class="line line__block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes" />
  </div>
</template>
