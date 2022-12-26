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
  <h2 class="title-2">Pounded</h2>
  <div class="line">
    <Button label="отправить письмо" color="primary" :rounded="true"/>
    <Button label="отправить письмо" color="info" :rounded="true"/>
    <Button label="отправить письмо" color="disabled" :rounded="true"/>
    <Button label="отправить письмо" color="secondary" :rounded="true"/>
    <Button label="отправить письмо" color="warning" :rounded="true"/>
    <Button label="отправить письмо" color="danger" :rounded="true"/>
    <Button label="отправить письмо" color="action" :rounded="true"/>
    <Button label="отправить письмо" color="info-light" :rounded="true"/>
  </div>
  <h2 class="title-2">Disabled</h2>
  <div class="line">
    <Button label="отправить письмо" color="primary" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="info" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="disabled" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="secondary" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="warning" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="danger" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="action" :rounded="true" :disabled="true"/>
    <Button label="отправить письмо" color="info-light" :rounded="true" :disabled="true"/>
  </div>
  <h2 class="title-2">Icons</h2>
  <div class="line">
    <Button iconName="arrows" label="отправить письмо" color="primary" :rounded="true"/>
    <Button iconName="vk" label="отправить письмо" color="info" :rounded="true"/>
    <Button iconName="exit" label="отправить письмо" color="secondary" :rounded="true"/>
    <Button iconName="google" label="отправить письмо" color="warning" :rounded="true"/>
    <Button iconName="arrows-next" label="отправить письмо" color="danger" :rounded="true"/>
    <Button iconName="class" label="отправить письмо" color="action" :rounded="true"/>
    <Button iconName="pen" label="отправить письмо" color="info-light" :rounded="true"/>
    <Button iconName="quest" label="отправить письмо" color="info-light" :rounded="true"/>
  </div>
  
</template>
<style lang="scss">
.line{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
</style>
