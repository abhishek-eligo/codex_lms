<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Image</strong>
    <img :src="content" alt="Lesson" style="width: 100%; border-radius: 8px; margin-top: 8px;" />
  </div>
</template>
