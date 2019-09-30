//顾客注册界面
<template>
  <transition name="step2">
    <!-- 进入动画 -->
    <div class="registr">
      <yd-flexbox direction="vertical">
        <!-- 注册进度 -->
          <transition name="step3">
        <yd-flexbox-item class="step"
                         align="bottom">
          <yd-step currentColor="#BDB76B"
                   :current=step>
            <yd-step-item @click="registr()">
              <span slot="bottom">新用户注册</span>
            </yd-step-item>
            <yd-step-item>
              <span slot="bottom">完善个人信息</span>
            </yd-step-item>
          </yd-step>
        </yd-flexbox-item>
          </transition>
        <!-- 注册页面 -->
        <yd-flexbox-item center
                         class="registrCenter">
          <router-view v-on:step='stepNum(2)' />
        </yd-flexbox-item>
      </yd-flexbox>
    </div>
  </transition>
</template>

<script>
export default {
  name: "registrPage",
  data() {
    return {
      step: 1
    };
  },
  methods: {
    stepNum(data) {
            /* eslint-disable */
      console.log(this.step);

      this.step = data;
    },
  },
  mounted: function() {
    this.$nextTick(function() {}), this.$router.push("/registr");
  }
};
</script>
<style scope>
button {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.yd-input {
  border: 1px #eaeaea solid;
  padding: 4px;
  font-size: 0.4rem;
}
.registr {
  position: relative;
  top: 15%;
  overflow: hidden;
  overflow: hidden;
  margin: 0 auto;
  min-width: 3.75rem;

}
.registrCenter {
  position: relative;
  overflow: hidden;
  overflow: hidden;
  margin: 0 auto;
  padding: 10px 10px;

}
.step {
  padding: 10px;
  height: 80px;
}
.step2-enter-active,
.step2-leave-active {
  transition: opacity 0.5s;
}
.step2-enter, .step2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
