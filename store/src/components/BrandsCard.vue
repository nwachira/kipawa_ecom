<template>
    <div class="border-b border-gray-400 flex justify-between px-4 mt-40">
      <h1>Top Brands</h1>
      <h1>View All ></h1>
    </div>
    <div class="flex  grid-cols-3 gap-4 m-10" v-if="brands">
      <div v-for="(item, index) in brands" :key="index" class="bg-yellow-100 flex  rounded border-2 w-80 h-40 justify-between p-4 place-items-center">
        
        <div class="flex flex-col items-center space-y-2"> 
            <h1>{{ item.brand }}</h1>
          <img :src="item.logo" alt="Logo" class="w-20 h-20 rounded-full">
          <h2>{{ item.subtitle }}</h2>
        </div>
        <div class="flex items-center"> <img :src="item.product_image" alt="Image" class="w-24 h-20 object-cover"> </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { createListResource } from "frappe-ui";
  
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
  