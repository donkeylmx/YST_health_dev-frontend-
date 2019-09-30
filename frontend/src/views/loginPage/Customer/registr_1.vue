
<!-- 新用户注册 第一步：注册手机号码和密码 -->
<template>
  <yd-layout>
    <div class="registr_1">
      <div class="space">
        <yd-cell-group class="space">
          <!-- 新用户注册 -->
          <yd-cell-group>
            <!-- 注册手机号 -->
            <yd-cell-item>
              <yd-input slot="right"
                        v-model="registr.account"
                        ref="input9"
                        required
                        regex="mobile"
                        placeholder="请输入手机号码">
              </yd-input>
            </yd-cell-item>
            <div class="kongxi"></div>
            <yd-flexbox class="yanzhengma clearfix">
              <yd-flexbox-item>
                <yd-cell-item>
                  <yd-input slot="right"
                            :show-success-icon="false"
                            :show-error-icon="false"
                            v-model="identifying"
                            required
                            :show-clear-icon="false"
                            placeholder="输入验证码"></yd-input>

                </yd-cell-item>
              </yd-flexbox-item>
              <div class="huoquyanzhengma">
                <yd-sendcode v-model="code"
                             storage-key="dashuaibi"
                             @click.native="sendCode1()"
                             init-str="获取验证码"></yd-sendcode>
              </div>
            </yd-flexbox>
          </yd-cell-group>
          <yd-cell-item>
            <yd-input slot="right"
                      type="password"
                      v-model="first"
                      placeholder="密码"></yd-input>
          </yd-cell-item>
          <div class="kongxi"></div>

          <yd-cell-item>
            <yd-input slot="right"
                      type="password"
                      v-model="second"
                      @change="passwordre()"
                      placeholder="确认密码"></yd-input>
          </yd-cell-item>
          <div class="issus"
               :style='[issus]'>
            <p>{{resMessage.message}}</p>
          </div>
        </yd-cell-group>
        <div class="registr"
             @click="enter()">
          <yd-button size="large"
                     bgcolor="#BDB76B"
                     color="#FFF">注 册</yd-button>
        </div>
      </div>
    </div>
  </yd-layout>
</template>
<script type="text/babel">
export default {
  /* eslint-disable no-undef */
  data() {
    return {
      first: "",
      second: "",
      radio5: 1,
      identifying: "", //验证码
      isRegistr: false,
      result: "",
      start1: false,
      code: false, //验证码60s
      registr: {
        account: "",
        password: "",

      },
      resMessage: {
        result: "",
        message: ""
      },
      issus: {
        opacity: 0,
        background: "rgb(255, 102, 102)",
        success: "rgb(108, 220, 133)"
      }
    };
  },
  watch: {
    /* eslint-disable */
    second: function() {
      var _this = this;
      if (_this.first == _this.second) {
        _this.issus.opacity = 1;
        _this.resMessage.message = "密码正确!";
        _this.issus.background = _this.issus.success;
        _this.registr.password = _this.second;
      } else {
        _this.resMessage.message = "两次密码不相符!";
        _this.issus.opacity = 1;
        _this.issus.background = "rgb(255, 102, 102)";
      }
    }
  },
  methods: {
    /* eslint-disable */
    passwordre() {
      console.log(1212);
    },

    enter() {
      this.$router.push({path:"/registrPinfo",query:{
        account:this.registr.account,
        password:this.registr.password,
        phone:this.registr.account,
      }});
      },
    sendCode1() {
      this.$dialog.loading.open("发送中...");
      // this.axios
      //   .post("api/user/",{'phone':this.Customer.account})
      //   .then(function(response) {
      //     console.log(response.data.message);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      setTimeout(() => {
        this.start1 = true;
        this.$dialog.loading.close();

        this.$dialog.toast({
          mes: "已发送",
          icon: "success",
          timeout: 1500
        });
        this.code=true;
      }, 1000);
    }
  }
};
</script>
<style>
.yd-btn-primary:not(.yd-btn-loading){
  background: #f37373;
}
.registr {
  padding: 0 0.24rem;
}
.registr button {
  border-radius: 0.5rem;
}
.registr_1 {
  position: relative;
  overflow: hidden;
  top: 25%;
  overflow: hidden;
  margin: 0 auto;

  /* max-width: 5rem; */
}
.issus {
  height: 0.6rem;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  margin: 0.1rem 0.26rem;
  border-radius: 0.3rem;
  color: white;
  /* display: none; */
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}
.huoquyanzhengma {
  padding-right: 0.24rem;
}
.kongxi {
  height: 0.1rem;
}
.yanzhengma {
  /* margin: 0.1rem 0;
  padding-right: 0.24rem; */
}
.yanzhengma .yd-cell-item {
}

.yanzhengma button {
  font-size: 0.32rem;
  height: 1rem;
}
.registr {
}
</style>

