<template>
  <div class="addDiagnosis_main">
    <yd-navbar title="添加诊断记录">
      <router-link to="/Center"
                   slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="addDiagnosis_main_info">
      <div class="addDiagnosis_main_customer">
        <div class="addDiagnosis_main_customer_name clearfix">
          <h4>病人档案:</h4>
          <img src=~assets/images/th.jpg
               alt="">
          <!-- 病人信息详情按钮 -->
          <div class="customer_name_enter">
            <yd-icon name="enter"
                     custom
                     slot="icon"
                     size="0.5rem"></yd-icon>
            <span>详情</span>
          </div>
        </div>
        <!-- 个人病例信息 -->
        <div class="addDiagnosis_main_history">
          <div class="main_history_enter  clearfix">
            <h4>历史记录:</h4>
            <div>
              <yd-icon name="enter"
                       custom
                       slot="icon"
                       size="0.5rem"></yd-icon>
              <span>几天前/无记录</span>
            </div>

          </div>
          <div class="addDiagnosis_history_main">
            历史记录主要内容
            <p></p>
          </div>
        </div>

      </div>
    </div>
    <yd-cell-group title="调养记录">
      <yd-cell-item>
        <yd-textarea slot="right"
                     placeholder="请输入疗养记录"
                     maxlength="200"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group title="生活、工作注意事项">
      <yd-cell-item>
        <yd-textarea slot="right"
                     placeholder="请输入注意事项"
                     maxlength="100"></yd-textarea>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>
<script>
export default {
  name: "AddDiagnosis",
  data() {
    return {
      customer: this.http.getUserAccount("13071881952").then(res => {
        this.customer = res;
      }),
      history:'',
    };
  }
};
</script>
<style>
.addDiagnosis_main_customer {
  height: auto;
}
.addDiagnosis_main_customer_name {
  height: auto;
  padding: 0 0.2rem;
  margin: 0.1rem 0;
  background: white;
}
.addDiagnosis_main_customer_name h4 {
  float: left;
  margin: 0.1rem 0;
  border-left: 0.1rem green solid;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
.addDiagnosis_main_customer_name span {
  float: left;
  text-align: center; 
  line-height: 0.8rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
.addDiagnosis_main_customer_name img {
  position: relative;
  float: left;
  margin: 0 0.2rem;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 1rem;
  background: darkblue;
}
.addDiagnosis_main_customer_name p {
  float: left;
  text-align: center;
  line-height: 1rem;
  font-size: 0.36rem;
}
.customer_name_enter {
  float: right;
  margin: 0.1rem 0;
  padding: 0 0.2rem;
}
.addDiagnosis_main_history {
  margin: 0.1rem 0;
  padding: 0 0.2rem;
  background: white;
}
.addDiagnosis_main_history h4 {
  float: left;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
.addDiagnosis_history_main {
  height: auto;
  font-size: 0.36rem;
  font-weight: 200;

}
.main_history_enter i {
  float: right;
}
.main_history_enter span {
  float: right;
  font-size: 0.36rem;
  line-height: 0.6rem;
  font-weight: 200;
}
</style>