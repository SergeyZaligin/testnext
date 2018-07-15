<template>
  <section class="container">
    <div v-for="category of categories.categories" :key="category._id">
      {{category.name}}
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      token: this.$store.getters.user
    }
  },
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
    onSubmit () {

      const article = {
        visible: this.visible,
        sort: this.sort,
        title: this.title,
        slug: this.slug,
        description: this.description,
        keywords: this.keywords,
        preview: this.preview,
        seoPreview: this.seoPreview,
        imageThubnail: this.imageThubnail,
        text: this.text,
        selectCategory: this.selectCategory,
        token: this.token
      }
      //this.$store.dispatch('addArticle', article)
      //this.$router.push('/admin/article/list');
      console.log('Article add ', article);
      //console.log('params ', para);
    }
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
}

</script>

<style>
.container {

}
</style>
