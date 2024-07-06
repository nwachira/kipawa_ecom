<template>
  <div class="flex mb-4">
    <Filters :class="{ 'm-8': true }" /> <!-- Example of scoped class -->
  <div>
    <div class="p-8 m-8 grid grid-cols-3 gap-4">
      <div
        v-for="product in productdoc"
        :key="product.name"
        class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]"
      >
        <SfLink
          :href="{
            name: 'ProductDetailsPage',
            params: {
              name: product.name,
            },
          }"
          class="block"
        >
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
          @click="addProductToCart(product.name)"
        >
          <SfIconFavorite size="sm" />
        </SfButton>

        <div class="p-4 border-t border-neutral-200">
          <SfLink
            :href="{
              name: 'ProductDetailsPage',
              params: {
                name: product.name,
              },
            }"
            variant="secondary"
            class="no-underline"
          >
            {{ product.name }}
          </SfLink>
          <div class="flex items-center pt-1">
            <SfRating size="xs" :value="5" :max="5" />
            <SfLink
              :href="{
                name: 'ProductDetailsPage',
                params: {
                  name: product.name,
                },
              }"
              variant="secondary"
              class="pl-1 no-underline"
            >
              <SfCounter size="xs">123</SfCounter>
            </SfLink>
          </div>
          <span class="block pb-2 font-bold typography-text-lg">
            {{ formatCurrency(product.price, product.currency) }}
          </span>
          <SfButton size="sm" @click="addProductToCart(product.name)">
            <template #prefix>
              <SfIconShoppingCart size="sm" />
            </template>
            Add to cart
          </SfButton>
        </div>
      </div>
    </div>

    <div>
      <Pagination/>
    </div>
  </div>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils";
import { createResource } from "frappe-ui";
import { useToast } from "vue-toastification";
import { computed, ref, inject } from "vue";
import { useRoute } from "vue-router";
import Filters from "../components/Filter.vue";
import Pagination from "../components/Pagination.vue";
import {
  SfLink,
  SfIconShoppingCart,
  SfIconFavorite,
  SfButton,
  SfRating,
  SfCounter,
  usePagination,
} from "@storefront-ui/vue";

const products = createResource({
  url: "star_ecom.api.get_products",
  doctype: "Product",
  fields: ["name", "price", "currency", "preview_image", "description"],
  auto: true,
});

const productdoc = computed(() => products.data || []);

const route = useRoute();
const toast = useToast();
const cart = inject("cart");

function addProductToCart(productName) {
  cart.items.push({ product: productName, qty: 1 });
  toast.success("Item added to cart!");
}
</script>
