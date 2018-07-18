<template>
  <div id="wrapp">
    <header class="header">
      <div class="container">
        <!-- <p v-if="us">Login {{ us }}</p> -->
        Header
      </div>
    </header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/admin">Home admin</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
         <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/articles">Articles managment</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/category">Category managment</nuxt-link>
        </li>
      </ul>
    </nav>
    <main class="content" role="main">
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

