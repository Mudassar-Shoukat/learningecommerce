<template>
  <div
    class="border-[1px] border-[rgb(210,208,190)] outline-[#f0eaea] bg-[#faf8f8] [box-shadow:0_3px_3px_rgb(237,_240,_239)] m-[4px] flex w-[450px] p-[10px] rounded"
  >
    <!--  -->
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

        <span class="text-[#0C0C0C] text-sm">
          <!-- RS: ${{ item.price * item.qty }} -->
          RS: ${{ item.totalPrice }}
        </span>
      </div>

      <div class="h-[30px] flex">
        <div class="flex items-center justify-center">
          <button
            class="block w-[25px] h-[23px] bg-[#d7d2d2] no-underline text-center leading-[23px]"
            @click="Decrement_Cart(item.id)"
          >
            -
          </button>

          <input
            class="w-[45px] h-[23px] outline-[none] text-center bg-[#f6f4f4]"
            v-model="item.qty"
          />
          <button
            class="block w-[25px] h-[23px] bg-[#d7d2d2] no-underline text-center leading-[23px]"
            @click="Increment_Cart(item.id)"
          >
            +
          </button>
        </div>
      </div>

      <div class="flex text-right justify-end">
        <button
          class="hover:underline hover:text-[red]"
          @click="RemoveFromCart()"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { UseCartStore } from "../Store";
import { mapActions, mapState } from "pinia";
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
    ...mapActions( UseCartStore, ["Increment_Cart", "Decrement_Cart"]),

    RemoveFromCart() {
      const store = UseCartStore();
      store.RemoveFromCart(this.item);
      console.log("store clear", store);
    },
  },
};
</script>

<style scoped></style>
