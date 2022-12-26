<script setup>
import HeaderLayout from "./components/layout/Header.vue";
import SidebarLayout from "./components/layout/Sidebar.vue";
import { ref } from "vue";
const isOpenMenu = ref(false);

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">
      <img
        src="./assets/img/Arrows-next.svg"
        alt=""
      />
    </div>
    <header-layout />
    <sidebar-layout :isOpenSidebar="isOpenMenu" />
    <div :class="['content', { content__full: !isOpenMenu }]">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/slyle.scss";

.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &__full {
    margin-left: 0;
  }
}
.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--info);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  &__img-open {
    transform: translate(90deg);
  }
}
@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
