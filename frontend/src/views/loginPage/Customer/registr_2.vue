<!-- 新用户注册 第二步：填写用户基本信息 --> 
<template>
  <transition name="step2">
    <div class="registr_2">
      <!-- 头像 -->
      <!-- <yd-flexbox>
        <label for="header_img"
               class="selectImg">{{selectName}}</label>
        <input id="header_img"
               class="imgSelect"
               type="file"
               name="header_img"
               @change="handleFiles"
               ref="inputer"
               accept="image/gif,image/jpeg,image/png,image/jpg">
        <label for="header_img" class="CustomerImg">
        </label>
      </yd-flexbox> -->
      <!-- 提示信息 -->
      <div class="issus"
           :style='[issus]'>
        <p>{{resMessage.message}}</p>
      </div>
      <!-- 性别 -->
      <p>{{minzu}}{{zhiye}}</p>
      <div class="kongxi"></div>
      <yd-flexbox>
        <yd-flexbox-item>
          <span class="font">您的性别:</span>
        </yd-flexbox-item>
        <yd-flexbox-item style="flex: 2;">
          <yd-radio-group v-model="Customer.sex"
                          color="#000">
            <yd-radio val="男"></yd-radio>
            <yd-radio val="女"></yd-radio>
          </yd-radio-group>
        </yd-flexbox-item>
      </yd-flexbox>
      <!-- 姓名 -->
      <div class="kongxi"></div>
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left"></span>
          <yd-input slot="right"
                    v-model="Customer.name"
                    required
                    :show-clear-icon="false"
                    placeholder="请输入您的真实姓名"></yd-input>
        </yd-cell-item>
        <!-- QQ,微信,邮箱 -->
        <div class="kongxi"></div>
        <yd-cell-item>
          <yd-input slot="right"
                    v-model="Customer.qq"
                    placeholder="请输入您的QQ号码"></yd-input>
        </yd-cell-item>
        <div class="kongxi"></div>
        <yd-cell-item>
          <yd-input slot="right"
                    v-model="Customer.weChat"
                    placeholder="请输入微信号"></yd-input>
        </yd-cell-item>
        <!-- <div class="kongxi"></div>
        <yd-cell-item>
          <yd-input slot="right"
                    v-model="Customer.email"
                    regex="^\d{5,12}$"
                    placeholder="请输入邮箱"></yd-input>
        </yd-cell-item> -->
      </yd-cell-group>
      <!-- 民族 -->
      <div class="kongxi"></div>
      <yd-flexbox>
        <yd-flexbox-item style="flex: 2;">
          <yd-cell-group>
            <yd-cell-item arrow>
              <span slot="left">民族</span>
              <input slot="right"
                     type="text"
                     @click.stop="show1 = true"
                     v-model="ethnicSelect"
                     readonly
                     placeholder="选择你的民族">
            </yd-cell-item>
          </yd-cell-group>
          <yd-cityselect v-model="show1"
                         :callback="result1"
                         :items="ethnic"
                         title="你的民族"></yd-cityselect>
        </yd-flexbox-item>
      </yd-flexbox>
      <!-- 职业 -->
      <div class="kongxi"></div>
      <yd-flexbox>
        <yd-flexbox-item style="flex: 2;">
          <yd-cell-group>
            <yd-cell-item arrow>
              <span slot="left">职业</span>
              <input slot="right"
                     type="text"
                     @click.stop="jobShow = true"
                     v-model="jobSelect"
                     readonly
                     placeholder="选择你的职业">
            </yd-cell-item>
          </yd-cell-group>
          <yd-cityselect v-model="jobShow"
                         :callback="result2"
                         :items="job"
                         title="你的职业"></yd-cityselect>
        </yd-flexbox-item>
      </yd-flexbox>
      <div class="finish"
           @click="add_account(Customer.sex)">
        <yd-button size="large"
                   bgcolor="#BDB76B"
                   color="#FFF">完成</yd-button>
      </div>
    </div>
  </transition>
