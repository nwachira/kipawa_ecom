<template>
    <div>
      <div class="flex gap-8">
        <div>
         
           
          
        </div>
        <div v-if="productdoc" class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 ml-15">

       
        <div class="shadow-md rounded p-4 space-y-2 flex items-start justify-between flex-col" v-for="product in productdoc">
        <router-link :to="{
            name: 'ProductDetailsPage',
            params: {
                name: product.name
            }
        }" class="flex-grow">
            <div>
                <img :src="product.preview_image" alt="Product Preview Image">
                <p class="text-base text-gray-800 font-medium mt-2">{{ product.name }}</p>
            </div>
            <p class="text-xl font-bold text-gray-900">{{ formatCurrency(product.price, product.currency) }}</p>
        </router-link>
        <Button @click="addProductToCart" variant="solid" size="md">
            <template #prefix>
                <FeatherIcon class="h-5" name="shopping-cart" />
            </template>
            Add to cart
        </Button>
    </div>
</div>
      </div>
  
      <div>
        <h2>Pagination</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { formatCurrency } from "@/utils";
  import { createDocumentResource, createListResource } from "frappe-ui";
  import { Button, FeatherIcon } from "frappe-ui";
  import markdownit from "markdown-it";
  import { useToast } from "vue-toastification";
  import { computed, watch, ref, inject } from "vue";
  import { defineProps } from "vue";
  import { useRoute } from "vue-router";
  import Filters from "../components/Filter.vue";
  import {
    SfAccordionItem,
    SfButton,
    SfChip,
    SfCheckbox,
    SfCounter,
    SfIconArrowBack,
    SfIconChevronLeft,
    SfIconCheck,
    SfIconClose,
    SfListItem,
    SfRadio,
    SfRating,
    SfSelect,
    SfThumbnail,
  } from "@storefront-ui/vue";
import Filter from "../components/Filter.vue";
  
  const products = createListResource({
    doctype: "Product",
    fields: ["name", "price", "currency", "preview_image"],
    auto: true,
  });
  const productdoc = computed(() => {
    if (products.list.data) {
      return products.list.data;
    } else {
      return {};
    }
  });
  
  const route = useRoute();
  const toast = useToast();
  
  const cart = inject("cart");
  
  const md = markdownit();
  const cartDialogShown = ref(false);
  
  function addProductToCart(productName) {
    cart.items.push({
      product: productName,
      qty: 1,
    });
    toast.success("Item added to cart!");
  }
  </script>
  