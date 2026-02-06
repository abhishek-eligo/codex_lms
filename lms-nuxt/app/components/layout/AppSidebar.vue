<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { useConfigStore } from '~/stores/config'
import { getNavigationForRole } from '~/services/mock.data'

const route = useRoute()
const authStore = useAuthStore()
const configStore = useConfigStore()
const navItems = computed(() => (authStore.role ? getNavigationForRole(authStore.role) : []))
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      <img :src="configStore.logo" alt="LMS" />
      <div>
        <strong>Enterprise LMS</strong>
        <div style="font-size: 12px; opacity: .8;">{{ authStore.role || 'Guest' }}</div>
      </div>
    </div>
    <nav>
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :class="{ active: route.path === item.to }"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
