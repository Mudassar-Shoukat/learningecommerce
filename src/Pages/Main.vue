<template>
    <div class="flex flex-wrap justify-center items-center w-full">
        <div v-for="product in products.products" :key="product.id" class="w-[300px] h-[505px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] border-[solid] border-[rgb(199,184,184)] [transition:0.3s_ease-in-out] overflow-hidden 
        hover:cursor-pointer hover:scale-[1.02] hover:[transition:0.3s_ease-in-out] ">
            <img :src="product.images[0]" alt="{{ product.title }}" class="h-[430px] w-[282px] m-[10px] flex" />
            <h1 class="h-[24px] w-full">{{ product.title }}</h1>
            <h2 class="h-[24px] w-full mb-[13px]">${{ product.price }}</h2>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                this.products = response.data;
                console.log(this.products);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    },
};
</script>

<style scoped>

</style>
