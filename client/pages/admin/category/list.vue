<template>

  <section>
    <h1>Admin manager categories list page</h1>
    <ul>
      <li>
        <nuxt-link :to="'/'"></nuxt-link>
      </li>
    </ul>
  </section>

</template>

<script>

export default {
  layout: 'admin',
  created(){
    this.$store.dispatch('getCategories')
      .then(()=>{
        console.log('Success');
      })
      .catch(error => {
        console.log(error)
      })
    },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  }
}

</script>
