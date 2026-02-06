<template>
  <div class="flex">
    <AppSidebar />
    <div class="main-content">
      <AppTopbar />
      <div style="margin-top: 24px;">
        <slot />
      </div>
    </div>
  </div>
</template>
