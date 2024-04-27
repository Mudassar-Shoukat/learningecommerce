<template>
  <div>
    <header
      class="bg-[white] fixed top-0 w-full [box-shadow:0_3px_3px_rgb(237,_240,_239)]"
    >
      <slot name="header">
        <div class="border py-1 px-7">
          <nav class="flex justify-between">
            <div class="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 class="font-normal text-2xl leading-6 text-gray-800">
                Ecommerce
              </h2>
            </div>

            <!-- medium -->
            <ul class="flex items-center m-auto flex-auto space-x-2">
              <button
                onclick="location.href='//localhost:5173/'"
                type="button"
                class="w-[100px] h-[40px] mt-2 mb-2 text-sm font-medium bg-[#fdfbfb] rounded-lg border border-[#e6e5e5] hover:bg-gray-100 hover:text-black"
              >
                <router-link :to="{ path: '/' }">Home</router-link>
              </button>
            </ul>
            <!-- right side icons and other  -->

            <div class="flex space-x-2 justify-center items-center pl-2">
              <!-- Login icon -->
              <button
                type="button"
                class="hover:bg-[#f1efef] p-[7px] rounded-full"
              >
                <router-link :to="{ path: '/Login' }">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </router-link>
              </button>

              <!-- right side popup open icon -->
              <div>
                <div style="text-align: right">
                  <button
                    @click="drawerVisible = true"
                    class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span class="absolute inset-0 object-right-top -mr-6">
                      <div
                        class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-blue-900 text-white"
                      >
                        {{ cart.length }}
                      </div>
                    </span>
                  </button>
                </div>
                <!-- {{ cart.length }} -->

                <div
                  class="right-drawer"
                  :style="{
                    width: drawerVisible ? '36vw' : '0',
                    // height: drawerVisible ? '' : '0',

                    paddingLeft: drawerVisible ? '10px' : '0',
                  }"
                >
                  <div style="text-align: right; margin: 15px">
                    <button class="close" @click="drawerVisible = false">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- click add to cart component  -->
                  <div v-for="item in cart" :key="item.id">
                    <CartItemVue :item="item" />
                  </div>
                  <!-- Sub total -->
                  <div
                    class="m-2 rounded-lg border bg-[white] p-5 shadow w-[440px]"
                  >
                    <hr class="my-4" />

                    <div class="flex justify-between">
                      <p class="text-lg font-bold">Total Product Price</p>
                      <div>
                        <p class="mb-1 text-lg font-bold">${{ TotalPrice }}</p>
                      </div>
                    </div>

                    <button
                      class="mt-6 w-full border rounded-md bg-[#f7f5f5] py-1.5 font-medium hover:bg-[#ebeaea]"
                    >
                      Check out
                    </button>
                  </div>
                </div>

                <div
                  class="drawer-mask"
                  :style="{
                    width: drawerVisible ? '100vw' : '0',
                    opacity: drawerVisible ? '0.6' : '0',
                  }"
                  @click="drawerVisible = false"
                ></div>
              </div>
            </div>
          </nav>
        </div>
      </slot>
    </header>

    <main class="px-[6px] py-[16px] mt-[80px]">
      <slot> </slot>
    </main>
    <footer class="bg-[#eee] px-[6px] py-[10px]">
      <slot name="footer">Footer </slot>
    </footer>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { UseCartStore } from "../Store";
import CartItemVue from "../Components/CartItem.vue";
export default {
  components: {
    CartItemVue,
  },
  data() {
    return {
      drawerVisible: false,
      quantity: 1,
    };
  },

  computed: {
    ...mapState(UseCartStore, ["cart"]),
    TotalPrice() {
      return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    },
  },
};
</script>
<style scoped>
.right-drawer {
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  padding-left: 0;
  border-left: 1px solid rgb(237, 231, 231);
  background: white;
  z-index: 200;
  transition: all 0.2s;
  /* border: 1px solid green; */
}

.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  transition: opacity 0.2s;
}
</style>
