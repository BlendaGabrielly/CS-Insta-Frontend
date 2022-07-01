<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>


//axios.get('https://yourbackend.io/users/all').then(posts => {
///   this.posts = posts;
//});
export default {
  name: "App", 
}
   
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
