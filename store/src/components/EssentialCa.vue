<template>
    <div class="shadow-md rounded-2xl p-4 space-y-2 flex items-start justify-between flex-col">
        <router-link :to="{
            name: 'ProductDetailsPage',
            params: {
                name: product.name
            }
        }">
            <div>
                <img :src="product.preview_image" alt="Product Preview Image">
                <p class="text-base text-gray-800 font-medium mt-2">{{ product.name }}</p>
            </div>
        </router-link>
        <Button @click="addProductToCart" variant="solid" size="2xl">
            <template #prefix>
                <FeatherIcon class="h-5" name="shopping-cart" />
            </template>
            Add to cart
        </Button>
    </div>
</template>
<script setup>
import {Button, FeatherIcon} from "frappe-ui";
import { formatCurrency } from "@/utils";
import markdownit from 'markdown-it'
import { useToast } from "vue-toastification";
import { computed, watch, ref, inject } from "vue";
import { useRoute } from "vue-router";



const route = useRoute();
const toast = useToast();

const cart = inject("cart");

const md = markdownit()
const cartDialogShown = ref(false);


const props = defineProps({
    product: Object
})

function addProductToCart() {
	const productName = route.params.name;

	cart.items.push({
		product: productName,
		qty: 1
	})
	toast.success("Item added to cart!")
}

// Add your addProductToCart function here
</script>