<template>
  <div class="newStore_main">
    <yd-navbar title="新开店铺">
      <router-link to="/store"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="newStore_contant">
      <yd-cell-group title="店铺名称"
                     class="newStore_name">
        <yd-cell-item>
          <yd-textarea slot="right"
                       placeholder="请输店铺名称"
                       v-model="newStore.name"
                       maxlength="20"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
      <yd-cell-group title="店铺地址">
        <yd-cell-item>
          <yd-textarea slot="right"
                       placeholder="请输入店铺地址"
                       v-model="newStore.address"
                       maxlength="100"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
      <yd-cell-item arrow
                    class="newStore_time">
        <span slot="left">营业时间：</span>
        <yd-datetime v-model="newStore.openTime"
                     type="time"
                     slot="right"></yd-datetime>
      </yd-cell-item>
      <yd-cell-item arrow
                    class="newStore_time">
        <span slot="left">休息时间：</span>
        <yd-datetime v-model="newStore.closeTime"
                     type="time"
                     :start-hour="Time2"
                     slot="right"></yd-datetime>
      </yd-cell-item>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">店铺联系人电话：</span>
          <yd-input slot="right"
                    v-model="newStore.phone"
                    required
                    :show-success-icon="false"
                    :show-error-icon="false"
                    regex="mobile"
                    placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <yd-button size="large"
                 type="primary"
                 bgcolor=#000
                 @click.native="createStore()"
                 color=#fff>完成</yd-button>
    </div>
  </div>
</template>
<script>
export default {
    /* eslint-disable */
    name:'NewStore',
  data() {
    return {
      Time2:8,
      newStore: {
        accesscode: this.$route.params.accesscode,
        address: "",
        closeTime: "",
        openTime: "",
        information: "",
        latitude: "", //定位信息
        message: "", //报错消息
        name: "",
        phone: ""
      }
    };
  },
  watch: {
    "newStore.openTime"() {
      this.Time2 = Number(this.newStore.openTime.substring(0,2))+1;
    }
  },
  methods: {
    createStore(){

        this.http.searchuid(this.newStore.address).then( res =>{
          console.log(res);
          this.newStore.latitude = res.results[0].uid;
          this.newStore.address = res.results[0].address;
          this.http.addStore(this.newStore).then( res =>{
          console.log(res);
        });
        });

    }
  }
};
</script>
<style>
.newStore_contant {
  height: auto;
  padding: 0.2rem;
}
.newStore_name textarea {
  height: 0.5rem;
}
.newStore_time {
  background: white;
}
</style>