<template>
  <div class="physician_main"
       :class='getDown?"physician_main gray":"physician_main"'>
    <yd-layout>
      <yd-navbar slot="navbar"
                 title="技师页面">
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
           class="physician_main_top"
           @click="enter('store')"
           v-show="getDown">我是店长
        <div class="main_top_shadow"></div>
      </div>
    </yd-layout>
    <div class="physician_info clearfix">
      <img src="~assets/images/th.jpg"
           alt="">
      <p>{{user.name}}</p>
      <span>金牌技师</span>
    </div>
    <div class="physician_sum clearfix">
      <div @click="enter()">
        <span>我的预约</span>
        <p>0</p>
      </div>
      <div>
        <span>我的病人</span>
        <p>0</p>
      </div>
      <div>
        <span>我的订单</span>
        <p>0</p>
      </div>
    </div>
    <div class="physician_content clearfix">
      <yd-tab v-model="tab2"
              :callback="fn"
              :prevent-default="false"
              :item-click="itemClick">
        <yd-tab-panel v-for="item in items"
                      :key="item.id"
                      :label="item.label">
          <div class="phy_content_main"
               @click="enter('AddDiagnosis')">{{item.content}}</div>
        </yd-tab-panel>
      </yd-tab>
    </div>
  </div>

</template>
<script>
/* eslint-disable */

export default {
  name: "physician",
  data() {
    return {
      tab2: 0,
      items: [
        { label: "预约客户", content: "aaaaaaaaaaa" },
        { label: "客户反馈", content: "bbbbbbbbbbb" }
      ],
      getDown: false,
      physician: "",
      store: "",
      access: "",
      user: "",
      sum: ""
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    enter(page,data) {
      this.$router.push({
        name: page,
        parmas: data,
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
          if (this.access.permissions[sum].type == 1) {
            this.access.Physician = this.access.permissions[sum];
            console.log("已拥有技师权限");
            this.http.getUser(this.access.Physician.user).then(res => {
              this.user = res;
            });
          }
          sum++;
        }
        console.log(this.access);
      });
      this.http.getUser(this.uuid).then(res => {
        this.user = res;
      });
    },
    fn(label, key) {
      console.log(label, key);
    },
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
        this.items[key].content =
          "新内容【key:" + key + "】新内容_" + new Date().getTime();
      }, 100);
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
.physician_main_top {
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
.physician_info {
  height: auto;
  padding: 0 0.2rem;
  margin-bottom: 0.1rem;
  background: white;
}
.physician_info p {
  float: left;
  font-size: 0.36rem;
  line-height: 1rem;
  margin: 0 0.2rem;
}
.physician_info span {
  float: left;
  font-size: 0.3rem;
  line-height: 0.5rem;
  margin: 0.25rem 0;
  padding: 0 0.2rem;
  background: darkkhaki;
  border-radius: 0.2rem;
}
.physician_info img {
  float: left;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
}
.physician_sum {
  display: flex;
  height: 1.2rem;
  width: 100%;
  background: white;
}
.physician_sum div {
  flex: 1;
  font-size: 0.32rem;
  text-align: center;
  justify-content: center;
  font-weight: 100;
}
.physician_sum span {
}
.physician_sum p {
  line-height: 0.8rem;
}
.phy_content_main {
  height: 2rem;
  width: 100%;
  padding: 0.2rem;
  border: 1px #000 solid;
  margin-top: 0.1rem;
}
</style>