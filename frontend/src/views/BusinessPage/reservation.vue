<template>
  <div class="reservation_main">
    <yd-navbar title="请选择预约时间段">
      <router-link :to="{name:'physicianSelect',params:{
        store:this.store,
        access:this.access,
      }}"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>

    <yd-tab horizontal-scroll>
      <yd-tab-panel :label="items[index].day+items[index].xinqi"
                    class="reservation_Select clearfix"
                    v-for="(day,index) in items"
                    :key="day.id">
        <div class="reservation_timeSelect "
             v-for="(item,index) in timeSelect"
             :key="item.id"
             :class="{gray:(!timeSelect[index].status&&day.day == items[0].day)}"
             @click="enter('purchase',timeSelect[index],day.day,items[0].day)">
          <p>{{item.time}}</p>
        </div>
      </yd-tab-panel>
    </yd-tab>
  </div>

</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      physician:this.$route.params.physician,//技师信息
      access: this.$route.params.access, // 技师权限码,店铺uuid
      store: this.$route.params.store, //店铺信息
      items: {},
      time: "",
      timeSelect: this.api.getTimeSelect()
    };
  },
  mounted() {
    this.time = new Date();
    this.time = this.time.toString().split(" ");
    this.items = this.api.getItem(this.time);
  },
  methods: {
    enter(page, data, news, old) {
      if (data.status || !(news == old))
        this.$router.push({
          name: page,
          //将所有数据传至确认页面
          params: {
            userAccount: window.localStorage.getItem("YST_account"),
            userID:window.localStorage.getItem("YST_ID"),
            store: this.store,
            product: "",
            access:this.access,
            physician:this.physician,
            time: {
              day: news,
              hsf: data.time
            }
          }
        });
      else {
        this.$dialog.toast({
          mes: "当前时间段无法预约",
          icon: "error",
          timeout: 1000
        });
      }
    },
    getItme(time) {
      sum = 0;
    }
  }
};
</script>
<style>
.reservation_Select {
  padding: 0 auto;
}
.reservation_timeSelect {
  float: left;
  height: 1.6rem;
  width: 22%;
  margin: 0.11rem;
  padding: 0.1rem;
  border-radius: 0.2rem;
  border: 1px green solid;
}
.reservation_timeSelect p {
  font-size: 0.24rem;
  text-align: center;
  line-height: 1.38rem;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.gray {
  border: 1px gray solid;
  background: gray;
}
</style>