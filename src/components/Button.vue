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
});
</script>

<template>
  <button :class="['btn', `btn__${color}`, { btn__rounded: rounded }]" :disabled="disabled">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border: none;
  padding: 14px 46px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: var(--white);
  transition: 0.2s;
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
  &__rounded {
    border-radius: 20px;
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
}
</style>
