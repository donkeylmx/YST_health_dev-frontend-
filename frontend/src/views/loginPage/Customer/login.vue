
<template>
  <yd-layout>
     <yd-navbar slot="navbar" title="Dev_Health" class="tabbar"/>
    <div class="login">
      <div class="space ">
        <div class="loginInput">
          <yd-cell-group class="space">
            <div class="issus"
                 :style='[issus]'>
              <p>{{resMessage.message}}</p>
            </div>
            <yd-cell-item class="border space"
                          color="black">
              <yd-input slot="right"
                        required
                        v-model="Customer.account"
                        max="20"
                        placeholder=" 用户名"></yd-input>
            </yd-cell-item>
            <div class="kongxi"></div>
            <yd-cell-item>
              <yd-input slot="right"
                        type="password"
                        v-model="Customer.password"
                        placeholder=" 密码"></yd-input>
            </yd-cell-item>
            <!--           <div class="forgot">
         <yd-button size="mini"
                       bgcolor="#FFF"
                       color="#555">忘记密码</yd-button>
          </div>
          -->
          </yd-cell-group>
        </div>

        <div class="loginButton">
          <label @click="signIn()">
            <yd-button class="buttomes"
                       size="large"
                       bgcolor="#BDB76B"
                       color="">
              登 陆</yd-button>
          </label>
          <router-link to="/registr">
            <yd-button class="buttomes"
                       size="large"
                       bgcolor="#BDB76B"
                       type="hollow">注 册</yd-button>
          </router-link>

          <div class="otherLogin clearfix">
            <router-link to="/technician">
              <yd-button bgcolor="#20bbdc"
                         color="#FFF">技师登陆
              </yd-button>
            </router-link>
            <router-link to="/manager">
              <yd-button bgcolor="#e24463"
                         color="#FFF">店长登陆</yd-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </yd-layout>

</template>

