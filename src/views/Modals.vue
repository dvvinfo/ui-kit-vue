<template>
  <div ref="modal">
    <h1 class="title-1">Modal</h1>
    <Button @click="isModalOpen = true" label="Open modal" color="primary" />
    <div class="line" >
      <modal
        :is-modal-open="isModalOpen"
        @click.self="isModalOpen = false"
        @close-modal="isModalOpen = !isModalOpen"
        @keydown.esc="isModalOpen = false"
        tabindex="-1"
      >
        Click outside modal to close it
      </modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import Button from "../components/Button.vue";
import { onMounted } from "@vue/runtime-core";

const isModalOpen = ref(false);
const modal = ref(null)
onMounted(() => {
  modal.value.focus()
})
const getCloseModal = () => {};
</script>

<style scoped></style>
