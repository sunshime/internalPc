<template>
  <div class="login">
    <div class="container clearfix">
        <div class="login-icon fl">
            <img src="../common/images/login-form.jpg" alt="">
        </div>
      <el-form ref="form" :model="form" class="lg-form fr">
        <el-form-item label="用户名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.userPwd"></el-input>
        </el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            userName:'',
            userPwd:'',
        }
    };
  }
};
</script>
<style lang="css" scoped>
@import url("../common/style/pc-css.css");
</style>