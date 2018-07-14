<template>

  <section>
    <h1>Admin manager categories page</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/admin/category/add">Add</nuxt-link>
          </li>
        <li>
          <nuxt-link to="/admin/category">list</nuxt-link>
          </li>
      </ul>
    </nav>
  </section>

</template>

<script>

export default {
  layout: 'admin'
}

</script>
