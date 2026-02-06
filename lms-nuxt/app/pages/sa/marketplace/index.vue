<script setup lang="ts">
import { useApi } from '~/composables/useApi'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const { fetchMarketplace } = useApi()
const items = ref(await fetchMarketplace())
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="section-title">Marketplace</h1>
        <p class="muted">Bundles with multi-course licensing and checkout flow.</p>
      </div>
      <button class="btn">Add Marketplace Item</button>
    </div>

    <div class="grid grid-cols-3 gap-6" style="margin-top: 20px;">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="tag">{{ item.category }}</div>
        <h3 style="margin: 12px 0 8px;">{{ item.title }}</h3>
        <p class="muted">{{ item.coursesIncluded }} courses · {{ item.licenses }} licenses</p>
        <div class="flex items-center justify-between" style="margin-top: 16px;">
          <strong>{{ item.price }}</strong>
          <button class="btn outline">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
