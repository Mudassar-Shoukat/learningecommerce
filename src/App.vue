<template>
  <div>
    <AppLayout >
      <router-view></router-view>
    </AppLayout>
  </div>
</template>

<script>

import AppLayout from "/src/Layout/AppLayout.vue";

export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>

<style scoped></style>
