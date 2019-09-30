
// 这是app首页的店铺首页，主要展示店铺的服务内容
<template>
  <div class="store_main">
    <div class="store_top clearfix">
      <h2>
        
      </h2>
      <yd-search :result="result"
                 fullpage
                 v-model="searchValue"
                 :item-click="itemClickHandler"
                 :on-submit="submitHandler"></yd-search>
    </div>
    <yd-tab v-model="tab2"
            :callback="fn"
            :prevent-default="false"
            :item-click="itemClick">
      <yd-tab-panel v-for="item in items"
                    :label="item.label"
                    :key="item.id">
        <div class="store_content">
          <div class="store_content_li"
               v-for="(item,index) in items[tab2].content"
               @click="enter('physicianSelect',index)"
               :key="item.distance">
            <h4>{{item.name}}</h4>
            <p>地址:{{item.address}}</p>
            <p>位置信息:{{item.latitude}}</p>
            <p>注册时间:{{item.createTime}}</p>
            <p class="store_content_distance">{{item.distance}}</p>
          </div>
        </div>
      </yd-tab-panel>
    </yd-tab>

  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "two",
  data() {
    return {
      search_clicked: true,
      user: "",
      searchValue: "",
      result: [],
      allStore: "",
      allstore2: "",
      location: {
        longitude: "-1",
        latitude: "-1"
      },
      allstore_re:[],
      tab2: 0,
      items: [
        { label: "店铺信息", content: "aaa" },
        { label: "离我最近", content: "bbb" }
      ]
    };
  },
  mounted() {
    this.http.getAllStore().then(res => {
      this.allStore = res;
      this.itemClick(this.tab2);
      this.http
        .getlatitude(this.location.longitude, this.location.latitude)
        .then(res => {
          this.allstore2 = res;
        });
    });
    //console.log(this.allStore);
    //GPS定位信息
    let _this = this;
    this.getLocation({
      success: res => {
        console.log("current location is:" + res);
        _this.location = res;
      },
      error: res => {
        console.log("failed to get location:" + res);
        _this.location = {
          longitude: "120.15230181673352",
          latitude: "30.333012949943917"
        };
      }
    });
  },
  methods: {
    // 排序

    getLocation(callback) {
      console.log("执行函数");
      if (navigator.geolocation) {
        let options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        window.navigator.geolocation.getCurrentPosition(
          res => {
            console.log("get location successful:" + res);
            this.location.longitude = res.coords.longitude;
            this.location.latitude = res.coords.latitude;
            console.log(this.location);
            callback.success(this.location);
            let location = {};
            location.longitude = res.coords.longitude;
            location.latitude = res.coords.latitude;
            console.log(location);
            callback.success(location);
          },
          res => {
            console.log("get location failed:" + res);
            callback.error(res);
          },
          options
        );
      } else {
        callback.error("Geo location not supported.");
      }
    },
    enter(page, sum) {
      this.$router.push({
        name: "physicianSelect",
        params: {
          store: this.allStore.stores[sum]
        }
      });
    },
    getResult(val) {
      if (!val) return [];
      return ["Apple", "Ahpla", "AAAAAA", "AA"].filter(value =>
        new RegExp(val, "i").test(value)
      );
    },
    itemClickHandler(item) {
      console.log("快捷搜索");
      this.http.getStoreName(item).then(res => {
        this.allStore = res;
      });
      this.$dialog.toast({ mes: `搜索：${item}` });
    },
    submitHandler(value) {
      console.log("模糊搜索");
      this.http.getStoreName(value).then(res => {
        this.allStore = res;
      });
      this.$dialog.toast({ mes: `搜索：${value}` });
    },
    search() {},
    fn(label, key) {
      console.log(label, key);
    },
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      this.http
        .getlatitude(this.location.longitude, this.location.latitude)
        .then(res => {
          this.allstore2 = res;
        });
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
        this.items[0].content = this.allStore.stores;
        this.items[1].content = this.allstore2.stores;
      }, 200);
    }
  },
  watch: {
    searchValue(val) {
      this.result = this.getResult(val);
    }
  }
};
</script>

<style>
.store_top {
  height: 1.2rem;
  width: 100%;
  padding: 0 0.2rem;
}
.store_top h2 {
  float: left;
  font-size: 0.48rem;
  line-height: 1.2rem;
}
.store_top i {
  float: right;
  font-size: 0.48rem;
  line-height: 1.2rem;
}
.store_content_li {
  height: 2rem;
  padding: 0.2rem;
  border: 1px black solid;
  margin: 0.2rem 0;
}
.store_content_distance{
  float: right;
  color: red;
}
</style>