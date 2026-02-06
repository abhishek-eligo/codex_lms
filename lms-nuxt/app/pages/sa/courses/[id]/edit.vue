<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['auth', 'role'], roles: ['SA'] })
const route = useRoute()
const courseId = computed(() => route.params.id)
</script>

<template>
  <div>
    <h1 class="section-title">Edit Course: {{ courseId }}</h1>
    <p class="page-subtitle">Update lessons, pricing and publishing options.</p>
    <div class="card" style="margin-top:16px;">
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label class="muted">Course Title</label>
          <input class="input" value="Leadership Foundations" />
        </div>
        <div>
          <label class="muted">Status</label>
          <select class="select"><option>Published</option><option>Draft</option></select>
        </div>
      </div>
      <div style="margin-top:16px;display:flex;gap:10px;">
        <button class="btn">Update Course</button>
        <NuxtLink to="/sa/courses/builder" class="btn outline">Open Lesson Builder</NuxtLink>
      </div>
    </div>
  </div>
</template>
