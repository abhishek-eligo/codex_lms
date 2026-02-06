<template>
  <div class="page-shell">
    <AppSidebar />
    <section class="workspace">
      <AppTopbar />
      <main class="main-content"><slot /></main>
    </section>
    <ThemeCustomizer />
  </div>
</template>
