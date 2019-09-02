<template>
  <div class="home">
    <el-container>
      <el-header class="top-title clearfix">
        <div class="tp-fl fl clearfix">
          <div class="tp-img fl">
            <img src="../common/images/logo.jpg" alt />
          </div>
          <div class="tp-ttl fl">后台管理系统</div>
        </div>
        <div class="tp-fr fr clearfix">
          <div class="tp-name fl">{{userName}}</div>
          <div class="tp-icon clearfix">
            <div class="fl fl-img">
              <img src="../common/images/userInfo.png" alt />
            </div>
            <div class="fr fr-img">
              <img src="../common/images/xia.png" alt />
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside class="fl-aside">
          <el-menu :default-openeds="['1', '4']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>项目
              </template>
              <el-submenu index="1-1">
                <template slot="title">用户申请开通会员</template>
                <el-menu-item index="1-1-1">新建申请单</el-menu-item>
                <el-menu-item index="1-1-2">受理&完成申请单</el-menu-item>
                <el-menu-item index="1-1-3">申请开通会员功能总表</el-menu-item>
              </el-submenu>

              <el-submenu index="1-2">
                <template slot="title">为用户申请会员认证</template>
                <el-menu-item index="1-2-1">申请会员认证</el-menu-item>
                <el-menu-item index="1-2-2">提交认证资料</el-menu-item>
                <el-menu-item index="1-2-3">会员认证</el-menu-item>
                <el-menu-item index="1-2-4">申请会员认证总表</el-menu-item>
                <el-menu-item index="1-2-5">会员总表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">第三方人员管理</template>
                <el-menu-item index="1-3-1">中心人员</el-menu-item>
                <el-menu-item index="1-3-2">次要人员</el-menu-item>
                <el-menu-item index="1-3-3">普通人员</el-menu-item>
              </el-submenu>
               <el-submenu index="1-4">
                <template slot="title">设置</template>
                <el-menu-item index="1-4-1">账号</el-menu-item>
                <el-menu-item index="1-4-2">密码</el-menu-item>
              </el-submenu>

            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>异常监控
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">数据同步异常</el-menu-item>
                <el-menu-item index="2-2">流水异常</el-menu-item>
                <el-menu-item index="2-3">余额异常</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>其他设置
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>内部管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">人员</el-menu-item>
                <el-menu-item index="3-2">权限</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="fr-aside">
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "默笙"
    };
  }
};
</script>
<style lang="css" scoped>
@import url("../common/style/pc-css.min.css");
</style>