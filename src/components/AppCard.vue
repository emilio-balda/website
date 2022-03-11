<script setup lang="ts">
</script>

<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  line-height: 0.8;
  margin-bottom: 50px;
  margin-top: 100px;
}

.header p {
  margin: 0 auto;
  line-height: 2;
  color: hsl(229, 6%, 66%);
}

.box p {
  color: hsl(229, 6%, 66%);
}

.box {
  /* border-radius: 5px; */
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: auto;
  border-top: 6px solid;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}
.box:hover {
  /* border-radius: 5px; */
  box-shadow: 0px 0px 20px 0px mediumspringgreen;
}
</style>