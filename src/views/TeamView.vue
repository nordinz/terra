<script setup>
import Greeting from '../components/MeetTeam.vue'
import Page from '../components/PaginationContr.vue'
import { getData } from '../lib/api'
import { ref, onMounted } from 'vue'
const error = ref(false)
const data = ref([])
async function getUsers(page = 1) {
  try {
    const res = await getData(`https://reqres.in/api/users?page=${page}`)
    if (res.status !== 200) {
      throw new Error('broken api req')
    }
    data.value = res.data
  } catch (error) {
    error.value = true
  }
}
onMounted(() => {
  getUsers()
})
</script>

<template>
  <Greeting />
  <div class="view-wrapper">
    <div class="error" v-if="error"><h2>Error</h2></div>
    <div class="main" v-else>
      <div class="card" v-for="person in data.data" :key="person.id">
        <div class="card-content">
          <h2 class="card-title space">{{ person.first_name }} {{ person.last_name }}</h2>
          <div class="avatar-wrapper"><img :src="person.avatar" alt="avatar" class="avatar" /></div>
          <p class="card-body space">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tenetur velit!
          </p>

          <a v-bind:href="'mailto:' + person.email" class="button space">Contact</a>
        </div>
      </div>
    </div>
  </div>
  <div class="page">
    <Page
      v-if="data?.data"
      :page="data.page"
      :total-pages="data.total_pages"
      @go-to-page="getUsers"
    />
  </div>
</template>
<style scoped>
.view-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
}
.main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)
      no-repeat;
  background-size: cover;
  padding: 5rem 0 0;
  max-width: 22ch;
  min-height: 30ch;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 16px;
  margin-left: 16px;
  transition: transform 500ms ease;
}

.card-content {
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(hsl(0 0% 0% / 0), hsl(20 0% 0% / 0.3) 20%, hsl(0 0% 0% / 1));
  display: flex;
  flex-direction: column;
}

.card-title {
  position: relative;
  width: max-content;
  color: var(--clr-light);
}
.card-title::after {
  content: '';
  position: absolute;
  height: 4px;
  background: var(--clr-accent);
  width: calc(100% + var(--padding));
  left: calc(var(--padding) * -1);
  bottom: 0;

  transition: transform 300ms ease;
  transform-origin: left;
}
.card:hover .card-title::after {
  transform: scaleX(1);
}
.card-body {
  color: rgb(255 255 255 / 0.85);
}
.button {
  cursor: pointer;
  color: rgb(0, 0, 0);
  background-color: var(--clr-accent);
  width: fit-content;
  border-radius: 0.25em;
  margin-left: 8px;
  border-width: 0;
  text-decoration: none;
}
.button:hover,
.button:focus {
  background-color: var(--clr-light);
  color: var(--clr-accent);
}
.space {
  padding: 0.5rem;
}
.avatar {
  border-radius: 50%;

  object-fit: cover;
  width: 3.8rem;
  height: 3.8rem;
  margin-left: 8px;
  margin-top: 10px;
  border: solid var(--clr-accent) 3px;
}
.page {
  text-align: center;
  padding: 1.5rem;
}
@media (hover) {
  .card-content {
    transform: translateY(50%);
    transition: transform 300ms ease;
  }
  .card:hover,
  card:focus-within {
    transform: scale(1.02);
  }
  .card:hover .card-content {
    transform: translateY(0);
    transition-delay: 350ms;
  }
  .card-content > *:not(.card-title, .button) {
    opacity: 0;
    transition: 200ms ease;
  }
  .card:hover .card-content > *:not(.card-title, .button) {
    opacity: 1;
    transition-delay: 500ms;
  }
  .card-title:after {
    transform: scaleX(0);
  }
}
</style>
