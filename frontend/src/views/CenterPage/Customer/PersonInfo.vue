<template>
  <div class="personInfo">
    <yd-navbar title="个人信息">
      <router-link to="/Center"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="personInfo_main">
      <div class="personInfo_base">
          <yd-flexbox>
            <yd-flexbox-item  class="personInfo_base_top">个人资料</yd-flexbox-item>
          </yd-flexbox>
          <yd-flexbox direction="vertical" class="personInfo_base_info clearfix">
            <yd-flexbox-item class="personInfo_base_img clearfix"><h4>头像</h4><img src="~assets/images/th.jpg" alt=""></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">姓名<p>{{Customer.name}}</p></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">性别<p>{{Customer.gender}}</p></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">民族<p>{{Customer.ethnic}}</p></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">工作<p>{{Customer.job}}</p></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">uuid<p>{{Customer.uuid}}</p></yd-flexbox-item> 
            <yd-flexbox-item class="personInfo_base_infos">QQ<p>{{Customer.qq}}</p></yd-flexbox-item>
            <yd-flexbox-item class="personInfo_base_infos">电话<p>{{Customer.phone}}</p></yd-flexbox-item>                
          </yd-flexbox>
          <yd-flexbox>
            <yd-flexbox-item  class="personInfo_exit">
                <yd-button size="large" bgcolor="#000" color="#FFF">退出登录</yd-button>
            </yd-flexbox-item>
          </yd-flexbox>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      Customer: '',
    };
  },
  mounted() {
    this.http
      .getUser(window.localStorage.getItem("YST_ID"))
      .then(res => {
        console.log("收到：", res);
        this.Customer = res
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
.personInfo_main{
    height: 100%;
    background: white;
}
.personInfo_base_top{
    height: 1rem;
    border-bottom: 2px black solid;
    font-size: 0.38rem;
    line-height: 1rem;
}
.personInfo_base_info{
    line-height: 1.2rem;
    height: 10rem;
}
.personInfo_base_info div{
    height: 0.59rem;
    border-bottom: 1px #bbb solid;
}
.personInfo_base_img{
    padding: 0 0.4rem;
}
.personInfo_base_img h4{
    float:left;
    font-size: 0.36rem;
    font-weight: 200;
}
.personInfo_base_img img{
    float:right;
    width: 1.2rem;
    height: auto;
    border-radius: 50%;

}
.personInfo_base_infos{
    padding: 0 0.5rem 0 0.4rem;
    float:left;
    font-size: 0.36rem;
    font-weight: 200;
}
.personInfo_base_infos p{
    float:right;
    font-size: 0.30rem;
    font-weight: 200;
}
</style>