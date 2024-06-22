<template>
  <div class="border-b border-gray-400 flex justify-between px-6 mt-40">
    <h1>Top Brands</h1>
    <h1>View All ></h1>
  </div>
  <div class="flex flex-wrap gap-4 mt-8 px-10" v-if="brands">
    <div v-for="(item, index) in brands" :key="index" class="bg-yellow-100 rounded border-2 h-60 w-full sm:w-1/3 p-4 place-items-center flex justify-between">
      <router-link :to="`/brand/${item.brand}`" class="flex flex-col items-center space-y-4 w-full">
        <h1>{{ item.brand }}</h1>
        <img :src="item.logo" alt="Logo" class="w-20 h-20 rounded-full ">
        <h2>{{ item.subtitle }}</h2>
      </router-link>
      <div class="flex items-center">
        <img :src="item.product_image" alt="Image" class="w-full h-40 object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { createListResource } from "frappe-ui";
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize the router

const brandsResource = createListResource({
  doctype: "Brand Card",
  fields: ["brand", "product_image", "logo", "subtitle"],
  auto: true,
});

const brands = computed(() => {
  if (brandsResource.list.data) {
    return brandsResource.list.data;
  }
  return [];
});
</script>
