<template>
  <section>
    <h1>Article page</h1>
    <ul class="articles">
      <li
        v-for="article of art.articles"
        :key="article.id"
      >
      <nuxt-link to="/">{{ article.title }}</nuxt-link>
      </li>
    </ul>
    <ul class="pagination">
      <li @click="onSubmit">Pag</li>
    </ul>
  </section>
</template>

<script>

export default {
  created(){
      this.$store.dispatch('getArticles', 4)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

onSubmit () {

      this.$store.dispatch('getArticles', 4)
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
