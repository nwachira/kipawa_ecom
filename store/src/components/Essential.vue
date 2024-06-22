<template>
	<div class=" flex justify-between items-center p-2 border-b border-gray-400 mt-40 mb-8">
		<h2 class=" font-semibold text-lg border-b-2 border-blue-700">Essential Products</h2>
		<h2>View All ></h2>
	</div>
  

  <div class="mt-4 grid grid-cols-1 sm:grid-cols-6 gap-3" v-if="productsList">
	<EssentialCa v-for="product in productsList" :key="product.name" :product="product" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { createListResource } from "frappe-ui";
import EssentialCa from "@/components/EssentialCa.vue";

const productsResource = createListResource({
	doctype: "Product",
	fields: ["name", "preview_image", "price", "currency"],
	auto: true
})

const productsList = computed(() => {
	if (productsResource.list.data) {
		return productsResource.list.data;
	}
	return [];
})
const props = defineProps({
	products: Object
})

</script>
