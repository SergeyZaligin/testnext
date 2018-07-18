<template>
  <div id="wrapp">
    <header class="header">
      <div class="container">
        <p v-if="us">Login {{ us }}</p>
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/login">Login</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/registration">Registration</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/admin">Admin</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/articles">Articles</nuxt-link>
            </li>
            <li>
              <a @click="logout($event)" href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="content" role="main">
      <div class="container">
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



<style lang="scss">

</style>

<script>

export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    logout($event){
      $event.preventDefault();
      console.log('Logout');
      this.$store.dispatch('logout');
      document.cookie = 'auth_token' + '=; Max-Age=0';
      this.$router.push('/login')
    }
  },

  computed: {
    us () {
      return this.$store.getters.user
    }
  }

}

</script>
