<script setup lang="ts">

definePageMeta({
  layout: 'learner',
  middleware: ['auth', 'role'],
  roles: ['CU', 'IU']
})

const courses = [
  { title: 'Compliance 2024', progress: 40 },
  { title: 'Wellness at Work', progress: 90 },
  { title: 'Time Management', progress: 10 }
]
</script>

<template>
  <div>
    <h1 class="section-title">My Learning</h1>
    <p class="muted">Keep track of active courses and completion status.</p>

    <div class="grid grid-cols-3 gap-6" style="margin-top: 20px;">
      <div v-for="course in courses" :key="course.title" class="card">
        <h3 style="margin: 0 0 8px;">{{ course.title }}</h3>
        <div class="progress">
          <span :style="{ width: `${course.progress}%` }" />
        </div>
        <button class="btn" style="margin-top: 12px;">Continue</button>
      </div>
    </div>
  </div>
</template>
