<template>
  <div class="home">
    <h1>Welcome to vite-vue2-js</h1>
    <p>基于 Vite + Vue 2 + JavaScript 搭建的项目</p>
    <div class="counter">
      <h2>Vuex Counter</h2>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
    <HelloWorld msg="Hello Vue 2 + Vite!" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
}
</script>

<style scoped>
.home {
  padding: 40px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 16px;
}

p {
  color: #666;
  margin-bottom: 32px;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}

.counter h2 {
  margin-right: 16px;
}

button {
  padding: 8px 16px;
  font-size: 1.2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #35a172;
}

span {
  font-size: 1.5rem;
  min-width: 40px;
  text-align: center;
}
</style>
