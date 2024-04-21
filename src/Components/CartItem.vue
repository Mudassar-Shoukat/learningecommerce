<template>
  <div class="bg-[#fbf8dd] m-[4px] flex w-[450px] p-[10px]">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        :src="item.images[0]"
        :alt="item.title"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>{{ item.title }}</h3>
        </div>

        <span class="text-[#0C0C0C] text-sm"> RS: ${{ item.price }} </span>
      </div>

      <div class="h-[30px] flex">
        <div class="flex items-center justify-center">
          <button
            class="block w-[25px] h-[23px] bg-[#FFEBB2] no-underline text-center leading-[23px]"
            @click="decreaseQuantity"
          >
            -
          </button>

          <input
            class="w-[45px] h-[23px] outline-[none] text-center"
            v-model="quantity"
            @input="updateQuantity"
          />
          <button
            class="block w-[25px] h-[23px] bg-[#FFEBB2] no-underline text-center leading-[23px]"
            @click="increaseQuantity"
          >
            +
          </button>
        </div>
      </div>

      <div class="flex text-right justify-end">
        <button
          class="hover:underline hover:text-[red]"
          @click="removeFromCart()"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "../Store";
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
      console.log("Decrement");
    },
    increaseQuantity() {
      if (this.quantity < this.item.stock) {
        this.quantity++;
        console.log("Increment");
      } else {
        alert("Item is out of stock");
      }
    },
    updateQuantity() {
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    removeFromCart() {
      const store = useCounterStore();
      store.removeFromCart(this.item);
      console.log("store clear", store);
    },
  },
};
</script>

<style scoped></style>
