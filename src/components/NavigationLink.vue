<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  pageName: String,
  to: String,
})
</script>

<template>
  <router-link
    :to="to"
    class="router-link"
    :class="{ 'router-link-selected': store.state.currentPage === pageName }"
    @click.prevent="store.state.currentPage = pageName"
  >
    {{ pageName }}
  </router-link>
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