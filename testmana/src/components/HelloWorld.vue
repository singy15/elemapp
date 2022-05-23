<template>
<div xmlns="http://www.w3.org/1999/xhtml" style="position: absolute; width: 610px; height: 400px; left: calc(50% - 305px); top: calc(50% - 200px); z-index: 5000025; box-sizing: border-box;">
<div style="background-color:#EFEFEF; font-size:11px; font-family:unset; border:solid 1px  #7272c7; border-radius:5px; box-sizing:border-box; width:100%; height:100%;">
  <div style="top:0px; height:30px; box-sizing:border-box; background-color: #7272c7; display:flex; justify-content:start; align-items:center; padding-left:5px; color:#fff;">
  TestReport - Menu
  </div>
  <div style="position: absolute; width: 180px; height: 60px; left: 10px; top: 40px; z-index: 9000035; box-sizing: border-box;"><button style="width:100%; height:100%; box-sizing:border-box; background-color:#fff; border:solid 1px #888; border-radius:5px; font-size:11px; font-family:unset; cursor:pointer; " @click="transitionTestReport()">TestReport</button></div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    transitionTestReport() {
      this.$router.push({
        name: 'ListTestReport',
        params: {}
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
