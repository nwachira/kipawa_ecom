<template>
  <div>
    <div class="bg-gray-100">
      <div class="flex justify-between items-center px-6 py-4">
        <nav class="p-4 flex items-center justify-between">
          <router-link :to="{name: 'ProductsListPage'}" class="text-2xl font-bold text-gray-800">
          ✨ Star Store ✨
          </router-link>
      
          
        </nav>
        <div class="flex space-x-4">
          <button class="flex items-center" @click="cartDialogShown = true">
            <FeatherIcon class="h-5" name="shopping-cart" />
            <Badge variant="solid">{{cart.items.length}}</Badge>
          </button>
          <button class="flex items-center" @click="toggleFavorite">
            <FeatherIcon class="h-5" name="heart" />
            <Badge variant="solid" v-if="favoritesCount > 0">{{ favoritesCount }}</Badge>
          </button>
          <button class="flex items-center">
            <FeatherIcon class="h-5" name="user" />
          </button>
        </div>
      </div>
      <Dialog :options="{
        title: 'Your Cart',
        size: '3xl',
        actions: [
          {
            label: 'Proceed to checkout',
            variant: 'solid',
            onClick: (close) => {
              close();
              router.push({
                name: 'CheckoutPage'
              })
            }
          }
        ]
      }" v-model="cartDialogShown"
      >
        <template #body-content>
          <ul class="space-y-3">
            <li v-for="item, index in cart.items" :key="index"> 
              <!-- Display the product name -->
              {{ item.product }} 
              <FormControl v-model="item.qty" type="number" placeholder="Qty" />
              <Button @click="removeProductFromCart(index)" class="mt-2" variant="outline" theme="red">Remove</Button>
            </li>
          </ul>
        </template>
      </Dialog>
      <div class="p-4 flex justify-center items-center ">
        <Search class="w-80 md:w-1/2" />
        <div class="p-2 flex justify-end space-x-8 items-center md:hidden">
          <button @click="toggleSidebar">
            <FeatherIcon name="menu" class="h-10 m-2" />
          </button>
        </div>
      </div>
      <div class="p-4 shadow-sm hidden md:block">
        <div class="flex justify-center items-center space-x-4  ">
          <a href="#" class="text-gray-600 font-medium hover:text-gray-800">Home</a>
          <a href="#" class="text-gray-600 font-medium hover:text-gray-800">Category 1</a>
          <a href="#" class="text-gray-600 font-medium hover:text-gray-800">Category 2</a>
          <a href="#" class="text-gray-600 font-medium hover:text-gray-800">Category 3</a>
        </div>
      </div>
    </div>
    <div>
       <div class="fixed top-0 left-0 w-64 h-screen bg-gray-100 shadow-md z-10 transition-transform duration-300 ease-in-out"
         v-if="isOpen">
      <div class="p-4">
        <!-- Sidebar content here -->
        <p class="text-gray-700 font-medium">Sidebar Content</p>
        <ul class="mt-4 space-y-2">
          <li>
            <a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-200">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <span class="text-gray-700">Item 1</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-200">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span class="text-gray-700">Item 2</span>
              </span>
            </a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 rounded-md hover:bg-gray-200">
              <span class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.015 2.015 0 0118 13H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v4"></path></svg>
                <span class="text-gray-700">Item 3</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import {FeatherIcon, Badge, Button, Dialog, FormControl} from 'frappe-ui';
import Search from '../components/Search.vue';
import { inject, ref } from "vue";


// Example state for cart and favorites, replace or expand as needed
const favoritesCount = ref(0); // Example reactive state, replace with actual logic
const isOpen = ref(false);

const cart = inject("cart");
const cartDialogShown = ref(false);

function removeProductFromCart(index) {
	cart.items.splice(index, 1);
}

const toggleFavorite = () => {
  // Logic to toggle favorite items visibility
};

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
