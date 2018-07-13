<template>
  <section>
    <h1>Articles page</h1>
    <ul class="pagination" @click="onSubmit">{{ art.current }}</ul>
  </section>
</template>

<script>

export default {
  created(){
      this.$store.dispatch('getArticles')
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

onSubmit () {

      this.$store.dispatch('getArticles')
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  computed: {
      art () {
        return this.$store.getters.articles
      }
    }
}

</script>
