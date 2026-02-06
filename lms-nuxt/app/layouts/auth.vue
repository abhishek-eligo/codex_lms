<template>
  <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px;">
    <div style="width: min(900px, 100%);" class="grid grid-cols-2 gap-6">
      <div class="card" style="background: var(--primary-color); color: #fff;">
        <h1 style="margin: 0 0 12px; font-size: 28px;">Enterprise LMS</h1>
        <p style="margin: 0 0 20px;">Role-based experience with configurable themes and enterprise modules.</p>
        <div class="card" style="background: rgba(255, 255, 255, 0.16); border-color: transparent;">
          <p style="margin: 0;">Mock auth is enabled. Choose a role to enter the platform.</p>
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