</template>
<script type="text/babel">
export default {
  data() {
    return {
      show1: false,
      jobShow:false,
      ethnicSelect: "",
      ethnicSelectV: "",
      jobSelect:'',
      jobSelectV:'',
      job:[
        { v: "1", n: "汉族" },
        { v: "2", n: "回族" },
        { v: "3", n: "满族" }
      ],
      ethnic: [
        { v: "1", n: "汉族" },
        { v: "2", n: "回族" },
        { v: "3", n: "满族" }
      ],
      minzu: "",
      zhiye:"",
      minzu2: "",
      Customer: {
        account: this.$route.query.account,
        password: this.$route.query.password,
        phone: this.$route.query.phone,
        name: "",
        sex: "",
        ethnic:"",
        job:"",
        qq: "",
        wechat: "",
        email: "",
        address: "",
        profession: "",
        imgs: {},
        imgLen: 0,
        imgUrl: ""
      },
      issus: {
        opacity: 0,
        background: "rgb(255, 102, 102)",
        success: "rgb(108, 220, 133)"
      },
      resMessage: {
        result: "",
        message: ""
      }
    };
  },
  watch: {
    Customer: {
      handler() {
        if (this.Customer.name == "") {
          this.resMessage.message = "姓名不能为空";
          this.issus.opacity = 1;
        }
      }
    }
  },
  props: {
    value: {
      // 绑定默认的value prop
      default: undefined
    }
  },
  mounted() {
    /* eslint-disable */
    this.getInfo();
  },
  methods: {
    //获取相关json信息
    getInfo() {
      this.http.getDictionary().then(res => {
      this.getMinzu(res[1].key_value,this.ethnic);
      this.getMinzu(res[2].key_value,this.job);
      });
    },
    getMinzu(data,item) {
      data = data.split(",");
      console.log(data);
      let sum = 0;
      while (sum < data.length) {
        item[sum] = {
          v: sum,
          n: data[sum],
        };
        sum++;
      }
      console.log(item);
    },
    result1(ret) {
      this.ethnicSelect = ret.itemName1;
      this.ethnicSelectV = ret.itemValue1;
      this.Customer.ethnic = ret.itemValue1
    },
    result2(ret) {
      this.jobSelect = ret.itemName1;
      this.jobSelectV = ret.itemValue1;
      this.Customer.job = ret.itemValue1;
    },
    //点击进入主页
    goHome() {
      this.$router.push("/login");
    },
    handleFiles() {
      let inputDOM = this.$refs.inputer; //整个input Dom保存在inputDOM内
      // 通过DOM取文件数据
      /* eslint-disable */
      this.fil = inputDOM.files; // input dom 的文件资源
      console.log(this.fil);
      this.imgP(this.fil);
      let oldLen = this.imgLen;
      let len = this.fil.length + oldLen;
      if (len > 4) {
        alert("最多可上传4张，您还可以上传" + (4 - oldLen) + "张");
        return false;
      }
      for (let i = 0; i < this.fil.length; i++) {
        let size = Math.floor(this.fil[i].size / 1024);
        if (size > 5 * 1024 * 1024) {
          alert("请选择5M以内的图片！");
          return false;
        }
        this.imgLen++;
        this.$set(
          this.imgs,
          this.fil[i].name + "?" + new Date().getTime() + i,
          this.fil[i]
        );
      }
    },
    imgP(file) {
      var _this = this;
      if (!file || !window.FileReader) return;
      var reader = new FileReader();
      //将图片转成base64格式
      console.log(file[0]);
      reader.readAsDataURL(file[0]);
      reader.onload = function(evt) {
        console.log(evt.target.result);
        _this.canvasImg(evt.target.result);
      };
      console.log(self.imgUrl);
      reader.onloadend = function() {
        self.imgUrl = this.result;
      };
    },
    add_account(e) {
      var _this = this;
      if (e == "男") {
        _this.Customer.sex = 0;
      }
      if (e == "女") {
        _this.Customer.sex = 1;
      }
      console.log(_this.Customer);
      _this.axios
        .post("api/user/add", _this.Customer

        )
        .then(function(response) {
          console.log(response.data.message);
          // _this.add_access(1);
          _this.goHome();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // add_access(data) {
    //   this.http.getUserAccount(this.Customer.account).then(res => {
    //     console.log(res.uuid);
    //     this.http.AddUserAccess(res.uuid).then(res => {
    //       console.log(res);
    //     });
    //   });
    // },
    canvasImg(dataURL) {
      var _this = this;
      const img = new window.Image();
      img.src = dataURL;
      var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
      img.onload = function() {
        //图片加载完成
        //canvas 值按照你自己的实际需求去写
        canvas.width = 100;
        canvas.height = 100;
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        var xx = canvas.toDataURL("image/jpeg", 1.0);
        _this.imgUrl = xx;
        _this.selectName = ""; //图片加载完毕后，文字提示消失。
      };
    }
  }
};
</script>

<style>
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
.registr_2{
  height: auto;
}
.finish {
  padding: 0 0.24rem;
}
.finish button {
  border-radius: 0.5rem;
}
.selectImg {
  margin-top: 0.5rem;
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 0.1rem;
  left: 36%;
  text-align: center;
  line-height: 1rem;
  border-radius: 1rem;
}
.imgSelect {
  opacity: 0;
  height: 0px;
  width: 0px;
}
.CustomerImg {
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  background: url("C:/Users/Mr.donkey/Desktop/dajiankangyuan/health_dev/frontend/public/img/touxiang.jpg")
    no-repeat center;
  background-size: 100px 100px;
  border-radius: 2rem;
}
.font {
  font-size: 0.36rem;
}
.img img {
  width: 100px;
  height: 100px;
}
li:hover .img .close {
  display: block;
  position: absolute;
  right: -6px;
  top: -10px;
  line-height: 1;
  font-size: 22px;
  color: #aaa;
}
.step2-enter-active,
.step2-leave-active {
  transition: opacity 0.5s;
}
.step2-enter, .step2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
