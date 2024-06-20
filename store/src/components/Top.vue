<template>
    <div class="m-4 relative">
      <div
        class="bg-gray-900 w-full h-80 sm:h-80 rounded sm:rounded-2xl sm:flex sm:justify-between sm:p-20 sm:place-items-center"
        v-if="heroSlider"
      >
        <div
          class="space-y-3 p-1 sm:w-1/2"
          v-for="(item, index) in heroSlider"
          :key="index"
        >
          <h1
            class="text-white text-2xl font-extrabold sm:visible text-center"
          >
            {{ item.sub_title }}
          </h1>
          <h1
            class="text-white text-8xl font-extrabold flex justify-center px-2 text-center"
          >
            {{ item.main_title }}
          </h1>
          <h1
            class="text-white text-2xl font-extrabold sm:visible text-center"
          >
            {{ item.sub_title3 }}
          </h1>
        </div>
        <div
          class="p-3 place-items-center flex flex-col relative sm:w-1/2"
          v-for="(item, index) in heroSlider"
          :key="index"
        >
          <img
            :src="item.slider_image"
            alt=""
            class="w-40 h-40 rounded sm:w-60 sm:h-60 mt-4 mx-auto"
          >
        </div>
      <div class="absolute sm:bottom-30 left-[-20px] top-40">
        <Button @click="previousItem">
            <FeatherIcon class="bg-white hover:bg-gray-700 text-gray-900 font-bold py-4 px-4 rounded-full " name="chevron-left"/>
          
   

        </Button>
        
        
      </div>
      <div class="absolute sm:bottom-30 right-[-10px] top-40">
        <Button @click="nextItem">
            <FeatherIcon class="bg-white hover:bg-gray-700 text-gray-900 font-bold py-4 px-4 rounded-full" name="chevron-right"/>
       </Button>
      </div>
    </div>
    </div>

    
    
  </template>
  
  <script setup>
  import { ref } from 'vue';


  import { createListResource } from 'frappe-ui';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { FeatherIcon } from 'frappe-ui';

  const currentIndex = ref(0);
  
  const slider = createListResource({
    doctype: 'Slider Hero',
    fields: ['main_title', 'sub_title', 'sub_title3', 'slider_image'],
    auto: true,
  });
  const heroSlider = computed(() => {
    if (slider.list.data) {
      return slider.list.data;
    }
    return [];
  });


  const nextItem = () => {
  if (currentIndex.value < heroSlider.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // loop back to start
  }
};

const previousItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = heroSlider.value.length - 1; // loop back to end
  }
};
  </script>
  
  <style scoped>
  .feather-chevron-left,
  .feather-chevron-right {
    font-size: 2rem;
  }
  
  /* Hide subtitles on smaller screens (phones) */
  @media (max-width: 640px) {
    .sm:visible {
      display: none;
    }
  }
  </style>
  