<script setup lang="ts">

definePageMeta({
  layout: 'learner',
  middleware: ['auth', 'role'],
  roles: ['CU', 'IU']
})

const modules = [
  { title: 'Leadership Foundations', progress: 72, next: 'Lesson 5: Feedback' },
  { title: 'Customer Success Mastery', progress: 35, next: 'Lesson 3: Renewal Strategy' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Learner Dashboard</h1>
    <p class="muted">Quick resume and progress tracking for your learning path.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div v-for="module in modules" :key="module.title" class="card">
        <div class="flex items-center justify-between">
          <h3 style="margin: 0;">{{ module.title }}</h3>
          <span class="badge">In Progress</span>
        </div>
        <p class="muted" style="margin: 8px 0 12px;">Next up: {{ module.next }}</p>
        <div class="progress">
          <span :style="{ width: `${module.progress}%` }" />
        </div>
        <button class="btn" style="margin-top: 12px;">Resume</button>
      </div>
    </div>
  </div>
</template>
