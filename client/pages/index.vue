<template>
  <section class="container">
    <h1>Home page</h1>
    <app-category></app-category>
    <app-district></app-district>
  </section>
</template>

<script>
import category from '../components/Category';
import district from '../components/District';

export default {
  components: {
    appCategory: category,
    appDistrict: district
  }

}

</script>

<style>

</style>
