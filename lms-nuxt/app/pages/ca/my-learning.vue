<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})

const learning = [
  { title: 'Leadership Foundations', progress: 72 },
  { title: 'Compliance 2024', progress: 40 }
]
</script>

<template>
  <div>
    <h1 class="section-title">My Learning</h1>
    <p class="muted">Resume courses and track your own progress.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div v-for="item in learning" :key="item.title" class="card">
        <h3 class="section-title">{{ item.title }}</h3>
        <div class="progress" style="margin-top: 12px;">
          <span :style="{ width: `${item.progress}%` }" />
        </div>
        <button class="btn" style="margin-top: 12px;">Resume</button>
      </div>
    </div>
  </div>
</template>
