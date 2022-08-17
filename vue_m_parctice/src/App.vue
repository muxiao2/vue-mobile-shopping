<template>
  <div id="app">
    <!-- Header -->
    <mt-header fixed title="MUXIAO E-MALL" class="app_header">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back"></mt-button>
      </span>
    </mt-header>

    <transition>
      <router-view/>
    </transition>
    
    <!-- Footer -->
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="my-mui-tab-item" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/member" class="my-mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link to="/shoppingcart" class="my-mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">{{ this.$store.getters.getAllCount }}</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/search" class="my-mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flag: false
    }
  },
  created() {
    this.flag = this.$route.path === '/home' ? false : true
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  // 监听路由
  watch: {
    '$route.path': function(newVal) {
      this.flag = newVal === '/home' ? false : true
    }
  }
}
</script>

<style>
body {
  background-color: #fff;
    touch-action: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 40px;
  /* 溢出隐藏 */
  overflow-x: hidden;
  padding-bottom: 50px;
}
.app_header {
  background-color: pink;
}
.mui-bar-tab .my-mui-tab-item.mui-active {
  color: pink;
}
/* 进入钩子开始状态 */
.v-enter {
  opacity: 0;
  transform: translateX(100vw);
}
.v-leave-to {
  position:   absolute;
  opacity: 0;
  transform: translateX(-100vw);
}
.v-enter-active,
.v-leave-active {
  transition: all .5s linear;
}
/* 样式冲突 */
.mui-bar-tab .my-mui-tab-item {
    display: table-cell;
    overflow: hidden;
    widows: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .my-mui-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .my-mui-tab-item .mui-icon~.mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
