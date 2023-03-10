<script setup>
import HeaderLayout from "./components/layout/Header.vue";
import SidebarLayout from "./components/layout/Sidebar.vue";
import Loader from "./components/Loader.vue";
import { ref,onMounted } from "vue";
const isOpenMenu = ref(true);
const loader = ref(true)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};

onMounted (() => {
  showToggle()
})

const showToggle =() => {
setTimeout(() => {
  loader.value=false
}, 1000);
}
</script>

<template>
  <div class="loader-wrapper" v-if="loader">
    <Loader />
  </div>
  <div class="container" v-else>
    <div class="sidebar-toggle" @click="toggleMenu">
      <img
        src="/assets/img/arrows-next.svg"
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
.loader-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
