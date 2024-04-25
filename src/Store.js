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
      });

      if (!productItm) {
        this.cart.push(product);
      }
    },
    removeFromCart(product) {
      this.cart = this.cart.filter((item) => item.id !== product.id);
      console.log("remove single product in cart", this.cart);
    },

    incrementCart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });
      // console.log("index",productIndex);
      let product = this.cart[productIndex];

      // product.price*product.qty
      // product.totalPrice=product.price*product.qty+product.price

      if (product && product.qty < product.stock) {
        product.qty = product.qty++;
        product.totalPrice = product.price * product.qty + product.price;
console.log("product total price",product.totalPrice);
        console.log("product increment quantity in store", product.qty++);
        console.log("product increment quantity in store object", product );
   
      } else {
        console.warn("Item is out of stock or not found");
      }
      //  console.log("item price",   product.price*product.qty);
    },

    decrementCart(productId) {
      let productIndex = this.cart.findIndex((item) => {
        return item.id == productId;
      });

      // console.log(product.qty);

      let product = this.cart[productIndex];
      if (product && product.qty > 1) {
        product.qty = product.qty--;
        product.totalPrice = product.price * product.qty - product.price;

        //  product.totalPrice=product.qty *product.price

        //  console.log(product.qty  ,  product.qty--);
        console.log("product decrement quantity in store", product.qty--);
        console.log("product decrement quantity in store object", product);
      }
    },
  },
});