<script type="text/babel">
export default {
  name: "loginPage",
  data() {
    return {
      style: {
        bgcolor: "#fff0"
      },
      issus: {
        opacity: 0,
        background: "rgb(255, 102, 102)",
        success: "rgb(108, 220, 133)"
      },
      Customer: {
        account: "",
        password: "",
        loginType: ""
      },
      resMessage: {
        result: "",
        message: ""
      },
      infoo: null,
      color_1: "#fff0",
      color_2: "#000"
    };
  },
  watch:{
        /* eslint-disable */
    Customer:{
      handler(newValue,oldValue){
        if(!newValue.account){
          
        }
      },
      deep: true,
    }
  },
  methods: {
    /* eslint-disable no-console */
    Resgiter() {
      this.$emit("ResgiterShow");
    },
    signIn() {
      var _this = this;
      console.log("登陆事件");
      _this.axios
        .post(
          "api/user/login?account=" +
            _this.Customer.account +
            "&password=" +
            _this.Customer.password,
          {
            // params: _this.Qs.stringify(_this.Customer),
          }
        )
        .then(res => {
          if (res.data.result) {
            _this.resMessage.message = '登陆成功';
            _this.issus.opacity = 1;
            _this.issus.background = _this.issus.success;
            _this.$cookie.delete('YST_ID','',-1);
            _this.$cookie.delete('YST_Status','',-1);
            _this.$cookie.set('YST_ID',res.data.account,1000*60);
            _this.$cookie.set('YST_Status','1',1000*60);
            window.localStorage.setItem('YST_account',res.data.account);
            window.localStorage.setItem('YST_img','none')
            _this.axios
            .post('api/user/account?account='+res.data.account, {
            })
            .then(function (res2) {
              _this.$store.commit('auth_success',res2.data.uuid);
              window.localStorage.setItem('YST_ID', res2.data.uuid);
              window.localStorage.setItem('YST_NAME', res2.data.name);
              window.localStorage.setItem('YST_STATUS', res2.data.name);
            })
            .catch(function (error2) {
              console.log(error2);
            });

            setTimeout(function() {
              _this.goHome();
            }, 1000);
          } else {
            if(!_this.Customer.account)
            _this.resMessage.message = "请输入用户名";
            else{
            _this.resMessage.message = res.data.message;
            }
            _this.resMessage.result = res.data.result;
            _this.issus.opacity = 1;
          }
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    mounted() {},
    // 跳转到首页
    goHome() {
      this.$router.push("/one");
    },
    goRegister() {
      this.$router.push("/registr");
    }
  }
};
</script>
<style scope>
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
body {
  background: #fff;
}
div {
  border: 0;
}
/* 输入框 */
input {
  caret-color: black; /* 光标无色 */
  padding-left:5px;
  border-radius: 0.5rem;
}
button {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0 auto;
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
.loginInput {
  min-width: 3.75rem;
  margin: 0 auto;
}
.loginButton {
  width: 100%;
  padding: 0 0.24rem;
}
.loginButton .buttomes{
  border-radius: 0.8rem !important;
  font-size: 0.40rem;
  font-weight: 200;
}
.kongxi {
  height: 0.2rem;
}
/* 登陆界面 */
.login {
  position: relative;
  overflow: hidden;
  top: 20%;
  overflow: hidden;
  margin: 0 auto;
  padding: 0.1rem 0.1rem;
}
.login::before {
  content: "";
  filter: blur(0.05rem);
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100%);
  height: calc(100%);
  z-index: -1;
  /* background:url('../../assets/f4b76385a3ccdbac48893cc6418806d5.jpg') center/cover; */
  background-attachment: fixed;
}
.login::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.35;
  width: calc(100%);
  height: calc(100%);
  background: #fff;
}
.login,
.login::before,
.login::after {
  border-radius: 0rem;
}
.shadow {
  box-shadow: 0rem 0rem 0.2rem 0rem rgba(0, 0, 0, 0.14),
    0 0.06rem 30rem 5px rgba(0, 0, 0, 0.12),
    0 0.08rem 10rem -0.05rem rgba(0, 0, 0, 0.3);
}
.forgot {
  width: 100%;
  height: 0.45rem;
  border: 0;
}
.loginType {
  margin-left: 10%;
}

.loginButton {
  min-width: 3.6rem;
  margin: 0 auto;
}
.otherLogin {
  height: auto;
  width: 100%;
  margin-top: 0.3rem;
}
.otherLogin button {
  padding: 0;
  height: 0.9rem;
  width: 50%;
  font-size: 0.36rem;
}

/* 输入框背景 */
.yd-cell {
  background: none;
}
.yd-input {
  border: 1px #eaeaea solid;
  padding-left: 0.1rem;
  font-size: 0.4rem;
  border-radius: 0.6rem
}
/* 图标大小 */
.yd-input-warn::after {
  color: #000 !important;
  font-size: 0.4rem;
}
.yd-input-password:after {
  color: #000 !important;
  font-size: 0.4rem;
}
.yd-input-error:after {
  color: #000;
  font-size: 0.4rem;
}
.yd-input-clear::after {
  color: #555;
  font-size: 0.4rem;
}
.yd-input-success:after {
  content: "\E601";
  color: #000;
  font-size: 0.4rem;
}
.yd-cell-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-left: 0.24rem;
  overflow: hidden;
  border: 0rem;
}
.yd-cell-item:after {
  display: none;
}
.yd-cell:after {
  display: none;
}
.yd-btn-mini {
  height: 0.45rem;
  float: right;
  font-size: 0.3rem;
}
/* 输入框内字体颜色 */
input::-ms-input-placeholder {
  text-align: left;
  color: #555;
  font-size: 0.4rem;
}
input::-webkit-input-placeholder {
  text-align: left;
  color: #555;
  font-size: 0.28rem;
}
input::-moz-placeholder {
  text-align: left;
  color: #555;
  font-size: 0.4rem;
}
/* 字体大小 */
</style>
