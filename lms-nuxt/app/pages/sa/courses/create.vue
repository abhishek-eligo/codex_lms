<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['auth', 'role'], roles: ['SA'] })
const form = reactive({ title: '', category: 'Leadership', lessons: 6, visibility: 'Company + Individual', description: '' })
</script>

<template>
  <div>
    <h1 class="section-title">Create Course</h1>
    <p class="page-subtitle">Define course metadata and publishing controls.</p>
    <div class="grid grid-cols-2 gap-6" style="margin-top:16px;">
      <div class="card">
        <label class="muted">Course Title</label>
        <input v-model="form.title" class="input" placeholder="Advanced Sales Leadership" />
        <label class="muted" style="display:block;margin-top:10px;">Category</label>
        <select v-model="form.category" class="select"><option>Leadership</option><option>Compliance</option><option>Productivity</option></select>
        <label class="muted" style="display:block;margin-top:10px;">Lesson Count</label>
        <input v-model="form.lessons" type="number" class="input" />
      </div>
      <div class="card">
        <label class="muted">Visibility</label>
        <select v-model="form.visibility" class="select"><option>Company + Individual</option><option>Company Only</option><option>Marketplace Only</option></select>
        <label class="muted" style="display:block;margin-top:10px;">Description</label>
        <textarea v-model="form.description" class="input" rows="7" placeholder="Course objectives and audience"></textarea>
        <div style="margin-top:14px;display:flex;gap:10px;"><button class="btn">Save Draft</button><button class="btn outline">Publish</button></div>
      </div>
    </div>
  </div>
</template>
