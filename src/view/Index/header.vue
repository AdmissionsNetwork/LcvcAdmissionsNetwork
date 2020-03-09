<template>
  <div class="header">
    <div class="top">
      <div class="logo">
        <img src="@/assets/lcvclogo.png" alt />
      </div>
      <div class="search">
        <i-input>
          <i-button slot="append">搜索</i-button>
        </i-input>
      </div>
      <div class="qrcode">
        <img src="@/assets/code@2x.png" alt />
      </div>
      <div class="btn">
        <!-- <div class="sousuo" @click="openSouSuo">
          <img src="@/assets/sousuo.png" alt />
        </div>-->
        <div class="caidan" @click="openCaiDan">
          <img src="@/assets/caidanWhite.png" alt />
        </div>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li class="active">
          <router-link to="http://www.lcvc.cn/">学院首页</router-link>
        </li>
        <li>
          <router-link to="/http://www.lcvc.cn/Category_180/Index.aspx">系部首页</router-link>
        </li>
        <li>
          <router-link to="/details">系部概况</router-link>
        </li>
        <li>
          <router-link to="http://www.lcvc.cn/Category_180/Index.aspx#">师资队伍</router-link>
        </li>
        <li>
          <router-link to="/">专业设置</router-link>
        </li>
        <li>
          <router-link to="/">教学科研</router-link>
        </li>
        <li>
          <router-link to="/">学生管理</router-link>
        </li>
        <li>
          <router-link to="/">招生就业</router-link>
        </li>
      </ul>
    </div>
    <profession v-if="iszhuanye"></profession>
    <!-- <div class="searchbar" v-if="isShow">
      <i-input v-model="value" placeholder="请输入..." style="width: 75%"></i-input>
       <i-button>搜索</i-button>
    </div>-->
    <div class="caidan-item" v-if="isShowCaiDan">
      <ul>
        <li style="border-top: 1px solid #c0c0c0;">
          <router-link to="/">系招生网</router-link>
        </li>
        <li>
          <router-link to="/">专业建设</router-link>
        </li>
        <li>
          <router-link to="/">软件技术</router-link>
        </li>
        <li>
          <router-link to="/">大数据应用与技术</router-link>
        </li>
        <li>
          <router-link to="/">无人机应用技术</router-link>
        </li>
        <li>
          <router-link to="/">无人机应用技术</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    profession: () => import("@/view/Details/Profession")
  },
  data() {
    return {
      isShow: false,
      isShowCaiDan: false,
      value: "",
      iszhuanye: false
    };
  },
  methods: {
    openSouSuo() {
      this.isShow = !this.isShow;
      if (this.isShowCaiDan == true) {
        this.isShow = false;
      }
    },
    openCaiDan() {
      this.isShowCaiDan = !this.isShowCaiDan;
      if (this.isShow == true) {
        this.isShowCaiDan = false;
      }
    }
  },
  mounted() {
    // console.log(this.$route.path)
    if (this.$route.path == "/details") {
      this.iszhuanye = true;
    }
  }
};
</script>
<style>
.header {
  width: 100%;
}
.header .top {
  display: flex;
  background: url("~@/assets/3-bg@2x.png") center center no-repeat;
  background-size: 100%;
}
.header .top .logo {
  margin: 5vh 3vw;
}
.header .top .logo img {
  width: 20vw;
}
.header .top .search {
  margin: 6vh 0;
  margin-left: auto;
  margin-right: -30vw;
}
.header .top .search .ivu-input-group-append .ivu-btn,
.ivu-input-group-prepend .ivu-btn {
  border-color: #0199d5;
  background-color: #0199d5;
  color: #fff;
  border-radius: 0;
  height: 6vh;
  width: 5vw;
  margin: -6px -7px;
}
.header .top .search .ivu-input-group .ivu-input,
.ivu-input-group .ivu-input-inner-container {
  height: 6vh;
  width: 20vw;
}
.header .top .qrcode {
  margin-left: auto;
}
.header .top .qrcode img {
  width: 8vw;
  margin: 2vh 2vw;
}
.header .menu {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  line-height: 40px;
}
.header .menu ul {
  display: flex;
  justify-content: space-between;
}
.header .menu ul li {
  width: 12.5%;
  list-style: none;
  text-align: center;
  background: #0199d5;
  color: #fff;
}
.active {
  background: #ccc;
}
.header .btn {
  margin-left: auto;
  display: flex;
  background: #0199d5;
  display: none;
}
.header .btn div {
  margin: 0 1vw;
}
.header .btn .sousuo img {
  width: 70%;
  height: 80%;
}
.header .btn .caidan img {
  width: 70%;
  height: 80%;
}
.header .searchbar {
  height: 40px;
  width: 100%;
  background: #f0f0f0;
  text-align: center;
  line-height: 40px;
}
.header .caidan-item {
  width: 100%;
}
.header .caidan-item ul li {
  list-style: none;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  color: #fff;
  background: #0199d5;
  border-bottom: 1px solid #c0c0c0;
  text-align: right;
}
.header .menu ul li a {
  color: #fff;
}
.header .caidan-item ul li a {
  color: #fff;
  margin-right: 60px;
}
@media screen and (max-width: 1200px) {
  .header .top .qrcode img {
    width: 10vw;
    margin: 2vh 2vw;
  }
  .header .top .logo img {
    width: 25vw;
  }
  .header .top .search {
    margin: 4vh 0;
    margin-left: auto;
    margin-right: -25vw;
  }
  .header .top .search .ivu-input-group-append .ivu-btn,
  .ivu-input-group-prepend .ivu-btn {
    height: 5vh;
    width: 6vw;
  }
  .header .top .search .ivu-input-group .ivu-input,
  .ivu-input-group .ivu-input-inner-container {
    height: 5vh;
    width: 20vw;
  }
}
@media screen and (max-width: 1000px) {
  .header .top .qrcode img {
    width: 11vw;
    margin: 2vh 2vw;
  }
  .header .top .search {
    margin: 5vh 0;
    margin-left: auto;
    margin-right: -20vw;
  }
}
@media screen and (max-width: 750px) {
  .header .top {
    background: #0199d5;
  }
  .header .top .qrcode img {
    display: none;
  }
  .header .top .logo img {
    width: 35vw;
  }
  .header .top .search {
    display: none;
  }
  .header .menu {
    display: none;
  }
  .header .top {
    height: 50px;
  }
  .header .top .logo {
    margin: 1vh 1vw;
  }
  .header .top .logo img {
    height: 95%;
    width: 85%;
  }
  .header .btn {
    display: flex;
    margin: 1.5vh 1.5vw;
  }
}
</style>