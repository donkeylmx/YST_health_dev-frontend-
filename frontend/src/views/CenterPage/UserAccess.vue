<!-- 用户权限 -->
<template>
  <transition name="leftEnter">
    <div class="access_main">
      <yd-navbar title="权限管理">
        <router-link to="/Center"
                     slot="left">
          <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <div class="access_main_base">
        <h2>我的当前用户权限</h2>

      </div>
      <div class="access_main_apply">
        <div class="apply_jishi">

          <h2>技师权限</h2>
          <p>{{access.Physician}}</p>
          <yd-button size="large"
                     type="hollow"
                     @click.native="addAccree(1)"
                     v-show=physician>成为技师</yd-button>
          <!-- <yd-button size="large" type="hollow">注销技师</yd-button> -->
        </div>
        <div class="apply_dianzhang">
          <h2>成为店长</h2>
          <p>{{access.Store}}</p>
          <yd-button size="large"
                     type="hollow"
                     @click.native="addAccree(2)"
                     v-show=store>成为店长</yd-button>
          <!-- <yd-button size="large" type="hollow">注销店长</yd-button> -->
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      uuid: window.localStorage.getItem("YST_ID"),
      access: "",
      user: "",
      physician: true,
      store: true,
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.http.getAccess(window.localStorage.getItem("YST_ID")).then(res => {
        this.access = res;
        let sum = 0;
        while (sum < this.access.permissions.length) {
          if (this.access.permissions[sum].type === 1) {
            this.access.Physician = this.access.permissions[sum];
            console.log("已拥有技师权限");
            this.physician = false;
          }
          if (this.access.permissions[sum].type === 2) {
            this.access.Store = this.access.permissions[sum];
            console.log("已拥有店长权限");
            this.store = false;
          }
          else{
            console.log("未拥有店长权限")
            this.store = true;
          }
          sum++;
          console.log(this.access);
        }
      });
      this.http.getUser(this.uuid).then(res => {
        this.user = res;
      });
    },
    addAccree(type) {
      this.http.AddUserAccess(this.uuid, type).then(res => {
        this.getinfo();
      });
    }
  }
};
</script>
<style >
.leftEnter-enter-active {
  transition: all 0.3s ease;
}

.leftEnter-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
.access_main{
  max-width: 750px;
  margin: 0 auto;
}
.access_main_apply h2{
  font-size: 0.4rem;
  
}
</style>