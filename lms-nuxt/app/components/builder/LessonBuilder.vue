<script setup lang="ts">
import Section from '~/components/builder/Section.vue'

const lessonSchema = ref({
  title: 'Onboarding Lesson',
  sections: [
    {
      id: 'sec-1',
      rows: [
        {
          id: 'row-1',
          columns: [
            {
              id: 'col-1',
              width: '100%',
              widgets: [
                { id: 'w-1', type: 'Text', content: 'Welcome to the onboarding experience.' },
                { id: 'w-2', type: 'Video', content: 'https://player.vimeo.com/video/123' }
              ]
            }
          ]
        }
      ]
    }
  ]
})
</script>

<template>
  <div class="card">
    <div class="flex items-center justify-between" style="margin-bottom: 16px;">
      <div>
        <h2 class="section-title">Lesson Builder</h2>
        <p class="muted">Elementor-style layout with sections, rows, and widget registry.</p>
      </div>
      <button class="btn">Save Lesson</button>
    </div>
    <div class="builder-canvas">
      <Section v-for="section in lessonSchema.sections" :key="section.id" :section="section" />
    </div>
    <div style="margin-top: 16px;">
      <h3 class="section-title">JSON Schema</h3>
      <pre class="card" style="overflow-x: auto;">{{ lessonSchema }}</pre>
    </div>
  </div>
</template>
