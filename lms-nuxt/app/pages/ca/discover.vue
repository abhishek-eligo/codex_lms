<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})

const items = [
  { title: 'Onboarding Essentials', category: 'HR', price: '$499' },
  { title: 'Cybersecurity Starter', category: 'IT', price: '$599' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Discover</h1>
    <p class="muted">Browse marketplace courses ready for teams.</p>

    <div class="grid grid-cols-2 gap-6" style="margin-top: 20px;">
      <div v-for="item in items" :key="item.title" class="card">
        <span class="tag">{{ item.category }}</span>
        <h3 style="margin-top: 10px;">{{ item.title }}</h3>
        <div class="flex items-center justify-between" style="margin-top: 16px;">
          <strong>{{ item.price }}</strong>
          <button class="btn outline">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
