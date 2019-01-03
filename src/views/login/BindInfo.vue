<style scoped lang="less">
.bind-info-page {
  padding: 0 30px;
  font-size: 16px;

  .title {
    margin: 20px 0 16px;
  }

  .desc {
    font-size: 16px;
    color: #303030;
    letter-spacing: 0;
  }

  .input-wrap,
  .submit-btn {
    margin-top: 46px;
  }

  .bank-type {
    color: #ccccce;
  }
  .right-arrow {
    background: url("../../assets/imgs/rightArrow.png") no-repeat center right;
    background-size: 8px 13px;
  }
}
</style>

<template>
  <div class="bind-info-page">
    <h3 class="tit-h3 title">绑定信息</h3>
    <p class="desc">请填写本人身份证号和银行卡号以便所获利润以工资形式发放</p>
    <ul>
      <li class="input-wrap">
        <input v-model="name" type="text" placeholder="请输入本人真实姓名">
      </li>
      <li class="input-wrap">
        <input v-model="IDnumber" type="number" placeholder="请输入本人身份证号">
      </li>
      <li class="input-wrap">
        <input v-model="bankNumber" type="number" placeholder="请输入本人银行卡号">
      </li>
      <li class="input-wrap right-arrow" @click="showPopup">
        <input v-model="bankType" type="text" placeholder="请选择所属银行" readonly="readonly">
      </li>
    </ul>
    <button :class="['submit-btn', {'dis-btn':disable}]" @click="submit">确认无误提交</button>
    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        title
        :item-height="50"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",

  components: {},

  data() {
    return {
      name: "",
      IDnumber: "",
      bankNumber: "",
      bankType: "",
      show: false,
      columns: [
        "中国银行",
        "工商银行",
        "农业银行",
        "建设银行",
        "招商银行",
        "北京银行"
      ]
    };
  },

  computed: {
    disable() {
      return !(this.name && this.IDnumber && this.bankNumber && this.bankType);
    }
  },

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    submit() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "请确保您提交的信息真实可靠!"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },

    showPopup() {
      this.show = true;
    },

    onConfirm(value, index) {
      this.bankType = value;
      this.show = false;
    },

    onCancel() {
      this.show = false;
    }
  }
};
</script>
