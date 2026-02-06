<script setup lang="ts">
defineProps<{ label: string; value: string; change?: string }>()
</script>

<template>
  <div class="card">
    <div class="muted" style="font-size: 12px;">{{ label }}</div>
    <div style="font-size: 24px; font-weight: 700; margin-top: 8px;">{{ value }}</div>
    <div v-if="change" class="tag" style="margin-top: 12px;">{{ change }}</div>
  </div>
</template>
