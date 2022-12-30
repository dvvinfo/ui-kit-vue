<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
  required,
} from "@vuelidate/validators";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      `Минимальная длинна: 3 симола`,
      minLength(3)
    ),
    required: helpers.withMessage(
      `Введите имя`,
      required
    ),
  },
  emailField: {
    email: helpers.withMessage(`Вы ели неверный email`, email),
  },
  luckyField: {
    required: helpers.withMessage(
      `Введите число`,
      required
    ),
    maxLength: helpers.withMessage(
      `Максимальная длинна: 2 симола`,
      maxLength(2)
    ),
    numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      `Пароли не совпадают`,
      sameAs(passwordField.value)
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
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
  <div class="title-1">Inputs</div>
  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      type="text"
      placeholder="input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      type="email"
      placeholder="input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      type="text"
      placeholder="input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      type="password"
      placeholder="please input your password"
      v-model:value="passwordField"
    />
    <Input
      label="Confirm password"
      name="confirmPassword"
      type="password"
      placeholder="please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />

    <Button label="Submit" :rounded="true" />
  </form>
</template>
