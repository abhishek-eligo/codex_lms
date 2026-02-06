<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <header class="topbar" style="position: static;">
      <div style="display:flex;align-items:center;gap:10px;">
        <img src="/logo.svg" alt="logo" style="width:34px;height:34px;" />
        <strong>Enterprise LMS</strong>
      </div>
      <button class="btn" @click="router.push('/login')">Launch Demo</button>
    </header>

    <main style="max-width:1200px;margin:40px auto;padding:0 20px;">
      <div class="grid grid-cols-2 gap-6">
        <section>
          <h1 class="section-title" style="font-size:56px;line-height:1.08;">Enterprise-grade LMS with modular architecture.</h1>
          <p class="page-subtitle" style="font-size:20px;">Empower admins, enable learners, and deliver marketplace-ready content with dynamic theming and strict RBAC.</p>
          <div style="display:flex;gap:10px;margin-top:16px;">
            <button class="btn" @click="router.push('/login')">Start as Admin</button>
            <button class="btn outline" @click="router.push('/login')">Explore as Learner</button>
          </div>
        </section>
        <section class="card">
          <h3 style="margin-top:0;">Platform Highlights</h3>
          <ul style="margin:0; padding-left:18px;">
            <li>Header + sidebar + main shell layout inspired by enterprise products.</li>
            <li>Role-aware modules with dashboards, courses, marketplace, and config.</li>
            <li>Theme customizer panel for instant color updates.</li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>
