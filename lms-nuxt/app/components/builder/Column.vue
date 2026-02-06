<script setup lang="ts">
import TextWidget from '~/components/builder/widgets/Text.vue'
import ImageWidget from '~/components/builder/widgets/Image.vue'
import VideoWidget from '~/components/builder/widgets/Video.vue'
import ButtonWidget from '~/components/builder/widgets/Button.vue'
import DividerWidget from '~/components/builder/widgets/Divider.vue'
import PlaceholderWidget from '~/components/builder/widgets/Placeholder.vue'

interface ColumnData {
  id: string
  width: string
  widgets: Array<{ id: string; type: string; content: string }>
}

defineProps<{ column: ColumnData }>()

const widgetMap = {
  Text: TextWidget,
  Image: ImageWidget,
  Video: VideoWidget,
  Button: ButtonWidget,
  Divider: DividerWidget,
  Placeholder: PlaceholderWidget
}
</script>

<template>
  <div class="card">
    <div class="muted" style="margin-bottom: 8px;">Column {{ column.id }} · {{ column.width }}</div>
    <component
      v-for="widget in column.widgets"
      :key="widget.id"
      :is="widgetMap[widget.type as keyof typeof widgetMap] || PlaceholderWidget"
      :content="widget.content"
    />
  </div>
</template>
