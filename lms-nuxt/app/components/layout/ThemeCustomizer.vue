<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
const open = ref(false)
</script>

<template>
  <div class="customizer">
    <button class="btn" @click="open = !open">Theme Customizer</button>
    <div v-if="open" class="card" style="margin-top: 10px;">
      <label class="muted">Primary</label>
      <input class="input" type="color" :value="themeStore.primary" @input="themeStore.setTheme({ primary: ($event.target as HTMLInputElement).value })" />
      <label class="muted" style="margin-top: 8px; display:block;">Secondary</label>
      <input class="input" type="color" :value="themeStore.secondary" @input="themeStore.setTheme({ secondary: ($event.target as HTMLInputElement).value })" />
      <label class="muted" style="margin-top: 8px; display:block;">Accent</label>
      <input class="input" type="color" :value="themeStore.accent" @input="themeStore.setTheme({ accent: ($event.target as HTMLInputElement).value })" />
    </div>
  </div>
</template>
