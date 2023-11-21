<template>
  <div
    class="accordion sm:p-10 p-5 bg-white rounded-lg cursor-pointer"
    @click="$emit('toggleOpen', index)"
  >
    <div
      class="accordion__header flex justify-between sm:items-center items-start gap-5"
    >
      <h3
        class="accordion__title sm:text-xl text-base font-medium text-ct-gray-800"
      >
        {{ faq.question }}
      </h3>
      <button button v-if="!open" class="accordion__button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="var(--white)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1C9 0.447715 9.44771 0 10 0C10.5523 0 11 0.447715 11 1V19C11 19.5523 10.5523 20 10 20C9.44771 20 9 19.5523 9 19V1Z"
          />
          <path
            d="M19 9C19.5523 9 20 9.44771 20 10C20 10.5523 19.5523 11 19 11L1 11C0.447715 11 1.95703e-08 10.5523 4.37115e-08 10C6.78526e-08 9.44771 0.447715 9 1 9L19 9Z"
          />
        </svg>
      </button>
      <button v-if="open" class="accordion__button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="var(--white)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.928978 2.34315C0.538454 1.95262 0.538453 1.31946 0.928978 0.928932C1.3195 0.538408 1.95267 0.538408 2.34319 0.928932L15.0711 13.6569C15.4616 14.0474 15.4616 14.6805 15.0711 15.0711C14.6806 15.4616 14.0474 15.4616 13.6569 15.0711L0.928978 2.34315Z"
          />
          <path
            d="M13.6569 0.928932C14.0474 0.538408 14.6806 0.538408 15.0711 0.928932C15.4616 1.31946 15.4616 1.95262 15.0711 2.34315L2.34319 15.0711C1.95267 15.4616 1.3195 15.4616 0.928977 15.0711C0.538453 14.6805 0.538453 14.0474 0.928977 13.6569L13.6569 0.928932Z"
          />
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div>
        <transition name="drop-in">
          <div v-if="open" class="accordion__content">
            {{ faq.answer }}
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  faq: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["toggleOpen"]);
</script>

<style lang="scss" scoped>
.accordion {
  background-color: var(--gray);
  color: var(--white);
  padding: 40px;
  border-radius: 30px;
  cursor: pointer;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 640px) {
      padding: 20px;
    }
  }
  &__title {
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    @media screen and (max-width: 640px) {
      padding: 20px;
      font-size: 18px;
      line-height: 22px;
    }
  }
  &__button {
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &__content {
    max-width: 916px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-top: 20px;
    border-top: 1px solid var(--white);
    padding-top: 15px;
    @media screen and (max-width: 640px) {
      margin-top: 10px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  height: 0;
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
