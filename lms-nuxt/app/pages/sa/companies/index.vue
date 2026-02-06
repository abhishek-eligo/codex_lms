<script setup lang="ts">
import { useApi } from '~/composables/useApi'

definePageMeta({
  layout: 'admin',
  middleware: ['auth', 'role'],
  roles: ['SA']
})

const { fetchCompanies } = useApi()
const companies = ref(await fetchCompanies())
</script>

<template>
  <div>
    <h1 class="section-title">Company Management</h1>
    <p class="muted">Manage enterprise tenants and organization profiles.</p>
    <div class="card" style="margin-top: 20px;">
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Industry</th>
            <th>Email</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companies" :key="company.id">
            <td>{{ company.name }}</td>
            <td>{{ company.industry }}</td>
            <td>{{ company.email }}</td>
            <td>{{ company.city }}</td>
            <td>{{ company.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
