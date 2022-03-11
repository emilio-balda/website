<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPage = computed(() => route.name)
const props = defineProps({
  pageName: String,
  to: String,
})
</script>

<template>
  <router-link :to="to" class="router-link" :class="{ 'router-link-selected': currentPage === pageName }">
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