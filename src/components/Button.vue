<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "button",
  },
  color: {
    type: String,
    default: "primary",
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  iconName: {
    type: String,
    required: false,
  },
  link: {
    type: Boolean,
    required: false,
  },
  size: {
    type: String,
    required: false,
    default: "normal",
  },
});
</script>

<template>
  <button
    :class="[
      'btn',
      `btn__${color}`,
      { btn__rounded: rounded },
      { btn__small: size === 'small' },
    ]"
    :disabled="disabled"
  >
    <span class="btn__icon-wrapper" v-if="iconName"
      ><img class="btn__icon" :src="`/src/assets/img/${iconName}.svg`" alt=""
    /></span>
    <router-link v-else-if="link" class="btn__link" to="/">{{
      label
    }}</router-link>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border: none;
  height: 52px;
  padding: 14px 46px;
  background-color: transparent;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: var(--white);
  transition: 0.2s;
  &:last-child {
    margin-right: 0;
  }
  &__info {
    background-color: var(--info);
    &:enabled:hover {
      background-color: var(--info-hover);
    }
  }
  &__info-light {
    background-color: var(--info-light);
    &:enabled:hover {
      background-color: var(--info-light-hover);
    }
  }
  &__primary {
    background-color: var(--primary);
    &:enabled:hover {
      background-color: var(--primary-hover);
    }
  }
  &__disabled {
    background-color: var(--disabled);
    color: var(--gray);
    &:enabled:hover {
      background-color: var(--disabled-hover);
    }
  }
  &__secondary {
    background-color: var(--secondary);
    &:enabled:hover {
      background-color: var(--secondary-hover);
    }
  }
  &__warning {
    background-color: var(--warning);
    &:enabled:hover {
      background-color: var(--warning-hover);
    }
  }
  &__danger {
    background-color: var(--danger);
    &:enabled:hover {
      background-color: var(--danger-hover);
    }
  }
  &__action {
    background-color: var(--action);
    &:enabled:hover {
      background-color: var(--action-hover);
    }
  }
  &__btn-link {
    background-color: transparent;
    padding: 0;
  }
  &__rounded {
    border-radius: 20px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__link {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    &:hover {
      color: var(--gray);
    }
  }
  &__small {
    padding: 9px;
    width: 60px;
    height: 60px;
  }
}
@media screen and (max-width: 640px) {
  
  .btn {
    width: auto;
    &__small {
      width: 52px;
      height: 52px;
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
