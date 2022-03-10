<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import MobileView from '@/views/MobileView.vue'

import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const windowWidth = screen.width

onMounted(() => {
  store.state.isMobile = windowWidth < 768
})
</script>

<template>
  <template v-if="!store.state.isMobile">
    <navigation-bar />
    <router-view />
  </template>
  <template v-else>
    <mobile-view />
  </template>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
