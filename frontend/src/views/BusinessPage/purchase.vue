
<template>
  <div class="purchase_main">
    <yd-layout>
      <yd-navbar slot="navbar"
                 title="预约确认">
        <router-link :to="{name:'reservation',params:{
          store:this.info.store,
          access:this.info.access,
          physician:this.info.physician,
        }}"
                     slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <yd-flexbox direction="vertical">
        <yd-flexbox-item>
          <div class="">
            确认信息：
          </div>
        </yd-flexbox-item>
        <yd-flexbox-item>预约客户信息：{{info.userAccount}}</yd-flexbox-item>
        <yd-flexbox-item>预约店铺：{{info.store.name}}</yd-flexbox-item>
        <yd-flexbox-item>预约技师：{{info.physician.name}}</yd-flexbox-item>
        <yd-flexbox-item>预约项目：{{info.product}}</yd-flexbox-item>
        <yd-flexbox-item>预约时间：{{info.time}}</yd-flexbox-item>
        <yd-flexbox-item>
          <yd-button size="large"
                     bgcolor="#000"
                     color="#FFF"
                     @click.native="add()">确认</yd-button>
        </yd-flexbox-item>
      </yd-flexbox>

    </yd-layout>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      info: this.$route.params
    };
  },
  mounted() {},
  methods: {
    add() {
      let time = this.info.time.day +","+ this.info.time.hsf;
      console.log(time);
      this.http
        .addReservation(
          this.info.userID,
          this.info.store.uuid,
          this.info.physician.uuid,
          time,
        )
        .then(res => {
          console.log(res);
        });
    },
  }
};
</script>

<style>
</style>
