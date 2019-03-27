<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  html {
    height: 100%;
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 14px;
      color: #333;
      font-family: PingFang SC, Microsoft YaHei, simhei, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
    pre {
      font-family: PingFang SC, Microsoft YaHei, simhei, Helvetica, Arial, sans-serif;
    }
  }
    
  a,
  a:link {
    // -webkit-appearance: none;
    // text-decoration: none;
    // color: #333;
    // cursor: pointer;
  }
  
  img {
    border: none;
  }
  
  div,
  select,
  input[type="text"],
  input[type="number"],
  input[type="tel"],
  input[type="email"],
  input[type="checkbox"],
  input[type="radio"] {
    -webkit-appearance: none;
  }
  
  div:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline-width: 0;
    box-shadow: none;
  }
  
  input:required {
    box-shadow: none;
  }
  
  button {
    border: none;
    outline-width: 0;
    box-shadow: none;
  }
  
  ul {
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
</style>