<template>
  <section class="container">
    <h1>Home page</h1>
    <app-category></app-category>
  </section>
</template>

<script>
import category from '../components/Category';

export default {
  components: {
    appCategory: category
  }

}

</script>

<style>

</style>
