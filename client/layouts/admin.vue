<template>
  <div id="wrapp">
    <header class="header">
      <div class="container">
        <!-- <p v-if="us">Login {{ us }}</p> -->
        Header
      </div>
    </header>
    <nav class="main-navigation" role="navigation">
      <div class="container">
        <nuxt-link to="/admin">Home admin</nuxt-link>
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/admin/articles">Articles managment</nuxt-link>
        <nuxt-link to="/admin/category">Category managment</nuxt-link>
      </div>
    </nav>
    <main class="content-admin" role="main">
      <div class="container">
        <h1>Welcome to admin panel</h1>
        <!-- <p>{{ us }}</p> -->
        <nuxt/>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        @ FOOTER
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  middleware: 'authadmin',
  computed: {
    us () {
      return this.$store.getters.user
    }
  }
}
</script>

