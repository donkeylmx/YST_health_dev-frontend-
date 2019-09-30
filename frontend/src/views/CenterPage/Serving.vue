<!-- 用户服务记录 -->
<template>
  <div class="serving_main">
    <yd-navbar title="服务记录">
      <router-link to="/Center"
                   slot="left">
        <yd-navbar-back-icon />
      </router-link>
    </yd-navbar>
    <div class="serving_main_tab">
      <yd-tab v-model="tab"
              :callback="Item"
              :prevent-default="false"
              :item-click="itemClick">
        <yd-tab-panel v-for="item in items"
                      :key=item.id
                      :label="item.label">{{item.content}}</yd-tab-panel>
      </yd-tab>
    </div>
  </div>
</template>
<script>
/* eslint-disable */ 
export default {
  data() {
    return {
        tab: 0,
        items:[
                {label: '全部', content: ''},
                {label: '未完成订单', content: 'bbbbbbbbbbb'},
                {label: '已完成订单', content: 'ccccccccccc'},
                {label: '待评价', content: 'ddddddddddd'}
            ],
        order:'',
    };
  },
  mounted() {
      this.http.getUserServe(window.localStorage.getItem('YST_ID'))
      .then(res =>{
          this.order = res;
          console.log(this.order);
          this.itemClick(0);
      });
  },
  methods:{
        Item(label, key) {
                console.log(label, key);
            },
        itemClick(key) {
            this.$dialog.loading.open('记录加载中');
            setTimeout(() => {
                this.tab = key;
                this.$dialog.loading.close();
                if(key == 0 ){
                    this.items[key].content = this.order;
                }
            }, 300);
        },
        getOrder(){
            let sum = 0;

        }

  }
};
</script>
<style >
</style>