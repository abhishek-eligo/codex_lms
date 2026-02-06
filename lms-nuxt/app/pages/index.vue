<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <header class="topbar">
      <div class="container flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="/logo.svg" alt="LMS" style="width: 36px; height: 36px;" />
          <strong>Enterprise LMS</strong>
        </div>
        <button class="btn" @click="router.push('/login')">Launch Demo</button>
      </div>
    </header>
    <main class="container" style="padding: 48px 0;">
      <div class="grid grid-cols-2 gap-6">
        <div>
          <h1 style="font-size: 40px; margin-bottom: 16px;">Enterprise-grade LMS with modular architecture.</h1>
          <p class="muted" style="font-size: 16px;">
            Empower admins, enable learners, and deliver marketplace-ready content with dynamic theming and strict RBAC.
          </p>
          <div class="flex gap-4" style="margin-top: 20px;">
            <button class="btn" @click="router.push('/login')">Start as Admin</button>
            <button class="btn outline" @click="router.push('/login')">Explore as Learner</button>
          </div>
        </div>
        <div class="card">
          <h3 class="section-title">Platform Highlights</h3>
          <ul style="padding-left: 18px;">
            <li>Configurable branding, themes, and marketplace controls.</li>
            <li>Course builder with structured lessons and widgets.</li>
            <li>Multi-tenant dashboards for companies and learners.</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
