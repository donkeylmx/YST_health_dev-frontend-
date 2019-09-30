<template>
  <yd-layout>

    <div class="login">
      <div class="space ">
      <div class="loginInput">
              <yd-cell-group class="space">
          <yd-cell-item class="border space"
                        color="black">
            <yd-input slot="right"
                      required
                      v-model="Customer.account"
                      max="20"
                      placeholder="账号"></yd-input>
          </yd-cell-item>
          <div class="kongxi"></div>
          <yd-cell-item>
            <yd-input slot="right"
                      type="password"
                      v-model="Customer.password"
                      placeholder="密码"></yd-input>
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
        <router-link to="/registr">
          <yd-button size="large"
                     bgcolor="#e24463"
                     color="#FFF">店长登陆</yd-button>
        </router-link>
        <router-link to="/registr">
          <yd-button size="large"
                     type="hollow"
                     >注册</yd-button>
         </router-link>

        <div class="otherLogin clearfix">
           <router-link to="/technician">
          <yd-button bgcolor="#20bbdc"
                     color="#FFF"
                     >技师登陆
          </yd-button>
           </router-link>
          <router-link to="/login">
          <yd-button bgcolor="#f37373"
                     color="#FFF"
                     >顾客登陆</yd-button>
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
      Customer: {
        account: "",
        password: "",
        loginType: ""
      },
      infoo: null,
      color_1: "#fff0",
      color_2: "#000"
    };
  },
  // props: {
  //   isShow: {
  //   default:'true',
  //   type: String,
  //   required: true,
  //   validator: function (value) {
  //     return [
  //       'syncing',
  //       'synced',
  //       'version-conflict',
  //       'error',
  //     ].indexOf(value) !== -1
  //     }
  //   }
  // },
  methods: {
    Resgiter() {
      this.$emit("ResgiterShow");
    },
    signIn() {
      this.axios
        .post("/api/user/login?account=li&password=123456", {
          params: {}
        })
        .then(body => {
          this.infoo = body.data;
          this.goHome();
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
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
  overflow: hidden;
}
div{
  border: 0;
}

.loginInput{
  min-width: 3.75rem;
  margin: 0 auto;;
}
.loginButton{
  width: 100%;
  padding: 0 0.24rem;
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
    0 0.06rem 30rem 5px rgba(0, 0, 0, 0.12), 0 0.08rem 10rem -0.05rem rgba(0, 0, 0, 0.3);
}
.forgot {
  width: 100%;
  height: 0.45rem;
  border: 0;
}
.loginType {
  margin-left: 10%;
}
/* 输入框 */
input {
  caret-color: transparent; /* 光标无色 */
}
button {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.loginButton{
  min-width: 3.6rem;
  margin: 0 auto;
}
.otherLogin {
  height: auto;
  width: 100%;
  margin-top: 0.3rem;
}
button{
  padding: 0;
  margin:0 auto;
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
  padding: 0rem;
  font-size: 0.4rem;
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
  border: 0rem ;
}
.yd-cell-item:after{
display:none;
}
.yd-cell:after{
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
