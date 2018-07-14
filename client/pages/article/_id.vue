<template>
  <section>
    <h1>{{ art.title }}</h1>
    <p>{{ art.text }}</p>
  </section>
</template>

<script>

export default {
  data () {
    return {
      id: this.$route.params['id']
    }
  },
  created(){
      this.$store.dispatch('getArticleById', this.id)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

onSubmit () {
      //console.log('This page', this.page);
      this.$store.dispatch('getArticleById', this.id)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  computed: {
      art () {
        return this.$store.getters.article
      }
    }
}

</script>
