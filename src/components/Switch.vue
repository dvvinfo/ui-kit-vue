<script setup>
const emits = defineEmits(["update:checked"]);
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const handleClickSwitch = (event) => {
  emits("update:checked", event.target.checked);
};
</script>

<template>
  <div class="switch-container">
    <input
      class="switch"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      @input="handleClickSwitch($event)"
    />
    <label :for="id"></label>
    <label class="switch__label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &-container {
    display: flex;
    align-items: center;
  }
  &__label {
    margin-left: 10px;
  }
  & + label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 35px;
    background: #fafafa;
    border: 1px solid #adb5bd;
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 26px;
      height: 26px;
      background: #fff;
      background: var(--primary);
      border-radius: 90px;
      transition: 0.3s;
      transform: translateY(-50%);
    }
  }
  &:checked {
    & + label {
      background: var(--primary);
      &:after {
        background: #fff;
        left: calc(100% - 5px);
        transform: translateX(-100%) translateY(-50%);
      }
      &:active:after {
        width: 33px;
      }
    }
  }
}
</style>
