<template>
  <section class="container">
    <nav>
      <nuxt-link v-for="district of districts" :to="`/agency/${ district._id }`" :key="district._id">
      {{district.name}}
      </nuxt-link>
    </nav>
  </section>
</template>

<script>

export default {

  created(){
    this.$store.dispatch('getDistricts')
      .then(()=>{
        console.log('Success');
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onSubmit () {}
  },
  computed: {
    districts () {
      return this.$store.getters.districts
    }
  },
}

</script>

<style>

</style>
