<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/registration">Registration</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/logout">Logout</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}


</style>
