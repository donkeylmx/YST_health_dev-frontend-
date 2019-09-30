<template>

    <router-view/>
  
</template>
<script>

export default {
  name:'login',
  data(){
    return{}
  },
  mounted: function () {
    this.$nextTick(function () {

    }),
    this.$router.push('/login');
  },

}
</script>
<style>
body {
  margin: 0;
    background: #fff;
  background-attachment: fixed;
}


