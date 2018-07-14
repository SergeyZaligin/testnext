<template >
  <section class="container">
    <div>
      <h1>
        Registration
      </h1>
      <form action="" method="post" >
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
        <div class="input-group">
          <label for="confirmPasswordInput">Confirm password</label><br>
          <input
            id="confirmPasswordInput"
            name="confirm-password"
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
          >
        </div>

      </form><br>
      <button @click="onSubmit">Create account</button>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('registration', user)
        .then(()=>{
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}


</script>
