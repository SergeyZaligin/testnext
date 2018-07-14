<template>
  <section>
    <h1>Article page</h1>
    <ul class="articles">
      <li
        v-for="article of art.articles"
        :key="article._id"
      >
      <nuxt-link :to="`/article/${ article._id }`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
    <ul class="pagination">
      <li v-for="item of art.pages" :key="item">
        <nuxt-link :to="`/articles/${item}`">{{ item }}</nuxt-link>
      </li>
    </ul>
    <!-- <ul class="pagination">
      <li @click="onSubmit">Pag</li>
    </ul> -->
  </section>
</template>

<script>

export default {
  data () {
    return {
      page: this.$route.params['page'] || 1
    }
  },
  insertBefore(){
      this.$store.dispatch('getArticles', this.page)
        .then(()=>{

        })
        .catch(error => {
          console.log(error)
        })
  },
  methods: {

onSubmit () {
      //console.log('This page', this.page);
      this.$store.dispatch('getArticles', this.page)
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
