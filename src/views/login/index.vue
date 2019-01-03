<style scoped lang="less">
.login-page {
  padding: 0 31px;
  background-color: #fff;

  .title {
    margin-top: 24px;
  }

  .desc {
    font-family: PingFangSC-Medium;
    color: #303030;
    font-size: 20px;
    margin: 40px 0;
  }

  .get-code {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 94px;
    height: 28px;
    background: #be8a65;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
  }

  .help {
    margin: 6px 0 21px;
    text-align: right;
    font-size: 14px;
    color: #be8a65;
  }
}
</style>

<template>
  <div class="login-page">
    <h3 class="tit-h3 title">姿美后台管理</h3>
    <p class="desc">手机号登录</p>
    <ul>
      <li class="input-wrap">
        <input v-model="tel" type="tel" placeholder="请输入手机号" class="tel">
      </li>
      <li class="input-wrap">
        <input v-model="code" type="number" placeholder="请输入验证码">
        <button :class="['get-code', {'dis-btn': disgetCode}]" @click="getCode">{{codeDesc | numFilter}}</button>
      </li>
    </ul>
    <p class="help">收不到验证码?</p>
    <button :class="['submit-btn', {'dis-btn': disBtn}]" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: "",

  components: {},

  data() {
    return {
      tel: "",
      code: "",
      codeDesc: "获取验证码",
      timer: null
    };
  },

  computed: {
    disgetCode() {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      return !reg.test(this.tel) || typeof this.codeDesc === "number";
    },
    disBtn() {
      let reg = /^[0-9]{6}$/;
      return !(this.checkoutTel() && reg.test(this.code));
    }
  },

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},
  filters: {
    numFilter(val) {
      return typeof(val) === 'number' && val < 10 ? '0' + val : val
    }
  },
  methods: {
    getCode() {
      if (this.disgetCode) return;
      let _this = this;
      _this.codeDesc = 12;
      _this.timer = setInterval(function() {
        typeof _this.codeDesc === "number" && _this.codeDesc--;
        if (_this.timer && _this.codeDesc < 0) {
          _this.codeDesc = "获取验证码";
          window.clearInterval(_this.timer);
        }
      }, 1000);
    },

    login() {
      if (this.disBtn) return;
      this.$router.replace("/bindInfo");
    },

    checkoutTel() {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
      return reg.test(this.tel);
    }
  }
};
</script>
