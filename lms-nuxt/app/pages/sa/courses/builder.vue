<script setup lang="ts">
import LessonBuilder from '~/components/builder/LessonBuilder.vue'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})
</script>

<template>
  <LessonBuilder />
</template>
