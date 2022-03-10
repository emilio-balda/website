<script setup lang="ts">
import NavigationLink from '@/components/NavigationLink.vue'
</script>

<template>
  <div id="nav" class="py-12">
    <p class="text-3xl">
      <navigation-link to="/" page-name="Home" />
      <navigation-link to="/services" page-name="Services" />
      <navigation-link to="/portfolio" page-name="Portfolio" />
      <navigation-link to="/contact" page-name="Contact" />
    </p>
  </div>
</template>
