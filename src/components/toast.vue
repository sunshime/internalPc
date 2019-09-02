<template>
  <div class="toast" v-if="toastStatus">
    <span class="desc">{{tips}}</span>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      timers: 3000,
      toastStatus:false
    };
  },
  props: {
    timer: Number,
    status: Boolean,
    tips: String
  },
watch:{
    status(val){
        this.toastStatus = val;
        console.log(val,'val---')
        if(val){
            this.changeStatus();
        }
    }
},
  methods: {
    changeStatus() {
      let _this = this;
      _this.timers = _this.timer;

      setTimeout(function() {
        _this.toastStatus = false;
        _this.$emit('clearTimer',false);
      }, _this.timers);
    }
  }
};
</script>
<style lang="css" scoped>
@import "../common/style/conpoment.min.css";
</style>