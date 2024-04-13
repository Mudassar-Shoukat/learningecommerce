<template>
  
  <div>
    <header class="2xl:container 2xl:mx-auto">
      <slot name="header">
        <div class="shadow py-3 px-7">
          <nav class="flex justify-between">
            <div class="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 class="font-normal text-2xl leading-6 text-gray-800">
                Practice Website
              </h2>
            </div>

            <!-- medium -->
            <ul class="hidden md:flex flex-auto space-x-2">
              <button
                onclick="location.href='//localhost:5173/'"
                type="button"
                class="px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Home
              </button>
              <button
                type="button"
                class="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                About Us
              </button>
            </ul>
            <!-- right side icons and other  -->
            <div class="flex space-x-5 justify-center items-center pl-2">
              <div>
                <div style="text-align: right">
                  <button class="toggle" @click="drawerVisible = true">
                   
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>






                  </button>
                </div>

                <div
                  class="right-drawer"
                  :style="{
                    width: drawerVisible ? '35vw' : '0',
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
               
               <div>
                 <p>{{ $store.state.name }}</p>
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

    <main class="px-[6px] py-[16px]">
      <slot> </slot>
    </main>
    <footer class="bg-[#eee] px-[6px] py-[10px]">
      <slot name="footer">Footer </slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerVisible: false,
    };
  },
};
</script>
<style scoped>


.right-drawer {
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  padding-left: 0;
  border-left: 1px solid rgb(237, 231, 231);
  background: white;
  z-index: 200;
  transition: all 0.2s;
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
