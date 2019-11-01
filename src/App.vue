<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './style/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  // margin-top: 60px;
}
.icon{
  width:1.5em;
  height:1.5em;
  vertical-align: 0.15em;
  fill:currentColor;
  overflow: hidden;
}
</style>
