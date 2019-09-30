<template>
  <div class="store_main"
       :class='getDown?"store_main gray":"store_main"'>
    <yd-layout>
      <yd-navbar slot="navbar"
                 title="店长页面">
        <router-link to="#"
                     slot="right"
                     @click.native="isShow">
          <yd-icon name="down"
                   custom
                   size="30px"
                   flex=2
                   color="#777"></yd-icon>
        </router-link>
      </yd-navbar>
      <div name="top"
           class="store_main_top"
           @click="enter('physician')"
           v-show="getDown">我是技师
        <div class="main_top_shadow"></div>
      </div>
    </yd-layout>
    <div class="store_info clearfix">
      <img src="~assets/images/th.jpg"
           alt="">
      <p>{{user.name}}</p>
      <span>店长</span>
    </div>
    <div class="store_sum clearfix">
      <div @click="enter('MyStore',access.Store.accesscode)">
        <span>我的店铺</span>
        <p>{{sum.stores}}</p>
      </div>
      <div @click="enter('MyPhysician',access.Store.accesscode)">
        <span>我的技师</span>
        <p>{{sum.physicianes}}</p>
      </div>
    </div>
    <div class="store_status clearfix">
      <h2>当前店面状态</h2>
      <p :class="status.color">{{status.name}}</p>
      <div class="store_open" v-show="status.newStore">
         <yd-button size="large" type="warning" @click.native="enter('NewStore',access.Store.accesscode)" >我要开店</yd-button>
      </div>
    </div>
  </div>

</template>
<script>
/* eslint-disable */

export default {
  name: "store",
  data() {
    return {
      getDown: false,
      physician: "",
      stores: "",
      access: "",
      user: "",
      status: {
        name: "",
        class: "store_status",
        color: "",
        newStore: false,
      },
      sum: {
        stores: 0,
        physicianes: 0
      }
    };
  },
  mounted() {
    this.getinfo();
    this.http.getUser(window.localStorage.getItem("YST_ID")).then( res =>{
        this.user = res;
      });
  },
  methods: {
    
    enter(page, data) {
      this.$router.push({
        name: page,
        params:{
          accesscode:data,
        }
      });
    },

    isShow() {
      this.getDown = !this.getDown;
    },
    getinfo() {

      this.http.getAccess(window.localStorage.getItem("YST_ID")).then(res => {
        this.access = res;
        let sum = 0;
        while (sum < this.access.permissions.length) {
          if (this.access.permissions[sum].type == 2) {
            this.access.Store = this.access.permissions[sum];
            console.log("已拥有店长权限");
            this.http.getStore(this.access.Store.accesscode).then(res => {
              this.stores = res.stores;
              if (this.stores.length === 0) {
                console.log("未开通店铺");
                this.sum.stores = 0;
                this.status.name = "未开通店铺";
                this.status.color = "red";
                this.status.newStore = true;
              } else {
                this.sum.stores = this.stores.length;
                this.status.color = "green";
                this.status.name = "已开通店铺";
                this.status.newStore = true;
              }
              console.log(this.stores);
            });
          }
          sum++;
        }
        console.log(this.access);
      });

      this.http.getUser(this.uuid).then(res => {
        this.user = res;
      });
    }
  }
};
</script>
<style>
.slot {
  /* margin-top: 1.2rem; */
  width: 100%;
}
.gray {
  background: gray;
}
.yd-tab {
  color: black;
}
.store_main_top {
  position: fixed;
  max-width: 750px;
  width: 100%;
  height: 100%;
  background: white;
  font-size: 0.4rem;
  line-height: 2rem;
  text-align: center;
}
.main_top_shadow {
  height: 100%;
  background: #000000ef;
  opacity: 0.5;
}
.store_info {
  height: auto;
  padding: 0 0.2rem;
  margin-bottom: 0.1rem;
  background: white;
}
.store_info p {
  float: left;
  font-size: 0.36rem;
  line-height: 1rem;
  margin: 0 0.2rem;
}
.store_info span {
  float: left;
  font-size: 0.3rem;
  line-height: 0.5rem;
  margin: 0.25rem 0;
  padding: 0 0.2rem;
  background: darkkhaki;
  border-radius: 0.2rem;
}
.store_info img {
  float: left;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
.store_sum {
  display: flex;
  height: 1.2rem;
  width: 100%;
  background: white;
}
.store_sum div {
  flex: 1;
  font-size: 0.32rem;
  text-align: center;
  justify-content: center;
  font-weight: 100;
}
.store_sum p {
  line-height: 0.8rem;
}
.store_status h2 {
  margin: 0.1rem 0;
  border-left: 0.1rem green solid;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
.store_status p {
  margin: 0.1rem 0;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
.store_status span{
  font-size: 0.40rem;
  font-weight: 100;
}
.red {
  border-left: 0.1rem red solid;
}
.green {
  border-left: 0.1rem green solid;
}
</style>