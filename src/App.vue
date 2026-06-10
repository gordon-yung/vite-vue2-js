<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2c3e50;
}

nav {
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

nav a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
