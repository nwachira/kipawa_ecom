<template>
    <div>
        <div class=" ">
            <Banner/>
        </div>
        <div>
            <Category/>
        </div>

       
        
        <div>
            <Products/>

        </div>

       <div class=" mt-10 border-t-2 border-b-2 mb-8">
        <HerowithRightImage/>
        
       </div>

       <div>
        <ProductSlider/>
       </div>
       
       
        
    </div>
    

</template>
<script setup>
import Products from "@/components/Products.vue";
import Banner from "@/components/Banner.vue";

import Category from "@/components/Categories.vue";
import BrandsCard from "@/components/BrandsCard.vue";
import Essential from "@/components/Essential.vue";
import Footer from "@/components/Footer.vue";
import HerowithRightImage from "../components/HerowithRightImage.vue";
import ProductSlider from "../components/ProductSlider.vue";



</script>