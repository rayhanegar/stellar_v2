<script setup>
import { defineProps } from 'vue';

// Define props
const props = defineProps(['snap']);

</script>

<template>
  <div class="flex flex-col items-center py-4 px-2 rounded-lg bg-grey">
    <div class="w-full items-center h-full flex flex-col justify-end px-3 py-3 space-y-3">
      <img :src="props.snap.url" alt="Snap Image" class="w-2/5"  />
      <p class="font-light">{{ props.snap.title }}</p>
    </div>
  </div>
</template>


