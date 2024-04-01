<!-- <template>
  <div>

    <nav class="h-12 bg-zinc-200">
      <router-link
        :to="{ name: 'Home' }"
        class="text-blue-500 hover:text-blue-800 m-12"
        >Home</router-link
      >
    </nav>

 <body>

 </body>
  </div>
</template>

<script>
export default {};
</script> -->
<template>
    <div>
      <header class="bg-[#eee] px-[6px] py-[10px]">
        <slot name="header">Header</slot>
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
    name: "Layout",
  };
  </script>
  
  <style scoped>
 
  </style>
  