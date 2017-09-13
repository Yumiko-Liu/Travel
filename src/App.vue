<template>
  <div id="app">
    <transition name="cover">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
}
.cover-enter-active, .cover-leave-active {
  transition: all .15s;
}
.cover-enter, .cover-leave-to {
  transform: translateX(100%);
}
</style>
