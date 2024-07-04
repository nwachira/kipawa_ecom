<template>
    <div class="p-6 space-y-6 py-3" >
      
        <div class="flex flex-col items-center justify-center bg-teal-500 p-6 rounded-lg" v-if="bannerResource">
          
            
            <div class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-48">
              <!-- Text Content -->
              <div class="flex flex-col items-center justify-center md:space-y-4" v-for="banner in bannerResource" :key="banner.title" >
                <p class="text-center font-extrabold text-3xl">
                  {{banner.title}}
                </p>
                <p class="text-center font-semibold">
                  {{banner.description}}
                </p>
                <Button
                  :variant="'solid'"
                  theme="gray"
                  size="2xl"
                  label="Button"
                  :loading="false"
                  :loadingText="null"
                  :disabled="false"
                  :link="null"
                  @click="AllProductsPage"
                >
                  Discover now
                </Button>
              </div>
              <!-- Image -->
              <div class="flex items-center justify-center" v-for="banner in bannerResource" >
                <img
                  class="w-full h-80 object-cover rounded-lg"
                  :src="banner.image"
                  alt=""
                />
              </div>
            </div>
          </div>
      <div class="sm:grid sm:grid-cols-2 sm:gap-6  " v-if="smallBannerResource">
        <!-- First Card -->
        <div class="flex flex-col items-center justify-center space-y-4 bg-gray-400 p-6 rounded-lg mb-4" v-for="smallBanner in smallBannerResource" :key="smallBanner.title">
          
          <div class="flex flex-col items-center justify-center space-y-1" >
            <p class="text-center font-extrabold text-3xl">
              {{smallBanner.title}}
            </p>
            <p class="text-center font-semibold">
              {{smallBanner.description}}
            </p>
            <Button
              :variant="'solid'"
              theme="green"
              size="2xl"
              label="Button"
              :loading="false"
              :loadingText="null"
              :disabled="false"
              :link="null"
              @click="AllProductsPage"
            >
              {{smallBanner.label}}
            </Button>
            <img
              class="w-40 h-40 object-cover rounded-lg"
              :src="smallBanner.image"
              alt=""
            />
          </div>
        </div>
  
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { Button } from 'frappe-ui';
  import { createListResource } from 'frappe-ui';
  import { computed } from 'vue';


  const bannerdoc = createListResource({
    doctype: "Big Banner",
    fields: [ "title", "description", "image", "label"],
    auto: true

  })
  const bannerResource = computed(() => {
    if (bannerdoc.list.data){
      return bannerdoc.list.data;
    }
  });

  const smallBannerdoc = createListResource({
    doctype: "Small Banner",
    fields: [ "title", "description", "image", "label"],
    auto: true

  })
  const smallBannerResource = computed(() => {
    if (smallBannerdoc.list.data){
      return smallBannerdoc.list.data;
    }
  });
  

  // Function to handle the click event
const AllProductsPage = () => {

  window.location.href = '/all-products';
};



  // Component setup
  defineProps({
    // Define props if needed
  });
  </script>
  
  <style scoped>
  /* Add scoped styles if necessary */
  </style>
  