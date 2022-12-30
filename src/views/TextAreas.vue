<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { helpers, minLength, required } from "@vuelidate/validators";
import TextArea from "@/components/TextArea.vue";
import Button from "@/components/Button.vue";

const textField = ref("");

const rules = computed(() => ({
  textField: {
    minLength: helpers.withMessage(
      `Минимальная длинна: 50 символа`,
      minLength(50)
    ),
    required: helpers.withMessage(`Введите текст`, required),
  },
}));

const v = useVuelidate(rules, {
  textField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) {
    return;
  } else {
    alert("Form submit");
  }
};
</script>

<template>
  <div class="title-1">Teaxtarea</div>
  <form @submit.prevent="submitForm">
    <text-area
      label="Your text"
      name="text"
      height="200px"
      placeholder="input your text"
      v-model:value="v.textField.$model"
      :error="v.textField.$errors"
    />
    <Button label="Submit" :rounded="true" />
  </form>
</template>
