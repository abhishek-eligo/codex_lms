<script setup lang="ts">
import { useApi } from '~/composables/useApi'

definePageMeta({ layout: 'admin', middleware: ['auth', 'role'], roles: ['SA'] })
const { fetchCourses } = useApi()
const courses = ref(await fetchCourses())
const router = useRouter()
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <div>
        <h1 class="section-title">Courses</h1>
        <p class="page-subtitle">Manage, edit and publish enterprise learning catalogs.</p>
      </div>
      <button class="btn" @click="router.push('/sa/courses/create')">+ New Course</button>
    </div>

    <div class="card" style="margin-top:16px;">
      <table class="table">
        <thead><tr><th>Course</th><th>Lessons</th><th>Status</th><th>Progress</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>{{ course.title }}</td>
            <td>{{ course.lessons }}</td>
            <td><span class="tag">{{ course.status }}</span></td>
            <td><div class="progress"><span :style="{ width: `${course.progress ?? 0}%` }" /></div></td>
            <td>
              <button class="btn soft" @click="router.push(`/sa/courses/${course.id}/edit`)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
