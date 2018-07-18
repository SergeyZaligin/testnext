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
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/articles">Articles</nuxt-link>
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/registration">Registration</nuxt-link>
        <nuxt-link to="/admin">Admin</nuxt-link>
        <a @click="logout($event)" href="#">Logout</a>
      </div>
    </nav>
    <main class="content" role="main">
      <div class="container">
        <section class="main-content">
          <nuxt/>
        </section>
        <aside class="sidebar">
          <section class="widget">
            <h3 class="widget__title">Выбрать р-н</h3>
            <app-district></app-district>
          </section>
        </aside>
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

import district from '../components/District';

export default {

  components: {
    appDistrict: district
  },

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

<style lang="scss"></style>
