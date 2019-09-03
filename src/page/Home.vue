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
            <el-submenu :index="proAsideObj.id+''">
              <template slot="title">
                <i class="el-icon-message"></i>
                {{proAsideObj.asideTitle}}
              </template>
              <el-submenu
                :index="proAsideObj.id+'-'+item.sid+''"
                v-for="item in proAsideObj.proList"
                :key="item.sid"
              >
                <template slot="title">{{item.proTitle}}</template>
                <el-menu-item
                  :index="'/'+thrItem.path"
                  v-for="thrItem in item.list"
                  :key="thrItem.tid"
                >{{thrItem.name}}</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu :index="item.id+''" v-for="item in asideList" :key="item.id">
              <template slot="title">
                <i class="el-icon-setting"></i>
                {{item.asideTitle}}
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index="'/'+sbmitItems.path"
                  v-for="sbmitItems in item.list"
                  :key="sbmitItems.sid"
                >{{sbmitItems.name}}</el-menu-item>
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
      userName: "默笙",
      asideList: [], // 其他列表
      proAsideObj: {}  //项目栏部分
    };
  },
  methods: {
    getAsideData() {
      this.axios
        .get(
          "https://www.easy-mock.com/mock/5d6c911659e8cb63ee8cd4f5/internalPc/home/getSideData"
        )
        .then(res => {
          this.asideList = res.data.asideList;
          this.proAsideObj = res.data.proObj;
        });
    }
  },
  mounted() {
    this.getAsideData();
  }
};
</script>
<style lang="css" scoped>
@import url("../common/style/pc-css.min.css");
</style>