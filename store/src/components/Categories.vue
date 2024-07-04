<template>
    <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap justify-center mt-6 md:border-t-2 md:pt-6 md:border-b-2 md:border-neutral-200 pb-6" v-if="categoryResource">
        <div class="relative flex-col min-w-[140px] max-w-[240px] justify-center group" v-for="category in categoryResource" :key="categoryResource.title">
            <a href="" class="absolute w-full h-full z-[1] focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"/>
            <img :src="category.image" alt="" class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"/>

        
            <div class="flex justify-center" >
                <a href="" class="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal">{{category.category}}</a>
            </div>
        </div>

    </div>

</template>
<script setup>

import { Button } from 'frappe-ui';
  import { createListResource } from 'frappe-ui';
  import { computed } from 'vue';


  const categorydoc = createListResource({
    doctype: "Category",
    fields: [ "category", "image"],
    auto: true

  })
  const categoryResource = computed(() => {
    if (categorydoc.list.data){
      return categorydoc.list.data;
    }
  });




const categories = [
  {
    title: `Women`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/women_category.png',
  },
  {
    title: `Men`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/men_category.png',
  },
  {
    title: `Kid`,
    image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/kid_category.png',
  },
];



</script>
