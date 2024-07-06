<template>
	
  

  <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 place-items-center" v-if="productsList">
	
	<div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" v-for="product in productsList">
		<router-link :to="{
			name: 'ProductDetailsPage',
			params: {
				name: product.name
			}
		}" class="flex-grow">
		<div class="relative">
		  <SfLink href="#" class="block">
			<img
			  :src="product.preview_image"
			  alt="Great product"
			  class="block object-cover h-auto rounded-md aspect-square"
			  width="300"
			  height="300"
			/>
		  </SfLink>
		  <SfButton
			variant="tertiary"
			size="sm"
			square
			class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
			aria-label="Add to wishlist"
		  >
			<SfIconFavorite size="sm" />
		  </SfButton>
		  <div class="p-4 border-t border-neutral-200">
			<SfLink href="#" variant="secondary" class="no-underline"> {{product.name}} </SfLink>
			<div class="flex items-center pt-1">
			  <SfRating size="xs" :value="5" :max="5" />
	  
			  <SfLink href="#" variant="secondary" class="pl-1 no-underline">
				<SfCounter size="xs">123</SfCounter>
			  </SfLink>
			</div>
		  </div>
		</div>
	</router-link>
		<div class="p-4 ">
		  
		  
		  <span class="block pb-2 font-bold typography-text-lg">{{ formatCurrency(product.price, product.currency) }}</span>
		  <SfButton size="sm" @click="addProductToCart">
			<template #prefix>
			  <SfIconShoppingCart size="sm" />
			</template>
			Add to cart
		  </SfButton>
		</div>
		
	  </div>
	
	 
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils";

import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/vue';
import markdownit from 'markdown-it'
import { useToast } from "vue-toastification";
import { computed, watch, ref, inject } from "vue";
import { defineProps } from "vue";
import { useRoute } from "vue-router";

import { createResource,  } from 'frappe-ui';
const route = useRoute();
const toast = useToast();

const cart = inject("cart");

const md = markdownit()
const cartDialogShown = ref(false);

const items = createResource({
    url: 'star_ecom.api.get_products',
    params:{
     doctype: 'Product',
     
    },
	auto: true
})



const productsList = computed(() => {
	if (items.data) {
		return items.data;
	}
	return [];
})
const props = defineProps({
	products: Object
})


function addProductToCart() {
	const productName = route.params.name;

	cart.items.push({
		product: productName,
		qty: 1
	})
	toast.success("Item added to cart!")
}

</script>
