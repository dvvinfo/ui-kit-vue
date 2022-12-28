<script setup>
import Button from '@/components/Button.vue';
const eventFormButton = () => {
    alert("click")
}
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
    <Button iconName="arrows" label="отправить письмо" color="primary" :rounded="true" size="small"/>
    <Button iconName="vk" label="отправить письмо" color="info" :rounded="true" size="small"/>
    <Button iconName="exit" label="отправить письмо" color="secondary" :rounded="true" size="small"/>
    <Button iconName="google" label="отправить письмо" color="warning" :rounded="true" size="small"/>
    <Button iconName="arrows-next" label="отправить письмо" color="danger" :rounded="true" size="small"/>
    <Button iconName="class" label="отправить письмо" color="action" :rounded="true" size="small"/>
    <Button iconName="pen" label="отправить письмо" color="info-light" :rounded="true" size="small"/>
    <Button iconName="quest" label="отправить письмо" color="info-light" :rounded="true" size="small"/>
  </div>

  <h2 class="title-2">Link</h2>
  <div class="line">
    <Button label="отправить письмо" color="btn-link" :link="true"/>
  </div>

  <h2 class="title-2">Size</h2>
  <div class="line">
    <Button iconName="arrows" color="primary" size="small" :rounded="true"/>
    <Button label="normal" color="info" :rounded="true"/>
  </div>

  <h2 class="title-2">Timer</h2>
  <div class="line">
    <Button label="Повторное письмо" color="disabled"  :rounded="true" :timer="true"/>
  </div>

  <h2 class="title-2">Event</h2>
  <div class="line">
    <Button label="Повторное письмо" color="danger"  :rounded="true" @testClick="eventFormButton"/>
  </div>
  
</template>
<style lang="scss">
</style>
