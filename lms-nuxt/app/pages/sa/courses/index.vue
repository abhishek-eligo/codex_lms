<script setup lang="ts">
import { useApi } from '~/composables/useApi'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const { fetchCourses } = useApi()
const courses = ref(await fetchCourses())
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="section-title">Course Management</h1>
        <p class="muted">Create, edit, and publish enterprise courses.</p>
      </div>
      <button class="btn">New Course</button>
    </div>

    <div class="card" style="margin-top: 20px;">
      <table class="table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Lessons</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" :key="course.id">
            <td>{{ course.title }}</td>
            <td>{{ course.lessons }}</td>
            <td><span class="tag">{{ course.status }}</span></td>
            <td>
              <div class="progress">
                <span :style="{ width: `${course.progress ?? 0}%` }" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
