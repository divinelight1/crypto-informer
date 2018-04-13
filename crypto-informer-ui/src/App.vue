<template>
  <div id="app">
    <navigation></navigation>
    <h1>Hello App!</h1>

  <p style="position: absolute; z-index:9999;">
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/allcurrencies">Go to Foo</router-link>
    <router-link to="/eth">Go to Bar</router-link>
    <a href="/eth">asd</a>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation'

export default {
  name: 'App',
  components: {
    navigation
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
