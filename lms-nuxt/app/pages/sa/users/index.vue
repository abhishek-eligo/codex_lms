<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const users = [
  { email: 'jane@acme.com', firstName: 'Jane', lastName: 'Doe', company: 'Acme Corp', city: 'San Francisco' },
  { email: 'john@nordic.com', firstName: 'John', lastName: 'Smith', company: 'Nordic Health', city: 'Stockholm' }
]
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="section-title">User Management</h1>
        <p class="muted">Single or bulk creation with enterprise profile fields.</p>
      </div>
      <div class="flex gap-4">
        <button class="btn outline">Bulk Import</button>
        <button class="btn">Create User</button>
      </div>
    </div>

    <div class="card" style="margin-top: 20px;">
      <table class="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td>{{ user.email }}</td>
            <td>{{ user.firstName }} {{ user.lastName }}</td>
            <td>{{ user.company }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
