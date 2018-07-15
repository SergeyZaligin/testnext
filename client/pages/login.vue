<template>
  <section class="container">
    <div>
      <h1>

      </h1>
      <form action="" method="post">
        <div class="input-group">
          <label for="emailInput">Email</label><br>
          <input
            id="emailInput"
            name="email"
            label="Email"
            type="email"
            v-model="email"
          >
        </div>
        <div class="input-group">
          <label for="passwordInput">Password</label><br>
          <input
            id="passwordInput"
            name="password"
            label="Password"
            type="password"
            v-model="password"
          >
        </div>
      </form><br>
      <button @click="onSubmit">LoggedIn</button>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginUser', user)
        .then(()=>{
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
   computed: {
      us () {
        return this.$store.getters.user
      }
    }
}

</script>
