<template>
  <div>
    <h1 class="title-1">Paginations</h1>
    <div class="search">
      <Input placeholder="Поиск" label="Поиск" v-model:value="searchQuery" />
    </div>
    <Loader v-if="loading" />
    <Posts :posts="visibleData" :searchPosts="filteredPosts" v-else />
    <div class="pagination-wrapper">
      <v-pagination
        v-model="page"
        :pages="totalPages"
        :range-size="currentPage"
        active-color="#0083b6"
        @update:modelValue="updateHandler"
        :hideFirstButton="true"
        :hideLastButton="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import Posts from "@/components/Posts.vue";
import Loader from "@/components/Loader.vue";
import Input from "@/components/Input.vue";
const posts = ref([]);
const loading = ref(true);
const search = ref("");
const searchPosts = ref([posts]);

const searchQuery = ref('')

const itemsPerPage = ref(5);
const currentPage = ref(1);
const page = ref(1);

const updateHandler = (page) => {
  currentPage.value = page;
};

const filteredPosts = computed(() => {
      return visibleData.value.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          post.body.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      })
    })
watch(searchQuery , (newValue, oldValue)  =>{

})
onMounted(() => {
  postsFetch();
});

const postsFetch = () => {
  // запрос список постов

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => (posts.value = response.data), (loading.value = false))
    .catch((error) => {
      console.log(error);
    });
};

// вычисляемые свойства пагинации
const totalPages = computed(() =>
  Math.ceil(posts.value.length / itemsPerPage.value)
);
const visibleData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return posts.value.slice(start, end);
});

// поиск
const filteredList = computed(() => {
  let post = search.value;
  console.log(searchPosts)
  return searchPosts.value.filter((elem) => {
    if (post === "") {
      return true;
    } else return elem.search.indexOf(post) > -1;
  });
});
</script>

<style lang="scss">
.pagination-wrapper {
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 30px;
}
.Page-active {
  color: white !important;
}
</style>
