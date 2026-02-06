<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})

const orders = [
  { id: 'ORD-2041', item: 'Onboarding Essentials', status: 'Completed', total: '$499' },
  { id: 'ORD-2042', item: 'Sales Enablement Pack', status: 'Pending', total: '$799' }
]
</script>

<template>
  <div>
    <h1 class="section-title">Orders</h1>
    <p class="muted">Track marketplace purchases and license allocations.</p>

    <div class="card" style="margin-top: 20px;">
      <table class="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Item</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.item }}</td>
            <td><span class="tag">{{ order.status }}</span></td>
            <td>{{ order.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
