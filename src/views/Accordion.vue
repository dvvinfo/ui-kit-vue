<template>
  <h1 class="title-1">Accordion</h1>
  <div class="wrapper flex flex-col gap-2.5 sm:mt-lg mt-5">
    <Accordion
      v-for="(faq, i) in faqs"
      :key="i"
      :index="i"
      :faq="faq"
      :open="faq.open"
      @toggleOpen="toggleOpen"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "@/components/Accordion.vue";
const faqs = ref([
  {
    question: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut possimus placeat molestiae dicta iure? Asperiores, dolores doloremque culpa fugit alias sequi quo, cupiditate facere nam aut hic, reiciendis sed magnam.",
    open: true,
  },
  {
    question:
      "Possimus facere, rem eius enim illo nam sint sequi debitis qui, quo blanditiis iste officia ea. ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam quis ab. Quae repellendus suscipit quos beatae veritatis nisi, vitae iusto voluptatem? Quas ullam alias ipsa vitae praesentium tenetur placeat?",
    open: false,
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit! ?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur consequuntur sunt recusandae? Hic cupiditate quod obcaecati sequi dolorem dolorum, cumque necessitatibus ducimus ipsa tempore quas quidem rem eligendi aspernatur? Est ipsam laborum reiciendis, eligendi consequuntur officiis enim aspernatur natus porro unde? Aperiam repudiandae rem excepturi nesciunt pariatur et, at dolores.",
    open: false,
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, porro tempore blanditiis quasi nobis vel ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa commodi earum aliquid accusantium beatae magni dolore culpa assumenda qui in, sapiente velit molestiae? Voluptas, explicabo dolores numquam labore beatae quaerat molestias, pariatur adipisci maxime rerum tenetur! Voluptate tempora impedit beatae veritatis pariatur! Nemo dolor voluptatum, quia sequi nesciunt animi debitis natus dolorum non, dolorem odit soluta voluptates ad ullam.",
    open: false,
  },
]);

const toggleOpen = (index) => {
  faqs.value = faqs.value.map((faq, i) => {
    if (index === i) {
      faq.open = !faq.open;
    } else {
      faq.open = false;
    }
    return faq;
  });
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  @media screen and (min-width: 640px) {
    margin-top: 20px;
  }
}
</style>
