<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
</script>


<template>
  <div id="nav" class="py-12">
    <p class="text-3xl">
      <router-link
        to="/"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'Home' }"
        @click.prevent="store.state.currentPage = 'Home'"
      >
        Home
      </router-link>
      <router-link
        to="/services"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'Services' }"
        @click.prevent="store.state.currentPage = 'Services'"
      >
        Services
      </router-link>
      <router-link
        to="/portfolio"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'Portfolio' }"
        @click.prevent="store.state.currentPage = 'Portfolio'"
      >
        Portfolio
      </router-link>
      <router-link
        to="/testimonials"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'Testimonials' }"
        @click.prevent="store.state.currentPage = 'Testimonials'"
      >
        Testimonials
      </router-link>
      <router-link
        to="/references"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'References' }"
        @click.prevent="store.state.currentPage = 'References'"
      >
        References
      </router-link>
      <router-link
        to="/contact"
        class="router-link"
        :class="{ 'router-link-selected': store.state.currentPage === 'Contact' }"
        @click.prevent="store.state.currentPage = 'Contact'"
      >
        Contact
      </router-link>
    </p>
  </div>
</template>

<style scoped>
.router-link {
  padding: 5px 20px 5px 20px;
}

.router-link-selected {
  border-bottom: 8px solid mediumspringgreen;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}
</style>
