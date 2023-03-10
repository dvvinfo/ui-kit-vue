<template>
  <div class="posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2 class="post__title">{{ post.title }}</h2>
      <div class="post__text">{{ post.body }}</div>
    </div>
    
  </div>

</template>

<script setup>
defineProps(['posts'])
</script>

<style lang="scss" scoped>
.post {
  outline: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
}</style>
