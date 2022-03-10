<template>
  <div class="box cyan">
    <p class="text-2xl py-2 hover:drop-shadow">
      <a href="mailto:me@emilio-balda.com">me@emilio-balda.com</a>
    </p>
    <p class="text-2xl py-2 hover:drop-shadow">
      <a href="https://www.linkedin.com/in/emiliobalda/">linkedin.com/in/emiliobalda</a>
    </p>
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
  margin-left: auto;
  margin-right: auto;
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