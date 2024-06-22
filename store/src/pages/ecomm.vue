<template>
    <div>
        <div class=" ">
            <Top/>
        </div>
        
        <div>
            <Products/>

        </div>
        <div>
            <CategoryCard/>
        </div>

        <div>
            <BrandsCard/>
        </div>
        <div>
            <Essential/>
        </div>
        <div>
            <Footer/>
        </div>
        
    </div>
    

</template>
<script setup>
import Products from "@/components/Products.vue";
import Top from "@/components/Top.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import BrandsCard from "@/components/BrandsCard.vue";
import Essential from "@/components/Essential.vue";
import Footer from "@/components/Footer.vue";






</script>