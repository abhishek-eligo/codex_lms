<script setup lang="ts">
import Column from '~/components/builder/Column.vue'

interface RowData {
  id: string
  columns: Array<{ id: string; width: string; widgets: Array<{ id: string; type: string; content: string }> }>
}

defineProps<{ row: RowData }>()
</script>

<template>
  <div class="card" style="margin-bottom: 12px; background: #f1f5f9;">
    <div class="muted" style="margin-bottom: 8px;">Row {{ row.id }}</div>
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
      <Column v-for="column in row.columns" :key="column.id" :column="column" />
    </div>
  </div>
</template>
