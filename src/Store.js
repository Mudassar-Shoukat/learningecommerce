import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    cart: [],
  }),
  actions: {
    AddtoCart(product) {
      const { id } = product;
      let productItm = this.cart.find((item) => {
        return item.id == id;
        //  console.log(product);
      });

      if (!productItm) {
        this.cart.push(product);
      }
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      // console.log("product remove");
      // console.log("remove single product", product);
      console.log("remove single product in cart", this.cart);
    },
   
  },
});
