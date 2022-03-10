<script setup lang="ts">
</script>

<template>
  <h1 class="text-8xl italic py-8 px-10">Some awesome quote</h1>
  <table class="table-responsive">
    <tr>
      <td class="px-10">
        <img src="../assets/me.png" alt="Avatar" class="w-60 rounded-full" />
      </td>
      <td class="pr-32">
        <h4 class="text-3xl text-left font-bold">Emilio Balda</h4>
        <p class="text-2xl text-left">Fullstack Developer</p>
        <p class="text-2xl text-left">PhD in Machine Learning</p>
        <p class="text-2xl text-left"><a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a></p>
      </td>
      <td class="pr-32">
        <p class="text-2xl text-justify py-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non magna id risus rutrum pulvinar quis in libero.
        </p>
        <button class="button-64" role="button"><span class="text">Get Started</span></button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
/* CSS */
.button-64 {
  align-items: center;
  background-image: linear-gradient(144deg, darkorchid, royalblue, mediumspringgreen);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
  box-shadow: 0px 0px 20px 0px mediumspringgreen;
}

.button-64 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

/* .button-64:hover span {
  background: none;
} */

@media (min-width: 768px) {
  .button-64 {
    font-size: 24px;
    min-width: 196px;
  }
}

/* adjust the 768px below to your desired width */
@media only screen and (max-width: 768px) {
  h1 {
    display: block;
    padding: 20px;
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
    padding: 20px;
  }
  table.table-responsive tr td {
    padding: 20px;
  }
}
</style>