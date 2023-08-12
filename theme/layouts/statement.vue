<script setup lang="ts">
  import TopBar from "../components/top-bar.vue";
  import BottomBar from "../components/bottom-bar.vue";
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center statement">
    <div class="my-auto">
      <TopBar />
      <slot />
      <BottomBar />
    </div>
  </div>
</template>
