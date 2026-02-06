<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})

const groups = [
  { name: 'Onboarding Cohort', members: 120, owner: 'HR Team' },
  { name: 'Sales Enablement', members: 85, owner: 'Sales Ops' }
]
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="section-title">Groups</h1>
        <p class="muted">Organize learners into cohorts and campaigns.</p>
      </div>
      <button class="btn">Create Group</button>
    </div>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div v-for="group in groups" :key="group.name" class="card">
        <h3 class="section-title">{{ group.name }}</h3>
        <p class="muted">{{ group.members }} members · Owner: {{ group.owner }}</p>
        <button class="btn outline" style="margin-top: 12px;">Manage Group</button>
      </div>
    </div>
  </div>
</template>
