<script setup lang="ts">
import AppCard from '@/components/AppCard.vue'
import { useStore } from 'vuex'
const store = useStore()
</script>


<template>
  <h1 v-show="store.state.isMobile" class="text-8xl italic py-8 px-10">Services</h1>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Supervisor</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down blue">
      <h2>Calculator</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
body {
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  background-color: hsl(0, 0%, 98%);
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

h1:first-of-type {
  font-weight: 200;
  color: hsl(234, 12%, 34%);
}

h1:last-of-type {
  color: hsl(234, 12%, 34%);
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

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
  margin: 20px;
}
.box:hover {
  /* border-radius: 5px; */
  box-shadow: 0px 0px 20px 0px mediumspringgreen;
}

img {
  float: right;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 6px solid;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}
.red {
  border-top: 6px solid;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}
.blue {
  border-top: 6px solid;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}
.orange {
  border-top: 6px solid;
  border-image: linear-gradient(to right, darkorchid, royalblue, mediumspringgreen) 1;
}

h2 {
  color: hsl(234, 12%, 34%);
  font-weight: 600;
}

@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-down {
    position: relative;
    top: 150px;
  }
  .box {
    width: 20%;
  }
  .header p {
    width: 30%;
  }
}
</style>