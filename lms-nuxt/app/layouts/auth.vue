<template>
  <div style="min-height:100vh; display:flex; align-items:center; justify-content:center; padding:28px; background: radial-gradient(circle at top left,#ddd6fe,#f8fafc 45%);">
    <div style="width:min(1180px,100%);" class="grid grid-cols-2 gap-6">
      <section class="card" style="background: linear-gradient(145deg,#4c1d95,#7c3aed); color:white;">
        <h1 style="margin:0 0 10px; font-size:40px;">Enterprise LMS</h1>
        <p style="font-size:20px; opacity:0.92;">Role-based experience with configurable themes and enterprise modules.</p>
        <div class="card" style="background: rgba(255,255,255,.12); border-color: transparent; margin-top:14px;">Mock auth is enabled. Choose a role to enter the platform.</div>
      </section>
      <section>
        <slot />
      </section>
    </div>
  </div>
</template>
