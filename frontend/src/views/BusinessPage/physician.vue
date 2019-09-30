<template>
  <yd-layout>
    <yd-navbar slot="navbar"
               title="预约店铺技师">
      <router-link to="/two"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="physician_main">
    <div class="physicians clearfix" v-for="(phy,index) in physicians" :key="phy.id">
    <h2>技师姓名:{{phy.name}}</h2>
    <p>{{phy.phone}}</p>
    <yd-button type="primary" @click.native="enter('reservation',Access[index],index)">选择技师</yd-button>
    </div>
    </div>
  </yd-layout>
</template>
<script>
/* eslint-disable */
export default {
  name: "physicianSelect",
  data() {
    return {
      info: this.$route.params,
      Access:'sds',
      text2:'',
      physicians:new Array(),
    };
  },
  mounted() {
    //查询店铺的所有权限关系
    var sum = 0;
    var sum2 = 0;
    var _this = this;
    let access = "";
    this.http.getPhysician(this.info.store.uuid)
     .then(res => {
        this.Access = res.physicians;
        while (sum < this.Access.length) {
           //通过技师权限码获取技师uuid
           this.http.getUser_access(this.Access[sum].user)
           .then(res => {
               this.http.getUser(res.user)
               .then( res =>{
                this.physicians.push(res);
                console.log(res,sum2++);
               })
            });
            sum++;
         }
       });
  },
  methods: {
      enter(page,access,index){
          this.$router.push({
              name:page,
              params:
              {
                  access:access, //  技师权限码,所在的店铺uuid
                  physician:this.physicians[index], //技师信息
                  store : this.info.store, //店铺信息
              }
          })
      },
  }
};
</script>
<style>
.physicians{
    height: 2rem;
}
</style>