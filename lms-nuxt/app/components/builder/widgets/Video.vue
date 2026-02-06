<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Video</strong>
    <div style="margin-top: 8px;">
      <div class="card" style="padding: 12px;">{{ content }}</div>
    </div>
  </div>
</template>
