<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<template>
  <div class="widget" style="margin-bottom: 8px;">
    <strong>Divider</strong>
    <hr style="margin-top: 10px; border: none; border-top: 1px solid var(--border-color);" />
  </div>
</template>
