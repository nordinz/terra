<template>
  <div class="hero-wrapper">
    <div class="left-wrapper">
      <h1>Lorem, ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos libero repellat
        deserunt debitis sapiente. Eveniet, dolore! Id itaque architecto voluptate.
      </p>
      <div class="button-wrapper">
        <button class="button">Start Now</button>
        <button class="button-purple">Read More</button>
      </div>
    </div>

    <img
      src="../assets//img//vecteezy_human-interactive-tech-interaction-images-of-robot-human_6552210.jpg"
      alt=""
    />
  </div>
</template>
<style scoped>
.hero-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.left-wrapper {
  max-width: 60ch;
}
h1 {
  font-size: 6rem;
  padding-bottom: 1rem;
}
p {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}
img {
  max-width: 60ch;
  height: auto;
}
.button-wrapper {
  gap: 1rem;
}
.button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: var(--clr-accent);
  border-color: var(--clr-accent);
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.button:hover {
  color: var(--clr-accent);
  background-color: #ffffff;
  border-color: var(--clr-accent);
}
.button-purple {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: var(--clr-accent-2);
  border-color: var(--clr-accent-2);
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.button-purple:hover {
  color: var(--clr-accent-2);
  background-color: #ffffff;
  border-color: var(--clr-accent-2);
}
@media only screen and (max-width: 1089px) {
  img {
    max-width: 30ch;
    height: auto;
  }
  .left-wrapper {
    max-width: 40ch;
  }
  h1 {
    font-size: 4rem;
    padding-bottom: 0.6rem;
  }
  p {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
  img {
    max-width: 40ch;
    height: auto;
  }
  .button-wrapper {
    gap: 1rem;
  }
}
@media only screen and (max-width: 750px) {
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
}
</style>
