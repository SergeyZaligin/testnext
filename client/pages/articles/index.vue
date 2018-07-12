<template>
  <section>
    <h1>Articles page</h1>
    <ul class="pagination">{{ art }}</ul>
  </section>
</template>

<script>

export default {
  methods: {

  },
  computed: {
      art () {
        return this.$store.getters.articles
      }
    }
}

</script>
