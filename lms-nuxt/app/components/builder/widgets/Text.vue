<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Text</strong>
    <p style="margin: 6px 0 0;">{{ content }}</p>
  </div>
</template>
