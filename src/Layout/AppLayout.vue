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

<style scoped></style>
