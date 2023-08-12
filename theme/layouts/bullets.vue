<script setup lang="ts">
  import TopBar from "../components/top-bar.vue";
  import BottomBar from "../components/bottom-bar.vue";
</script>

<template>
  <div class="slidev-layout h-full grid bullets">
    <div class="pt-18">
      <TopBar />
      <slot />
      <BottomBar />
    </div>
  </div>
</template>
