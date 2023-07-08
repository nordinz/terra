<script setup></script>
<template>
  <section class="header">
    <p>T<span>e</span>rra</p>
    <nav>
      <ul>
        <router-link v-slot="{ isActive }" to="/">
          <li :class="[isActive && 'active', 'link']">Home</li>
        </router-link>
        <router-link v-slot="{ isActive }" to="/team">
          <li :class="[isActive && 'active', 'link']">Team</li>
        </router-link>
        <router-link v-slot="{ isActive }" to="/about">
          <li :class="[isActive && 'active', 'link']">About</li>
        </router-link>
      </ul>
    </nav>
  </section>
  <RouterView />
</template>

<style scoped>
* {
  font-family: roboto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter: blur(8px);
}

.header p {
  font-size: 2em;
  font-weight: 900;
}

nav,
ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
span {
  color: var(--clr-accent);
}
.link {
  font-size: large;
  font-weight: 700;
  color: #000000;
  transition: 0.3s;
}

.active {
  color: rgb(47, 0, 255);

  padding: 5px 12px 5px 12px;
  border-radius: 15px;
}
nav a li:hover {
  color: rgb(99, 96, 255);
  border-radius: 15px;
  text-decoration: none;
}

@media only screen and (max-width: 900px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  ul {
    padding: 0;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
