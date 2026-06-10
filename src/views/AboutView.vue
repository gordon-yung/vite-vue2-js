<template>
  <div class="about">
    <h1>About</h1>
    <p>This is a starter project built with:</p>
    <ul>
      <li>⚡ <strong>Vite</strong> — Next generation frontend tooling</li>
      <li>💚 <strong>Vue 2</strong> — The Progressive JavaScript Framework</li>
      <li>🗂 <strong>Vue Router 3</strong> — Official router for Vue 2</li>
      <li>🗃 <strong>Vuex 3</strong> — State management for Vue 2</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 16px;
}

p {
  margin-bottom: 12px;
  color: #666;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 8px 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
}
</style>
