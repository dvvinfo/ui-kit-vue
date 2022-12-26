<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
  <h1 class="title-1">Buttons</h1>
  <h2 class="title-2">Colors</h2>
  <div class="line">
    <Button label="отправить письмо" color="primary"/>
    <Button label="отправить письмо" color="info"/>
    <Button label="отправить письмо" color="disabled"/>
    <Button label="отправить письмо" color="secondary"/>
    <Button label="отправить письмо" color="warning"/>
    <Button label="отправить письмо" color="danger"/>
    <Button label="отправить письмо" color="action"/>
    <Button label="отправить письмо" color="info-light"/>
  </div>
  
</template>
<style lang="scss">
.line{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
</style>
