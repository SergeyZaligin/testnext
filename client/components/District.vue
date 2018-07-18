<template>
  <section class="districts">
    <nav class="districts__links">
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

<style lang="scss">
.districts {

  &__links{
    display: flex;
    flex-direction: column;
  }
}
</style>
