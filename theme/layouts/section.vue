<script setup lang="ts">
  import TopBar from "../components/top-bar.vue";
  import BottomBar from "../components/bottom-bar.vue";
</script>

<template>
  <div class="slidev-layout h-full grid section">
    <div class="my-auto">
      <TopBar />
      <slot />
      <BottomBar />
    </div>
  </div>
</template>
