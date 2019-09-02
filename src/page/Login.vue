<template>
  <div class="login">
    <Toast :status="toastStatus" :tips="tips" @clearTimer="clearTimer" :timer="timer"></Toast>

    <div class="container clearfix">
      <div class="login-icon fl">
        <img src="../common/images/login-form.jpg" alt />
      </div>
      <div class="lg-form fr">
        <div class="title clearfix">
          <!-- <span class="fl lg-left">账号登录</span>
          <span class="fr lg-right">微信登录</span> -->
          <span class="lg-title">登录系统</span>
        </div>
        <div class="from-body">
          <div class="user-name clearfix">
            <div class="use-icon fl">
              <img src="../common/images/yonghu.png" alt />
            </div>
            <input
              type="text"
              placeholder="用户名或邮箱地址"
              class="fl use-input"
              v-model="loginForm.username"
            />
          </div>
          <div class="user-name clearfix">
            <div class="use-icon fl">
              <img src="../common/images/mima.png" alt />
            </div>
            <input
              type="password"
              placeholder="登录密码"
              class="fl use-input"
              v-model="loginForm.userpassword"
            />
          </div>
          <button class="lg-btn" @click="submitForm()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Toast from "../components/toast";
export default {
  data() {
    return {
      loginForm: {
        username: "123456",
        userpassword: "123456"
      },
      toastStatus: false, // 提示框
      timer:3000,
      tips: "请输入账号"
    };
  },
  components: {
    Toast
  },
  methods: {
      clearTimer(val){
          this.toastStatus = val;
      },
    submitForm() {
      console.log("--->loginForm", this.loginForm);
      if (
        this.loginForm.username.trim() &&
        this.loginForm.userpassword.trim()
      ) {
        this.axios
          .post(
            "https://www.easy-mock.com/mock/5d6c911659e8cb63ee8cd4f5/internalPc/Login/login"
          )
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              console.log("登录成功。。。");
              this.$router.push('home');
              //  跳转到首页
            } else if (res.status == 203) {  // 203 密码错误
              this.toastStatus = true;
              this.tips = "密码错误！"
            } else {  // 204 表示用户名不存在
              this.toastStatus = true;
              this.tips = "该用户名不存在！"
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else if (this.loginForm.username.trim()&&!this.loginForm.userpassword.trim()) {
        this.toastStatus = true;
        this.tips = "请输入密码！"
        return false;
      } else if (this.loginForm.userpassword.trim()&&!this.loginForm.username.trim()) {
        this.toastStatus = true;
        this.tips = "请输入账号！"
        return false;
      } else {
        this.toastStatus = true;
        this.tips = "请输入账号和密码！"
        return false;
      }
    }
  }
};
</script>
<style lang="css" scoped>
@import url("../common/style/pc-css.min.css");
</style>