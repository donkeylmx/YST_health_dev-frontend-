// 这是app首页的展示页面，主要展示第一页的内容，关于App的介绍，以及一些主要的活动，广告，商铺信息。主要是广告。
// 仿照enjoy的首页
<template>
  <div class="main">
    <!-- 搜索框 -->
    <!-- <input class="clearfix"
           type="serch"
           id="serch"
           @focus=bc()
           @blur=lk()
           placeholder="夏天吃什么对皮肤好？"> -->
    <!-- 首页卡片 -->
    <div class="slot clearfix">
      <div class="topMessage clearfix">
        <div class="topMessage_top clearfix">
        <h2>
          今日主推
        </h2>
        <span>{{tops.length}}/</span>
        </div>
        <div class="topMessage_ ">
          <p>每日好物、限时福利、精选指南</p>
        </div>
      </div>
      <div class="topSlot">
        <div class="topSlot_ul clearfix"
            id="leftLength"
            ref="leftLength"          
            @touchmove="topSlotLeft()">
          <div class="topSlot_li" v-for="top in tops"
              :key="top.id">
          <div class="topSlot_img">
            <img src="~assets/images/motherday.jpg"
                 alt="...">
          </div>
              <div class="topSlot_message">
                <span>到店消费</span>
                <h2>{{top.message1}}</h2>
                <p>{{top.message2}}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="bottomMessage">
        <h2>会挑，会选，有好物</h2>
      </div>
      <!-- 滚动卡片 -->
      <div class="scorllSlot">
        <div class="content"
            id="content">
          <router-link to="/product">
            <div class="content_message" v-for="(item, index) in items"
                :key="item.id"
                @click="page_enter()">
              <h4>标题 {{ item.message }} </h4>
              {{ index }} - {{ item.img }}
              <img src=''
                   center>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    /* eslint-disable */
export default {
  components: {},
  name:'Home',
  data() {
    return {
      topSlot_scorllLeft: "",
      tops: [
        {
          id: 1,
          message1: "Mother`s Day | 好礼送给最爱你的人",
          message2: '超值闪购限时奉上，更有多种优惠等你来抢！',
          img: "~assets/images/motherday.jpg",
          link: "",
          help: "这里展示当前最具人气的商品"
        },
        {
          id: 2,
          message1: "Mother`s Day | 好礼送给最爱你的人",
          message2: '超值闪购限时奉上，更有多种优惠等你来抢！',
          img: "",
          link: "",
          help: "这里展示当前最具人气的商品"
        },
        {
          id: 3,
          message1: "Mother`s Day | 好礼送给最爱你的人",
          message2: '超值闪购限时奉上，更有多种优惠等你来抢！',
          img: "",
          link: "",
          help: "这里展示当前最具人气的商品"
        },
        {
          id: 4,
          message1: "Mother`s Day | 好礼送给最爱你的人",
          message2: '超值闪购限时奉上，更有多种优惠等你来抢！',
          img: "",
          link: "",
          help: "这里展示当前最具人气的商品"
        }
      ],
      items: [
        { message: "示例1", img: "./assets/images/item1.jpg" },
        { message: "示例2", img: "~assets/images/item2.jpg" },
        { message: "示例3", img: "~assets/images/item2.jpg" },
        { message: "示例4", img: "~assets/images/item2.jpg" }
      ]
    };
  },
  
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.topSlotLeft);
    console.log(this.$store.state.user_ID)
    // var _this = this;
    // _this.axios
    //   .post("api/user/account?account=admin", {
    //   })
    //   .then(function(response) {
    //     console.log(response.data);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  computed:{
    user:function(){
      return this.$store.stats;
      console.log(user)
    }
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
    },
    /* eslint-disable */
    topSlotLeft() {
      var _this = this;
      document.getElementById("leftLength").scrollLeft += 20;
      _this.topSlot_scorllLeft = document.getElementById("leftLength").scroll;
      console.log(_this.$refs);
    },
    onScroll(e) {
      let xx = _this.$refs.leftLength;
      // console.log(xx);
    },
    bc() {
      //搜索框取得焦点时触发的事件
      document.getElementById("serch").style.width = "6.50rem";
      document.getElementById("serch").style.height = "1rem";
      console.log("点击搜索框");
    },
    lk() {
      //搜索框失去焦点时触发的事件
      document.getElementById("serch").style.width = "4.5rem";
      document.getElementById("serch").style.height = "0.7rem";
      console.log("离开搜索框");
    },
    page_enter() {
      //点击内容进入页面
      console.log("进入内容页");
    }
  }
};
</script>

<style>
.main {
  height: 100%;
  position: relative;
}
.logo {
  height: 100%;
  width: 100%;
  background: url("~assets/images/logo.jpg") no-repeat;
  background-size: 100% 100%;
}
.slot {
  /* padding-top: 1.2rem; */ /*搜索栏高度 */
  width: 100%;
  height: auto;
  overflow: hidden;
}
.topMessage {
  padding: 0 0.2rem !important;
  height: auto;
  width: 100%;
  max-width: 13.2rem;
  background: sandybrown !important;
  position: fixed;
  height: 1.2rem !important;
}
.topMessage_top h2 {
  float:left !important;
  font-size: 0.54rem !important;
  line-height: 0.8rem !important;
  font-weight: 100 !important;
}
.topMessage_top span {
  float:right !important;
  font-size: 0.4rem !important;
  line-height: 0.8rem !important;
  font-weight: 100;
}
.topSlot_message span{
  color: red;
}
.topSlot_message h2{
  font-size: 0.36rem !important;
  text-align: justify;
  font-weight: 200;
}
.topSlot_message p{
  font-size: 0.24rem !important;
  color: black;
}
.topMessage_{
  width: 100%;
  height: auto;
}
.topMessage_ p{
  font-size: 0.28rem !important;
  font-weight: 100;
}
.bottomMessage {
  width: 100%;
  height: 0.4rem;
  background: white;
}
.bottomMessage h2 {
  font-size: 0.36rem !important;
  line-height: 0.4rem !important;
  text-align: center;
  font-weight: 100;
  color: rgba(54, 54, 54, 0.993);
}
.topSlot {
  width: 100%;
  height: auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  text-align: justify;
}
.topSlot_ul {
  margin-top: 1.2rem;
  width: 27.9rem;
  background: white;
}
.topSlot_li {
  float: left;
  margin: 0.2rem 0 0.2rem 0.2rem;
  width: 6.6rem;
  height: auto;
  border-radius: 0.1rem;
  background: white;
}
.topSlot_img img{
  width: 100%;
  height: auto;
}
.scorllSlot {
  width: 100%;
  height: auto;
  background: white;
}
.content {
  padding: 0.2rem;
  height: 30%;
  width: 100%;
  margin: 0 auto;

  /* -moz-box-shadow: 0px 0px 5px #e4e4e4;
  -webkit-box-shadow: 0px 0px 5px #e4e4e4;
  box-shadow: 0px 0px 5px #e4e4e4; */
}
.content_message {
  width: 100%;
  height: 4.6rem;
  background: white;
}

#serch {
  position: fixed;
  left: 0.1rem;
  top: 10%;
  height: 0.3rem;
  width: 2.5rem;
  border-radius: 0.05rem;
  font-size: 0.15rem !important;
  transition: 0.3s;
  background-color: #2c97d473;
  border: none;
}
</style>
