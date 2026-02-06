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
    <div class="flex items-center gap-4" style="margin-bottom: 24px;">
      <img :src="configStore.logo" alt="LMS" style="width: 40px; height: 40px;" />
      <div>
        <strong>Enterprise LMS</strong>
        <div class="muted" style="font-size: 12px;">{{ authStore.role ?? 'Guest' }}</div>
      </div>
    </div>
    <nav>
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :class="{ active: route.path === item.to }"
      >
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
