<template>
  <div class="myphysician_main">
    <yd-navbar slot="navbar"
               title="我的技师">
      <router-link to="/store"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
        <div class="myphysician_content">
      <div class="myphysician_content_li"
           v-for="(item,index) in physicianes.stores"
           :key="item.id">
        <h4>?????{{item.name}}</h4>
        <p>{{item.uuid}}</p>
        <p>{{index}}</p>
        <p>??:{{item.address}}</p>
        <p>????:{{item.createTime}}</p>
        <yd-button class="content_li_button clearfix"
                   @click.native="deleteStore(item.uuid)"
                   type="danger">删除技师</yd-button>
        <yd-button class="myphy_li_button clearfix"
                   type="primary">修改信息</yd-button>
      </div>
      <div class="myphysician_add">
<yd-button size="large" type="hollow">添加技师</yd-button>
{{store}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /* eslint-disable */ 
  data() {
    return {
      accesscode: this.$route.params.accesscode,
      store:'',
      physicianes: ""
    };
  },
  mounted(){
        this.http.getStore(this.accesscode).then(res => {
      this.store = res.stores;
      let sum = 0;
      while(sum < this.store.length){
        this.http.getPhysician(this.store[sum].uuid).then( res =>{
          if(res.physicians.length){
            let sum2 = 0;
            while(sum2>res.physicians.length){

              sum++;
            }
          }
        })
        sum++;
      }
    });
  }
};
</script>
<style>
.myphysician_content_li {
  height: auto;
  padding: 0.2rem;
  border: 1px black solid;
  margin: 0.2rem 0;
}
.myphy_li_button {
  left: 60%;
  margin-right: 0.2rem;
}

</style>