<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})
</script>

<template>
  <div>
    <h1 class="section-title">Company Admin Dashboard</h1>
    <p class="muted">Manage your organization, cohorts, and learning impact.</p>

    <div class="grid grid-cols-3 gap-6" style="margin-top: 20px;">
      <div class="card">
        <h3 class="section-title">Active Learners</h3>
        <strong style="font-size: 28px;">1,284</strong>
      </div>
      <div class="card">
        <h3 class="section-title">Courses Assigned</h3>
        <strong style="font-size: 28px;">42</strong>
      </div>
      <div class="card">
        <h3 class="section-title">Completion Rate</h3>
        <strong style="font-size: 28px;">78%</strong>
      </div>
    </div>
  </div>
</template>
