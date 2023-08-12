<script setup lang="ts">
  import TopBar from "../components/top-bar.vue";
  import BottomBar from "../components/bottom-bar.vue";
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
})
const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <TopBar />
    <div class="slidev-layout default image-right my-auto" :class="props.class">
      <slot />
    </div>
    <div class="my-14 mr-14" :style="style"></div>
    <BottomBar />
  </div>
</template>
