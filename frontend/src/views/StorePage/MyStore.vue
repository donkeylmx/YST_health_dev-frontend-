<template>
  <div class="mystore_main">
    <yd-navbar slot="navbar"
               title="我的店铺">
      <router-link to="/store"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="mystore_content">
      <div class="mystore_content_li"
           v-for="(item,index) in store.stores"
           :key="item.id">
        <h4>店铺名称：{{item.name}}</h4>
        <p>{{item.uuid}}</p>
        <p>{{index}}</p>
        <p>地址:{{item.address}}</p>
        <p>注册时间:{{item.createTime}}</p>
        <yd-button class="content_li_button clearfix"
                   @click.native="deleteStore(item.uuid)"
                   type="danger">删除店铺</yd-button>
        <yd-button class="content_li_button clearfix"
                   type="primary">修改信息</yd-button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      accesscode: this.$route.params.accesscode,
      store: ""
    };
  },
  mounted() {
    this.http.getStore(this.accesscode).then(res => {
      this.store = res;
    });
  },
  methods: {
    deleteStore(data) {
      this.http.del_store(data).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style>
.mystore_content_li {
  height: auto;
  padding: 0.2rem;
  border: 1px black solid;
  margin: 0.2rem 0;
}
.content_li_button {
  left: 60%;
  margin-right: 0.2rem;
}
</style>