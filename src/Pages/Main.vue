<template>
  <div class="flex justify-center">
    <input
      class="px-6 py-2 text-[1rem] border-[1px] border-[rgb(210,208,190)] outline-[#f0eaea] rounded-[50px] [box-shadow:0_3px_3px_rgb(237,_240,_239)] w-[450px] mb-5"
      type="text"
      v-model="searchTerm"
      @keyup="searchProduct"
      placeholder="Search for Product..."
    />
  </div>
  <div class="flex flex-wrap justify-center items-center w-full">
    <div
      v-for="product in productList"
      :key="product.id"
      class="w-[300px] h-[450px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] [transition:0.3s_ease-in-out] overflow-hidden bg-[#f6f4f4] border-zinc-300 hover:cursor-pointer hover:scale-[1.02] hover:[transition:0.3s_ease-in-out]"
    >
      <router-link
        :to="{
          path: '/product/' + product.id,
          query: { product_id: product.id },
        }"
      >
        <img
          :src="product.images[0]"
          :alt="product.title"
          class="h-[345px] w-[282px] m-[10px] flex"
        />
        <div class="h-28 w-[100%]">
          <h1 class="text-lg text-[#e84409] font-medium">
            {{ product.title }}
          </h1>
          <h2>RS. ${{ product.price }}</h2>
          <p class="underline text-[#757070]">
            Discount: {{ product.discountPercentage }}%
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      searchTerm: "",
      timer: 0,
      //  filterproduct: products.products
    };
  },
  computed: {
    productList() {
      return this.products.products;
    },
  },

  mounted() {
    const url = "https://dummyjson.com/products";
    axios.get(url).then((response) => {
      this.products = response.data;
      console.log(this.products);
    });
  },
  methods: {
    searchProduct() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.products.products = this.products.products.filter((product) => {
          return product.title.toLowerCase().includes(this.searchTerm);
        });
      }, 1000);
    },
  },
};
</script>
