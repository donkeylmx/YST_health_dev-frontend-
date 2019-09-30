<template>
  <div class="Center_main">
    <!-- <yd-flexbox>
      <yd-flexbox-item class="Center_main_top">
        <h2>
          个人中心
        </h2>
      </yd-flexbox-item>
    </yd-flexbox> -->
    <div class="Center_main_slot">
      <div class="Center_main_base">
        <div class="Center_main_info">
          <div @click='enter("PersonInfo")'>
            <div class="Center_main_touxiang">
              <img src="~assets/images/th.jpg"
                   alt="">
            </div>
            <div class="Center_main_name">
              <h4>{{name}}</h4>
            </div>
          </div>
          <yd-flexbox class="Center_main_select">
            <yd-flexbox-item @click.native="enter('Access')">
              <span>
                <yd-icon name="root"
                         custom
                         slot="icon"
                         size="0.5rem"></yd-icon>
              </span>
              <h2>我的权限</h2>
            </yd-flexbox-item>
            <yd-flexbox-item>
              <span>
                <yd-icon name="customer"
                         custom
                         slot="icon"
                         size="0.5rem"></yd-icon>
              </span>
              <h2>我的权限</h2>
            </yd-flexbox-item>
            <yd-flexbox-item @click.native="enter('Diagnosis')">
              <span>
                <yd-icon name="customer"
                         custom
                         slot="icon"
                         size="0.5rem"></yd-icon>
              </span>
              <h2>诊断记录</h2>
            </yd-flexbox-item>
            <yd-flexbox-item @click.native="enter('Items')">
              <span>
                <yd-icon name="order"
                         custom
                         slot="icon"
                         size="0.5rem"></yd-icon>
              </span>
              <h2>订单记录</h2>
            </yd-flexbox-item>
          </yd-flexbox>
        </div>
        <!-- <yd-flexbox-item class="personInfo_base_infos">
          <yd-tab v-model="tab"
                  :callback="fn"
                  :prevent-default="false"
                  :item-click="itemClick">
            <yd-tab-panel v-for="item in items"
                          :label="item.label"
                          :key="item.id">{{item.content}}</yd-tab-panel>
          </yd-tab>
        </yd-flexbox-item> -->

        <yd-flexbox direction="vertical"
                    class="Center_main_physician clearfix">
          <yd-flexbox-item class="center_top">技师模块</yd-flexbox-item>
          <yd-flexbox-item class="physician_addDiagnosis clearfix">
            <p>新增诊断记录</p>
            <div class="addDiagnosis_account clearfix">
              <yd-cell-group>
                <yd-cell-item>
                  <span slot="left"></span>
                  <yd-input slot="right"
                            v-model="input"
                            required
                            :show-success-icon="false"
                            :show-error-icon="false"
                            regex="mobile"
                            placeholder="请输入客户账号"></yd-input>
                </yd-cell-item>
              </yd-cell-group>
              <h4>{{customer.message}}</h4>
              <button type="button"
                      @click="addDiagnosis(input)">添加</button>
            </div>
            <div>{{yuyue}}</div>
          </yd-flexbox-item>
        </yd-flexbox>
      </div>
      <div class="">
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      tab:'',
      yuyue:'',
      user: "",
      uuid: window.localStorage.getItem("YST_ID"),
      name: window.localStorage.getItem("YST_NAME"),
      input: "",
      customer: {
        Cuuid: ""
      },
      items: [
        { label: "正在预约", content: "aaaaaaaa" },
        { label: "已完成", content: "bbbbbbbbbbb" },
      ]
    };
  },
  mounted() {
    this.getAyuyue();
  },
  methods: {
    enter(page,data) {
      this.$router.push({
        name: page,
        params: data,
      });
    },
    getAyuyue(){
      this.http.getAllYuyue().then( res =>{
        this.yuyue = res;
      })
    },
    addDiagnosis(data) {
      console.log(this.input);
      this.http.getUserAccount(data).then(res => {
        console.log("查询结果：", res);
        this.customer = res;
      });
      this.customer.Cuuid = this.uuid;
      this.enter("AddDiagnosis", this.customer);
      // this.eee();
    },
    eee() {
      this.customer.Cuuid = this.uuid;
      this.enter("AddDiagnosis", this.customer);
    },
    fn(label, key) {
      console.log(label, key);
    },
    itemClick(key) {
      this.$dialog.loading.open("数据加载中");
      setTimeout(() => {
        this.tab2 = key;
        this.$dialog.loading.close();
        this.items[key].content =
          "新内容【key:" + key + "】新内容_" + new Date().getTime();
      }, 1000);
    }
  }
};
</script>
<style>
.Center_main {
  height: auto;
  overflow: hidden;
  position: relative;
}
.Center_main_top {
  padding: 0 0.2rem !important;
  height: auto;
  background: darkseagreen !important;
  height: 1.2rem;
}
.Center_main_top h2 {
  text-align: center;
  font-size: 0.54rem !important;
  line-height: 1.2rem !important;
  font-weight: 100 !important;
}
.Center_main_top span {
  float: right !important;
  font-size: 0.4rem !important;
  line-height: 0.8rem !important;
  font-weight: 100;
}
.Center_main_slot {
  width: 100%;
  height: auto;
}
.Center_main_touxiang {
  width: 100%;
  height: 2.8rem;
}
.Center_main_base img {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background: darkblue;
}
.Center_main_info {
  padding-top: 0.4rem;
  margin: 0 0 0.2rem 0;
  border-radius: 0.2rem;
  background: white;
}
.Center_main_name {
  width: 100%;
  height: 0.5rem;
  font-size: 0.4rem;
  line-height: 0.5rem;
  text-align: center;
}
.Center_main_select {
  height: 1.3rem;
  margin-bottom: 0.2rem;
  background: white;
  /* box-shadow: 1px 1px 1px 1px #ccc; */
}
.Center_main_select h2 {
  /* border: 1px black solid; */
  line-height: 0.6rem;
  text-align: center;
}
.Center_main_select span {
  display: flex;
  justify-content: center;
}
.Center_main_select i {
  text-align: center;
}
.Center_main_physician {
  height: auto;
  background: white;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 0 0.1rem;
  font-weight: 200;
}
.center_top {
  padding-left: 0.2rem;
  /* border-bottom: 2px #ddd solid; */
  font-size: 0.38rem;
  line-height: 1rem;
}
.physician_addDiagnosis {
  padding: 0.1rem;
  box-shadow: 0px 1px 1px 1px #ddd;
}
.physician_addDiagnosis p {
  font-size: 0.3rem;
  width: 2rem;
  height: 0.6rem;
  margin-bottom: 0.2rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 0.3rem;
  background: darkgoldenrod;
}

.addDiagnosis_account span {
  font-size: 0.3rem;
  font-weight: 200;
}
.addDiagnosis_account h4 {
  float: left;
  font-size: 0.36rem;
  font-weight: 100;
  color: red;
  margin: 0.1rem;
  padding-left: 0.2rem;
}
.addDiagnosis_account .yd-input {
  border: 1px black solid;
  padding: 0 0.4rem;
  width: 100%;
}
.addDiagnosis_account button {
  float: right;
  height: 0.6rem;
  width: 1.8rem;
  font-size: 0.36rem;
  font-weight: 200;
  font: none;
  border: 1px solid;
}
</style>
