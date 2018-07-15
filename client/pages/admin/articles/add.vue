<template>
  <section>
    <h1>Add article</h1>
    <form>
      <input type="radio" v-model="visible" value="1" name="visible"> Visible
      <input type="radio" v-model="visible" value="0" name="visible" checked>Hidden<br>
      <input type="number" v-model="sort" name="sort" id="sort" placeholder="sort"><br>
      <textarea v-model="description" name="description" placeholder="description"></textarea><br>
      <textarea v-model="keywords" name="keywords" placeholder="keywords"></textarea><br>
      <input type="text" v-model="title" name="title" placeholder="add title"><br>
      <input type="text" v-model="slug" name="slug" placeholder="slug"><br>
      <textarea v-model="preview" name="preview" placeholder="preview"></textarea><br>
      <textarea v-model="seoPreview" name="seoPreview" placeholder="seoPreview"></textarea><br>
      <input type="text" v-model="imageThubnail" name="imageThubnail" placeholder="imageThubnail"><br>
      <select name="categories">
        <option
        v-for="category of categories.categories"
        :key="category._id"
        value="`${category.id}`"
        >
        {{ category.name }}
        </option>
      </select>
      <textarea v-model="text" name="text" placeholder="text"></textarea><br>
    </form>
    <button type="submit" @click="onSubmit()">Add article</button>
  </section>
</template>

<script>

export default {
  layout: 'admin',

  data () {
    return {
      visible: 0,
      sort: 1,
      title: '',
      slug: '',
      description: '',
      keywords: '',
      preview: '',
      seoPreview: '',
      imageThubnail: '',
      text: '',
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
        name: this.name,
        slug: this.slug,
        description: this.description,
        keywords: this.keywords,
        token: this.token
      }
      this.$store.dispatch('addArticle', article)
      this.$router.push('/admin/article/list');
      //console.log('category add ', category);
      //console.log('params ', para);
    }
  },
  computed: {
    us () {
      return this.$store.getters.user
    },
    categories () {
      return this.$store.getters.categories
    }
  },
}

</script>
