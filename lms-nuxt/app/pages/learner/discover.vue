<script setup lang="ts">

definePageMeta({
  layout: 'learner',
  middleware: ['auth', 'role'],
  roles: ['CU', 'IU']
})

const recommendations = [
  { title: 'Project Management Essentials', duration: '3h', level: 'Intermediate' },
  { title: 'Emotional Intelligence', duration: '2h', level: 'Beginner' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Discover</h1>
    <p class="muted">Personalized recommendations based on your goals.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div v-for="item in recommendations" :key="item.title" class="card">
        <h3 style="margin: 0 0 8px;">{{ item.title }}</h3>
        <p class="muted">{{ item.duration }} · {{ item.level }}</p>
        <button class="btn outline" style="margin-top: 12px;">Add to Plan</button>
      </div>
    </div>
  </div>
</template>
