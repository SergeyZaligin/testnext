<template>
  <section>
    <h1>Add category</h1>
    <form>
      <input type="text" v-model="category" placeholder="add category" name="category">
    </form>
    <button type="submit">Add category</button>
  </section>
</template>

<script>

export default {
  layout: 'admin',
  data () {
    return {
      category: category
    }
  }
}

</script>
