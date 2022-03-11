<script setup lang="ts">
</script>

<template>
  <table class="table-responsive">
    <slot></slot>
  </table>
</template>

<style scoped>
/* adjust the 768px below to your desired width */
@media only screen and (max-width: 768px) {
  h1 {
    display: block;
    padding: 1px;
    font-size: 35px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  table.table-responsive * {
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  table.table-responsive tr {
    padding: 1px;
  }
  table.table-responsive tr td {
    padding: 1px;
  }
}

table.table-responsive * {
  margin-left: auto;
  margin-right: auto;
}
</style>