<script setup>
import { ref, computed } from "vue";
import BaseTable from "@/components/table/BaseTable.vue";
import TableRow from "@/components/table/TableRow.vue";
import TableColumn from "@/components/table/TableColumn.vue";
import Button from "@/components/Button.vue";

const tableHeads = ["Id", "Author", "Title", "Cover", ""];
const tablesSizeColumns = "50px 1fr 2fr 150px 140px";

const sortField = ref("id");
const typeSort = ref("asc");

const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg",
    bg: "#FFA26B",
  },
  {
    id: 12,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image:
      "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    bg: "#00C48C",
  },
  {
    id: 2,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
]);

// sort
const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === "desc") {
      modifier = -1;
    }
    if (a[sortField.value] < b[sortField.value]) {
      return -1 * modifier;
    }
    if (a[sortField.value] > b[sortField.value]) {
      return 1 * modifier;
    }
    return 0;
  });
});

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === "asc") {
      typeSort.value = "desc";
    } else {
      typeSort.value = "asc";
    }
  } else {
    sortField.value = name;
  }
};
</script>

<template>
  <h1 class="title-1">Table</h1>
  <span> Sort Field: {{ sortField }}</span> <br />
  <span> Type Field: {{ typeSort }}</span>
  <base-table
    :head="tableHeads"
    :columTempLates="tablesSizeColumns"
    @sorting="setSort"
  >
    <table-row
      v-for="book in booksSorting"
      :key="book.id"
      :columTempLates="tablesSizeColumns"
      :bgRow="book.bg"
    >
      <table-column :columnTitle="tableHeads[0]">
        {{ book.id }}
      </table-column>
      <table-column :columnTitle="tableHeads[1]">
        {{ book.author }}
      </table-column>
      <table-column :columnTitle="tableHeads[2]">
        {{ book.title }}
      </table-column>
      <table-column :image="true" :srcImage="book.image" />
      <table-column>
        <Button label="Read Online" />
      </table-column>
    </table-row>
  </base-table>
</template>
