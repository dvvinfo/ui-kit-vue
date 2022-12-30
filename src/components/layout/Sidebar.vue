<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpenSidebar: {
    type: Boolean,
    required: true,
  },
});

const links = ref([
  { name: "Typography", href: "/typography" },
  { name: "Buttons", href: "/buttons" },
  { name: "Checkboxes", href: "/checkboxes" },
  { name: "Switches", href: "/switches" },
  { name: "RadioButtons", href: "/radiobuttons" },
  { name: "Progress", href: "/progress-bar" },
  { name: "Inputs", href: "/inputs" },
]);
</script>
<template>
  <div :class="['sidebar', { sidebar__isOpen: isOpenSidebar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &__isOpen {
    transform: translateX(0);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover {
      color: var(--info);
    }
  }
}
</style>
