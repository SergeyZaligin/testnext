<template>
  <section>
    <h1>Update category</h1>
    <form>
      <input type="radio" v-model="visible" value="1" name="visible"> Visible
      <input type="radio" v-model="visible" value="0" name="visible" checked>Hidden<br>
      <input type="number" v-model="sort" name="sort" id="sort" placeholder="sort"><br>
      <input type="text" v-model="name" name="name" placeholder="add category"><br>
      <input type="text" v-model="slug" name="slug" placeholder="slug"><br>
      <textarea v-model="description" name="description" placeholder="description"></textarea><br>
      <textarea v-model="keywords" name="keywords" placeholder="keywords"></textarea><br>
    </form>
    <button type="submit" @click="onSubmit()">Update category</button>
  </section>
</template>

<script>

export default {
  layout: 'admin',
  data () {
    return {
      visible: 0,
      sort: 1,
      name: '',
      slug: '',
      description: '',
      keywords: '',
      id: this.$route.params['id']
    }
  },

  methods: {
    onSubmit () {

      const category = {
        id: this.id,
        visible: this.visible,
        sort: this.sort,
        name: this.name,
        slug: this.slug,
        description: this.description,
        keywords: this.keywords,
        token: this.$store.getters.user
      }
      this.$store.dispatch('updateCategory', category)
      this.$router.push('/admin/category/list');
      //console.log('category add ', category);
      //console.log('params ', para);
    }
  },
  computed: {
    us () {
      return this.$store.getters.user
    }
  },
}

</script>
