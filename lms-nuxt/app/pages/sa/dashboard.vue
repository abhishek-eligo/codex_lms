<script setup lang="ts">
import StatCard from '~/components/ui/StatCard.vue'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const stats = [
  { label: 'Total Companies', value: '128', change: '+8 this month' },
  { label: 'Total Users', value: '24,589', change: '+12% growth' },
  { label: 'Total Courses', value: '438', change: '+32 new' },
  { label: 'Marketplace Revenue', value: '$1.2M', change: '+18% QoQ' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Super Admin Dashboard</h1>
    <p class="muted">Enterprise overview with global KPIs and activity feed.</p>

    <div class="grid grid-cols-4 gap-4" style="margin-top: 20px;">
      <StatCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
    </div>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 24px;">
      <div class="card">
        <h3 class="section-title">Marketplace Revenue</h3>
        <div class="card" style="height: 180px; display: flex; align-items: center; justify-content: center;">
          <span class="muted">Chart placeholder</span>
        </div>
      </div>
      <div class="card">
        <h3 class="section-title">Activity Feed</h3>
        <ul style="padding-left: 18px; margin: 0;">
          <li>Acme Corp upgraded to Enterprise plan.</li>
          <li>New course published: Compliance 2024.</li>
          <li>Marketplace order #9921 completed.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
