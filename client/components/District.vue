<template>
  <section class="container">
    <div v-for="district of districts" :key="district._id">
      {{district.name}}
    </div>
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
