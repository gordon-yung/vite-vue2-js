<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      Edit <code>src/components/HelloWorld.vue</code> to get started.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.hello {
  padding: 20px;
  border: 1px solid #42b983;
  border-radius: 8px;
  display: inline-block;
  margin-top: 16px;
}

h2 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

p {
  color: #666;
}

code {
  background-color: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
