<template>
  <transition name="fade">
    <div class="overlay" v-show="isModalOpen">
      <transition name="drop-in">
        <div
          class="modal"
          v-show="isModalOpen"
          ref="modal"
        >
          <Button
            class="btn-close"
            iconName="x-lg"
            color="transparent"
            size="small"
            @click="$emit('close-modal')"
          />
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import Button from "./Button.vue";
defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["close-modal"]);
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  position: relative;
  background: var(--white);
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0, 0, 0, 0.1);
}
.btn-close {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.modal-content {
  padding: 20px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
