// 首页底栏按钮组件
<template>
  <yd-tabbar v-bind="style">
    <yd-tabbar-item @click.native="Selector(1)"
                    :active="isHome.value"
                    :style="bg(isHome.value)"
                    title="首页">
      <yd-icon name="home"
               custom
               slot="icon"
               size="25px"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item @click.native="Selector(2)"
                    :active="isShop.value"
                    :style="bg(isShop.value)"
                    title="搜索">
      <yd-icon name="dianpu"
               custom
               slot="icon"
               size="25px"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item @click.native="Selector(3)"
                    :active="isCenter.value"
                    :style="bg(isCenter.value)"
                    title="技师">
      <yd-icon name="ucenter-outline"
               slot="icon"
               size="25px"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item @click.native="Selector(4)"
                    :active="isLogin.value"
                    :style="bg(isLogin.value)"
                    :dot="false"
                    title="个人中心">
      <yd-icon name="customer"
               custom
               slot="icon"
               size="25px"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      style: {
        activeColor: "#000",
        fontsize: ".26rem"
      },
      activebg: {
        background: "darkgray"
      },
      tab:'homeCentent',
      oldPage: 1,
      color: "black", //选中字体颜色
      bgcolor: "darkgray", //选中背景颜色
      isHome: {
        name: "isHome",
        value: true,
        count: 1
      },
      isShop: {
        name: "isShop",
        value: false,
        count: 2
      },
      isCenter: {
        name: "isCenter",
        value: false,
        count: 3
      },
      isLogin: {
        name: "isLogin",
        value: false,
        count: 4
      },
      isLogin2: {
        name: "isLogin2",
        value: false,
        count: 5
      },
      isactiveColor: "black"
    };
  },
  computed: {
    currentTabComponent: function() {
      /* eslint-disable */

      console.log(this);
      console.log(this.tab);
      return this.tab;
    }
  },
  methods: {
    Selector(x) {
      var _this = this;
      /* eslint-disable */
      // console.log(_this);
      switch (x) {
        case 1:
          _this.isHome.value = true;
          _this.isShop.value = false;
          _this.isCenter.value = false;
          _this.isLogin.value = false;
          _this.tab = "homeCentent";
          _this.$router.push("/one");
          _this.$emit("childMsg", "首");
          break;
        case 2:
          _this.isHome.value = false;
          _this.isShop.value = true;
          _this.isCenter.value = false;
          _this.isLogin.value = false;
          _this.tab = "shop";
          _this.$router.push("/two");
          _this.$emit("childMsg", "搜索");
          break;
        case 3:
          _this.isHome.value = false;
          _this.isShop.value = false;
          _this.isCenter.value = true;
          _this.isLogin.value = false;
          _this.tab = "center";
          _this.$router.push("/physician");
          _this.$emit("childMsg", "技师/店长");
          break;
        case 4:
          _this.isHome.value = false;
          _this.isShop.value = false;
          _this.isCenter.value = false;
          _this.isLogin.value = true;
          _this.tab = "login";
          _this.$router.push("/Center");
          _this.$emit("childMsg", "用户中心");
          break;
        case 5:
          _this.isHome.value = false;
          _this.isShop.value = false;
          _this.isCenter.value = false;
          _this.isLogin.value = false;
          _this.tab = "login2";
          _this.$router.push("/login");
          _this.$emit("childMsg", "回到登陆界面");
          break;
        default:
          break;
      }
    },
    bg(x) {
      var _this = this;
      if (x) {
        return _this.activebg;
      }
    }
  }
};
</script>
<style>
.icon-custom-home:before {
  content: "\e7d4";
}
.icon-custom-dianpu:before {
  content: "\e6ef";
}
.icon-custom-customer:before {
  content: "\e736";
}

.yd-tabbar {
  padding: 0 !important;
}
.yd-tabbar a {
  height: 1rem;
}
</style>
