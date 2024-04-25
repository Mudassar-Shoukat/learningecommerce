import { defineStore } from "pinia";

export const UseCartStore = defineStore("counter", {
  state: () => ({
    cart: [],
  }),
  actions: {
    AddtoCart(product) {
      const { id } = product;
      let productItm = this.cart.find((item) => {
        return item.id == id;
      });

      if (!productItm) {
        this.cart.push(product);
      }
    },
    RemoveFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      console.log("remove single product in cart", this.cart);
    },

    Increment_Cart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });

      let product = this.cart[productIndex];

      if (product && product.qty < product.stock) {
        product.qty = product.qty++;
        product.totalPrice = product.price * product.qty + product.price;
        console.log("product total price", product.totalPrice);
        console.log("product increment quantity in store", product.qty++);
        console.log("product increment quantity in store object", product);
      } else {
        console.warn("Item is out of stock or not found");
      }
    },

    Decrement_Cart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });

      let product = this.cart[productIndex];
      if (product && product.qty > 1) {
        product.qty = product.qty--;
        product.totalPrice = product.price * product.qty - product.price;

        console.log("product decrement quantity in store", product.qty--);
        console.log("product decrement quantity in store object", product);
      }
    },
  },
});
