<template>
    <div>
      <div class="flex justify-between items-center border-b border-gray-400 mt-40 mb-8">
        <h1 class="border-b-2 border-blue-700">Shop From Top Categories</h1>
        <h1>View All ></h1>
      </div>
      <div class=" grid sm:grid-cols-5 sm:gap-4 mt-8">
        <div v-for="(category, index) in categoryCard" :key="index" class="flex flex-col items-center">
          <div class=" items-center bg-gray-400 rounded-full w-60 h-60 border-2">
            <img :src="category.image" :alt="category.title" class="w-fit h-fit rounded-full">
          </div>
          <h2 class="mt-2">{{ category.title }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { createListResource } from 'frappe-ui';
  import { computed, ref, watch } from 'vue';
  
  const categoriesResource = createListResource({
    doctype: 'Product Category',
    fields: ['title', 'image'],
    auto: true
  });
  
  const categoryCard = computed(() => {
    if (categoriesResource.list.data) {
      return categoriesResource.list.data;
    }
    return [];
  });
  </script>
  