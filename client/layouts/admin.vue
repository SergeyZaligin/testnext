<template>
  <div>
    <h1>Welcome to admin panel</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/admin">Home admin</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
         <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin/articles">Articles managment</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
export default {
  middleware: 'authadmin'
}
</script>

