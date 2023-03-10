<template>
    <div class="loader-wrapper">
  <div class="lds-dual-ring"></div>
</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loader-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--info);
  border-color: var(--info) transparent var(--info) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
