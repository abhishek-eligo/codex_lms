<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Button</strong>
    <div style="margin-top: 8px;">
      <button class="btn">{{ content }}</button>
    </div>
  </div>
</template>
