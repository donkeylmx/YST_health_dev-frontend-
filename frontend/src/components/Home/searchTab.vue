

<template>
<yd-navbar slot="navbar"><yd-navbar slot="navbar">
    <router-link to="#"
               slot="left">
    <a class="logo"></a>
  </router-link>

  <router-link to="#"
               slot="right">
    <yd-icon name="search"
             custom></yd-icon>
  </router-link>
  </yd-navbar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>


.logo {
  height: 100%;
  width: 100%;
  background: url("~assets/images/logo.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>