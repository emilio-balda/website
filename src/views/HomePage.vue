<script setup lang="ts"></script>

<template>
  <table class="table">
    <tr>
      <td width="210px">
        <img src="../assets/me.png" alt="Avatar" class="w-44 rounded-full" />
      </td>
      <td>
        <h4 class="text-2xl text-left font-bold">Emilio Balda</h4>
        <p class="text-2xl text-left">Fullstack Developer</p>
        <p class="text-2xl text-left">PhD in Machine Learning</p>
        <p class="text-2xl text-left"><a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a></p>
      </td>
    </tr>
  </table>
</template>

<style>
/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
}

/* Clear floats */
.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>