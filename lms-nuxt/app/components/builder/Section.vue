<script setup lang="ts">
import Row from '~/components/builder/Row.vue'

interface SectionData {
  id: string
  rows: Array<{ id: string; columns: Array<{ id: string; width: string; widgets: Array<{ id: string; type: string; content: string }> }> }>
}

defineProps<{ section: SectionData }>()
</script>

<template>
  <div class="card" style="margin-bottom: 16px;">
    <div class="muted" style="margin-bottom: 12px;">Section {{ section.id }}</div>
    <Row v-for="row in section.rows" :key="row.id" :row="row" />
  </div>
</template>
