<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['auth', 'role'], roles: ['SA'] })

const rules = [
  { name: 'Low Progress Reminder', condition: 'Progress < 40%', action: 'Send Email + In-App' },
  { name: 'License Threshold', condition: 'Remaining licenses < 15', action: 'Notify Company Admin' }
]
const templates = [
  { channel: 'Email', title: 'Nudge to resume learning' },
  { channel: 'SMS', title: 'Your compliance deadline is near' },
  { channel: 'Bell', title: 'New mandatory course assigned' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Business Rules & Notifications</h1>
    <p class="page-subtitle">Rules engine + template blocks with preview mode.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 16px;">
      <section class="card">
        <h3 style="margin-top:0;">Rules</h3>
        <table class="table">
          <thead><tr><th>Name</th><th>Condition</th><th>Action</th></tr></thead>
          <tbody>
            <tr v-for="rule in rules" :key="rule.name"><td>{{ rule.name }}</td><td>{{ rule.condition }}</td><td>{{ rule.action }}</td></tr>
          </tbody>
        </table>
      </section>
      <section class="card">
        <h3 style="margin-top:0;">Templates</h3>
        <div v-for="item in templates" :key="item.title" class="card" style="margin-bottom:10px; background: var(--surface-soft);">
          <span class="tag">{{ item.channel }}</span>
          <strong style="display:block; margin-top:6px;">{{ item.title }}</strong>
          <button class="btn soft" style="margin-top:8px;">Open Editor</button>
        </div>
      </section>
    </div>
  </div>
</template>
