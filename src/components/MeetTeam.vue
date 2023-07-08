<template>
  <div class="greeting">
    <h1>Meet the team</h1>
    <p>Use your mouse to hoover over the cards</p>
  </div>
</template>

<style scoped>
.greeting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 4rem;
  padding-bottom: 1rem;
  padding-top: 5rem;
  font-family: roboto;
}
p {
  font-size: 1.5rem;
  padding-bottom: 1rem;
  line-height: 1.5;
  font-family: roboto;
}
span {
  color: var(--clr-accent);
}
</style>
