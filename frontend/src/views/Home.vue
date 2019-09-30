<!--Home 为用户 登陆后 的主页 下面有多个嵌套路由-->
<template>
<!-- 首页进入动画 -->
<transition name="">
<!-- enterHome -->
 <yd-layout style="height: 100%;" class="">
   <!-- 顶栏 -->
    <!-- <yd-navbar v-show="(nowPage != 4)" slot="navbar" title="" class="tabbar">
      <router-link to="#"
                   slot="left">
        <a class="logo"></a>
      </router-link>

      <router-link to="#"
                   slot="right">
        <yd-icon name="search"
                 custom></yd-icon>
      </router-link>
    </yd-navbar> -->
    <!-- 子路由内容 -->
    <router-view/>

    <!--底栏 -- homeTab页面-->
    <yd-tabbar slot="tabbar"> 
        <homeTab v-on:childMsg='searchDiaplay'>
        </homeTab>
    </yd-tabbar>

</yd-layout>

</transition>
</template>

<script type="text/babel">
import homeTab from '@/components/Home/homeTab.vue'
// import searchTab from '@/components/Home/searchTab.vue'
export default {
  /* eslint-disable */ 
  data(){
    return{
      nowPage:1,  
      location : '',
    }
  },
  name:'YST_Home',
  components: {
    homeTab,
  },

  mounted(){
     /*页面挂载获取保存的cookie值，渲染到页面上*/
      /* eslint-disable */
            let id = this.$cookie.get('YST_ID')
            /*如果cookie不存在，则跳转到登录页*/
            if( id == ''){
                this.$router.push('/login')
            }


  },
  methods:{
    mounted: function () {
    this.$nextTick(function () {
   
    }),
    this.$router.push('/one'); 
  },
  searchDiaplay:function(msg){
    var _this = this;
    _this.nowPage = msg;
    // eslint-disable-next-line no-console
    console.log('现在在:'+_this.nowPage+'页面');
  }
  }

}
</script>
<style>
.enterHome-enter-active, .enterHome-leave-active {
  transition: opacity .5s;
}
.enterHome-enter, .enterHome-leave-to  {
  opacity: 0;
}
.tabbar{
  max-width: 750px;
}
.logo {
  height: 100%;
  width: 100%;
  background: url("~assets/images/logo.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
