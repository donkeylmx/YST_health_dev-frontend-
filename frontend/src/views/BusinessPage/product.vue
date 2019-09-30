//业务项目，服务简介，选择技师，跳转到技师相关的界面
<template>
  <yd-layout>
    <div class="main_business">
      <div class="main_img">
        <img src=""
             alt=""
             center>详细介绍的图片会放在这里
      </div>
    </div>
    <!-- 介绍 -->
    <div class="introduced">
        <h1>养生堂古法艾灸推拿养生馆</h1>
        <p>仅售68元，价值196元五行扶阳罐+刮痧（新客专享），节假日通用！</p>
    </div>
    <!-- 评价 -->
    <div class="main_evaluation clearfix">
      <div class="star">
        <yd-cell-item>
          <yd-rate slot="left"
                   v-model="item.star"
                   size="22px"
                   color="#00FF16"
                   active-color="#ffeb3b"
                   ></yd-rate>
        
        </yd-cell-item>
        <h2>4 分</h2>
      </div>
      <div class="price">
          <h4>200元</h4>
          <h2>166元/套</h2>
          <p>到店有效，预约退款</p>
      </div>
    </div>
    <div class="details">
        <h2>商品详细</h2>
        <ul>
            <li class="clearfix" v-for="detail in product.details" :key="detail.id">
                <h4 class="details_left">{{detail.name}}</h4>
                <h4 class="details_right">{{detail.number}}</h4>
            </li>
        </ul>
    </div>
    <div class="customer_evaluation ">
        <div class="customer_evaluation_ clearfix">
            <h3>用户评价</h3>
            <span>查看全部</span>
        </div>

        <div class="evaluation_info">
            <div class="evaluation_info_account clearfix">
                <img src="~assets/images/touxiang.jpg" alt="">
                <h2>昵称</h2>
            </div>
            <div class="evaluation_info_ clearfix">
                <h6>技师:XXX</h6>
                <h6>服务质量:5.0</h6>
                <h6>推荐指数:5.0</h6>
            </div>
            <div class="evaluation_info_message">
                <p>手法专业，就是太疼了٩(๑`н´๑)۶太疼了٩(๑`н´๑)۶太疼太疼太疼太疼太疼太疼了٩(๑`н´๑)۶，给个好评，环境也超级好(✪▽✪)，但是拔罐真的太疼了，第一次按摩疼的好几天不舒服，超级舒服的那种不舒服，第一次拔罐感觉自己需要死两分钟，怕疼的人不要拔罐，虽然对身体好，因为真的太疼了！！！！！
            </p>
                <p>日期</p>
            </div>

        </div>
    </div>
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item class="return_"
                      link="/one"
                      active>
        <yd-icon name="return"
                 custom
                 slot="icon"
                 size="25px"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item class="price"
                      title="合计：166￥"
                      link="#"
                      active>
      </yd-tabbar-item>
      <yd-tabbar-item class="buy"
                      title="预 约"
                      link="#"
                      @click.native="enter('reservation')"
                      font>
      </yd-tabbar-item>
    </yd-tabbar>

  </yd-layout>
</template>

<script>
export default {
  name: 'business',
  data() {
    return {
      item: {
        name: "anmo",
        price: "400.00",
        star: 4,
        engerinner: {}
      },
      product:{
          details:[
              {id:'1',name:'背部刮痧',number:'20分钟'},
              {id:'2',name:'背部拔罐',number:'20分钟'},
          ]
          
      }
    };
  },
  methods: {
    mounted: function() {
      this.$nextTick(function() {}), this.$router.push("/items");
      /* eslint-disable */

      conosle.log("项目页面");
    },
    enter(page){
      console.log('进入技师选择页面');
      this.$router.push('/'+page);
    }
  }
};
</script>


<style>
body{
   background:  #f5f5f5;
}
yd-scrollview:after {
    content: "";
    display: block;
    width: 100%;
    /* height: .5rem; */
}
.yd-cell-item:not(:last-child):after{
    background-image: none;
}
.icon-custom-return:before {
  content: "\e720";
}
.icon-custom-star:before {
  content: "\e609";
}
.yd-rate a.rate-active:after {
  color: #ecc700;
}
.yd-rate a:after {
  color: #ecc700;
}
.item {
  height: 100%;
  width: 100%;
  background: #3e4;
}
.main_business {
  height: 4rem;
  width: 100%;
  background: gray;
  overflow: hidden;
}
.main_img img {
  width: 100%;
}
.introduced{
    height: 2rem;
    padding: 0 0.2rem;
    background: white;
    margin-bottom: 0.2rem;

}
.introduced h1{
    font-size: 0.48rem;
    font-weight: 400;
    line-height: 0.7rem;
}
.introduced p{
    font-size: 0.36rem;
    font-weight: 200;
    line-height: 0.6rem;
    color: #1b1b1b;
}
.main_evaluation {
  height: auto;
  width: 100%;
  background: white;
  margin-bottom: 0.2rem;    
}
.star{
    float: right;
    width: 40%;
    height: 100%;
   /*  box-shadow: 1px 1px 1px 1px; */
    background:white;
}
.star h2{
    font-size: 0.4rem;
    line-height: 0.6rem;
    font-weight: 400;
    text-align: center;
}
.price{
    float: right;
    width: 60% ;
    height: 100%;
    font-size: 0.30rem;
}
.price h4{
    line-height: 0.4rem;
    font-size: 0.36rem;
    font-weight: 200;
    text-align: center;
    text-decoration:line-through;
}
.price h2{
    line-height: 0.8rem;
    font-size: 0.44rem;
    font-weight: 400;
    text-align: center;
    color: rgb(212, 198, 17);
}
.price p{
    line-height: 0.4rem;
    font-size: 0.30rem;
    font-weight: 200;
    text-align: center;
    color: #8a8a8a;
}
.details{
    width: 100%;
    height: auto;
    padding: 0.2rem;
    background: white;
    margin-bottom:0.2rem;
}
.details ul{
    height: auto;
    width: 100%;
    padding: 0.5rem 1.4rem;
}
.details h2{
    font-size: 0.4rem;
    line-height: 1rem;
    text-align: center;
    color:#8a8a8a;
    font-weight: 200;
    margin: 0 2.4rem;
    border-bottom:  2px solid #8a8a8a;
}
.details h4{
    color:#8a8a8a;
    font-size: 0.36rem;
    line-height: 0.8rem;
    text-align: center;
    font-weight: 200;
}
.details_left{
    float: left;
}
.details_right{
    float:right;
}
.customer_evaluation{
    width: 100%;
    height: auto;
    padding: 0 0.2rem;
    background: white;
    margin-bottom: 0.2rem;
} 
.customer_evaluation_{
    height: 1rem;
}
.customer_evaluation h3{
    float:left;
    height: 100%;
    font-size: 0.36rem;
    line-height: 0.8rem;
}
.customer_evaluation span{
    float: right;
    height: 100%;
    color: gray;
    font-size: 0.32rem;
    line-height: 0.8rem;
}
.customer_evaluation_info{
    height: auto;
    width: 100%;
}
.evaluation_info_account{
    height: 1rem;
    width: 100%;
    margin-bottom: 0.2rem;
}
.evaluation_info_account img{
    float: left;
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
    border: 1px black solid;
}
.evaluation_info_account h2{
    padding-left: 0.2rem;
    float: left;
    font-size: 0.32rem;
    line-height: 1rem;
}
.customer_evaluation_{
    margin-top: 0.4rem; 
    height: auto;
    width: 100%;
    background: white;
}
.customer_evaluation h6{
    float:left;
    width: auto;
    padding: 0 0.1rem;
    margin: 0 0.1rem 0.1rem 0rem;
    border: 1px #ecc700 solid;
    border-radius: 0.2rem;
    font-size: 0.28rem;
    line-height: 0.4rem;
    color: #8b8b8b;

}
.evaluation_info_message{
    height: auto;
    width: 100%;
}
.evaluation_info_message p{
    font-size: 0.28rem;
    line-height: 0.4rem;
    font-weight: 200;
    letter-spacing: 0.01rem;
    word-wrap: break-word;
    justify-content:space-between;
    text-align:justify;
}
.yd-tabbar a {
  height: 1rem;
}
.return_ {
  color: black !important;
}
.price {
  color: black !important;
}
.buy {
  flex: 2;
  color: black !important;
  font-size: 0.48rem;
  background: #c1bb62;
  margin: 0.06rem;
  border-radius: 0.05rem;
}

/* #main{
        height: 6rem;
        width: 100%;
        background: #ee3;
    } */
</style>