<template>
    <div>
        <div class=" m-3">
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
    </div>
    

</template>
<script setup>
import Products from "@/components/Products.vue";
import Top from "@/components/Top.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import BrandsCard from "@/components/BrandsCard.vue";




</script>