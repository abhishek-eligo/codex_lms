<script setup lang="ts">

definePageMeta({
  layout: 'company',
  middleware: ['auth', 'role'],
  roles: ['CA']
})

const users = [
  { name: 'Maya Patel', email: 'maya@acme.com', group: 'Onboarding', status: 'Active' },
  { name: 'Leo Becker', email: 'leo@acme.com', group: 'Sales', status: 'Invited' }
]
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="section-title">Users</h1>
        <p class="muted">Invite and manage company learners.</p>
      </div>
      <button class="btn">Invite User</button>
    </div>

    <div class="card" style="margin-top: 20px;">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.email">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.group }}</td>
            <td><span class="tag">{{ user.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
