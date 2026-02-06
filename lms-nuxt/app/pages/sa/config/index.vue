<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
import { useConfigStore } from '~/stores/config'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const themeStore = useThemeStore()
const configStore = useConfigStore()

const updateTheme = () => {
  themeStore.setTheme({ primary: configStore.primaryColor })
}
</script>

<template>
  <div>
    <h1 class="section-title">Global Configuration</h1>
    <p class="muted">Super Admin only: control branding, system settings, and feature flags.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div class="card">
        <h3 class="section-title">Branding</h3>
        <label class="muted">Primary Color</label>
        <input v-model="configStore.primaryColor" class="input" type="color" style="height: 44px;" @change="updateTheme" />

        <label class="muted" style="display: block; margin-top: 12px;">Logo URL</label>
        <input v-model="configStore.logo" class="input" placeholder="/logo.svg" />

        <label class="muted" style="display: block; margin-top: 12px;">Favicon URL</label>
        <input v-model="configStore.favicon" class="input" placeholder="/favicon.svg" />
      </div>

      <div class="card">
        <h3 class="section-title">System Defaults</h3>
        <label class="muted">Date Format</label>
        <input v-model="configStore.dateFormat" class="input" />

        <label class="muted" style="display: block; margin-top: 12px;">Default Time Zone</label>
        <input v-model="configStore.timeZone" class="input" />

        <label class="muted" style="display: block; margin-top: 12px;">Default Language</label>
        <input v-model="configStore.language" class="input" />

        <label class="muted" style="display: block; margin-top: 12px;">Currency</label>
        <input v-model="configStore.currency" class="input" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div class="card">
        <h3 class="section-title">Feature Flags</h3>
        <div class="flex items-center justify-between" style="margin-bottom: 12px;">
          <span>Marketplace</span>
          <input type="checkbox" v-model="configStore.marketplaceEnabled" />
        </div>
        <div class="flex items-center justify-between">
          <span>Notifications</span>
          <input type="checkbox" v-model="configStore.notificationsEnabled" />
        </div>
      </div>
      <div class="card">
        <h3 class="section-title">Live Theme Preview</h3>
        <p class="muted">All buttons and highlights update instantly.</p>
        <div class="flex gap-4" style="margin-top: 12px;">
          <button class="btn">Primary</button>
          <button class="btn secondary">Secondary</button>
          <button class="btn outline">Outline</button>
        </div>
      </div>
    </div>
  </div>
</template>
