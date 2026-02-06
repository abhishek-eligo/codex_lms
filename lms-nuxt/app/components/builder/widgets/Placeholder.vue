<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Widget</strong>
    <div class="muted">{{ content }}</div>
  </div>
</template>
