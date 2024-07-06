<template>
	<div class="p-8 flex justify-between m-16 ">
		<div v-if="productDoc" class="w-1/4">
			<img :src="productDoc.preview_image" alt="" class="w-full h-auto max-w-md">
		  </div>
	  <div v-if="productDoc" class="flex flex-col w-1/2">
		<h1 class="font-black text-gray-900 text-3xl">
		  {{ productDoc.name }}
		</h1>
		<div class="prose prose-sm py-3 mt-4" v-html="productDoc.description"></div>
  
		<div class="space-y-3">
		  <Button @click="addProductToCart" variant="solid" size="2xl">
			<template #prefix>
			  <FeatherIcon class="h-5" name="shopping-cart" />
			</template>
			Add to cart
		  </Button>
		</div>
	  </div>
	  <div v-else class="w-1/2">
		<p>Product not found.</p>
	  </div>
	  
	</div>
  </template>
  
  <script setup>
import { computed, ref, inject, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Button, createResource, FeatherIcon } from "frappe-ui";

const cart = inject("cart");
const route = useRoute();

const productResource = createResource({
  url: 'star_ecom.api.product_details',
  auto: true,
});

const productDoc = computed(() => {
  if (productResource.data) {
    return productResource.data;
  } else {
    console.error('Product data not found!');
    return null;
  }
});

onMounted(async () => {
  try {
    await productResource.fetch({ name: route.params.name }); // Pass parameters here
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
});

function addProductToCart() {
  if (productDoc.value) {
    const productName = productDoc.value.name;

    cart.items.push({
      product: productName,
      qty: 1
    });

    toast.success("Item added to cart!");
  } else {
    console.error("Product data not found. Cannot add to cart.");
    // Handle error or notify user
  }
}
</script>
