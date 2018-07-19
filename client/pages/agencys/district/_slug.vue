<template>
  <section>
    <h1>Agencys by district</h1>
  </section>
</template>

<script>

export default {
  data () {
    return {
      slug: this.$route.params['slug']
    }
  },
  created(){
      this.$store.dispatch('getAllAgencysByDistrictId', this.slug)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

onSubmit () {
      //console.log('This page', this.page);
      this.$store.dispatch('getAllAgencysByDistrictId', this.slug)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  computed: {
      agencys () {
        return this.$store.getters.agencys
      }
    }
}

</script>
