<template>

  <section>
    <h1>Admin manager articles page</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/admin/articles/add">Add</nuxt-link>
          </li>
        <li>
          <nuxt-link to="/admin">list</nuxt-link>
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
