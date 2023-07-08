<template>
  <div class="info-wrapper">
    <div class="column">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <div class="left">
        <img src="../assets/img/Project_69-07.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos non, repellendus atque,
          illum accusantium ut corporis natus assumenda iure molestias maxime iste sit debitis,
          laboriosam nihil porro quo consequuntur. Minus ex provident cumque nisi harum optio
          blanditiis dolores dolor sint! laboriosam nihil porro quo consequuntur. Minus ex provident
          cumque nisi harum optio blanditiis dolores dolor sint!
        </p>
      </div>
      <div class="right">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos non, repellendus atque,
          illum accusantium ut corporis natus assumenda iure molestias maxime iste sit debitis,
          laboriosam nihil porro quo consequuntur. Minus ex provident cumque nisi harum optio
          blanditiis dolores dolor sint! laboriosam nihil porro quo consequuntur. Minus ex provident
          cumque nisi harum optio blanditiis dolores dolor sint!
        </p>
        <img src="../assets\img\Project_152-07.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120vh;
}
.column {
  max-width: 120ch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
}
h1 {
  font-size: 4rem;
  padding-bottom: 1rem;
  padding-top: 10rem;
}
p {
  font-size: 1.5rem;
  padding-bottom: 1rem;
  line-height: 1.5;
}
img {
  max-width: 60ch;
  height: auto;
}
@media only screen and (max-width: 1089px) {
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    padding-top: 6rem;
  }
  p {
    font-size: 1rem;
    padding-bottom: 0.5rem;
    line-height: 1;
  }
  img {
    max-width: 40ch;
    height: auto;
  }
  .column {
    max-width: 80ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 750px) {
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
  .right {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
  }
}
</style>
