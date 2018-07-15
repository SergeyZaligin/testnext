<template>

  <section>
    <h1>Admin manager categories list page</h1>
    <ul>
      <li v-for="category of categories.categories" :key="category._id">
        <p>{{ category.name }}</p>
        <nuxt-link :to="`/admin/category/update/${category._id}`">Update</nuxt-link>
        <span @click="onDelete(`${category._id}`)"> / Delete</span>
      </li>
    </ul>
  </section>

</template>

<script>

export default {
  data () {
    return {
      token: this.$store.getters.user
    }
  },

  layout: 'admin',

  created(){
    this.$store.dispatch('getCategories', this.token)
      .then(()=>{
        console.log('Success');
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    onDelete (id) {
      const idCategory = id;
      const result = confirm('Delete this category?');
      if (result) {
        this.$store.dispatch('removeCategory', {token: this.token, id: idCategory})
        this.$router.push('/admin/category/list');
        console.log('delete', idCategory);
      }
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  }
}

</script>
