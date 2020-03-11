<template>
  <div class="header">
    <div class="top">
      <div class="logo">
        <img src="@/assets/lcvclogo.png" alt />
      </div>
      <div class="logo2">
        <img src="@/assets/lcvclogo2.png" alt />
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
    <div>
      <ul class="menu">
        <li class="first">
          <a href="http://www.lcvc.cn">学院首页</a>
        </li>

        <li class="first">
          <a href="http://www.lcvc.cn/Category_180/Index.aspx">系部首页</a>
        </li>

        <li class="first">
          <a href="#">系部概况</a>
        </li>

        <li class="first">
          <a href="#">师资队伍</a>
          <ul class="select">
            <li>
              <a href="http://www.lcvc.cn/Item/19138.aspx">网络专业团队</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/19139.aspx">软件专业群团队</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/19140.aspx">动漫专业群团队</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/19141.aspx">公共基础团队</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/19137.aspx">行政管理</a>
            </li>
          </ul>
        </li>
        <li class="first">
          <a href="#">专业设置</a>
          <ul class="select">
            <li>
              <a href="http://www.lcvc.cn/Item/13786.aspx">软件专业群介绍</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13787.aspx">动漫专业群介绍</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13788.aspx">网络专业群介绍</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13789.aspx">移动运用与开发</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13790.aspx">电子商务技术</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13791.aspx">电子信息工程技术</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Item/13792.aspx">物流信息技术</a>
            </li>
          </ul>
        </li>

        <li class="first">
          <a href="#">教学科研</a>
          <ul class="select">
            <li>
              <a href="http://www.lcvc.cn/Category_262/Index.aspx">教学与科技管理处</a>
            </li>
            <li>
              <a
                href="http://rs.lcvc.cn/suite/portal/portalView.do;jsessionid=24BACB38CA147255DFAAD4423FDC2285?siteKey=0"
              >数字化学习中心</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Category_661/Index.aspx">高等职业教育研究所</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Category_343/Index.aspx">科技创新</a>
            </li>
          </ul>
        </li>

        <li class="first">
          <a href="#">学生管理</a>
          <ul class="select">
            <li>
              <a href="http://www.lcvc.cn/Category_280/Index.aspx">学生处</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Category_293/Index.aspx">院团委</a>
            </li>
          </ul>
        </li>

        <li class="first">
          <a href="#">招生就业</a>
          <ul class="select">
            <li>
              <a href="http://www.lcvc.cn/Category_311/Index.aspx">招生网</a>
            </li>
            <li>
              <a href="http://www.lcvc.cn/Category_323/Index.aspx">就业网</a>
            </li>
          </ul>
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
        <li class="zhuanyelist">
          <a @click="openList">专业建设></a>
          <ul :class="{'openlist':list==true,'closelist':list==false}">
            <li style="border-top: 1px solid #c0c0c0;">
              <router-link to="/software">软件技术</router-link>
            </li>
            <li>
              <router-link to="/bigdata">大数据应用与技术</router-link>
            </li>
            <li>
              <router-link to="/e-commerce">电子商务技术</router-link>
            </li>
            <li>
              <router-link to="/drone">无人机应用技术</router-link>
            </li>
            <li>
              <router-link to="/computerapplication">计算机网络技术</router-link>
            </li>
            <li>
              <router-link to="/anime">动漫制作技术</router-link>
            </li>
            <li>
              <router-link to="/digitalmedia">数字媒体应用技术</router-link>
            </li>
          </ul>
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
      iszhuanye: false,
      list: false
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
    },
    openList() {
      this.list = !this.list;
    },
    showTitle() {
      if (
        this.$route.path == "/software" ||
        this.$route.path == "/bigdata" ||
        this.$route.path == "/computerapplication" ||
        this.$route.path == "/drone" ||
        this.$route.path == "/anime" ||
        this.$route.path == "/digitalmedia" ||
        this.$route.path == "/e-commerce"
      ) {
        this.iszhuanye = true;
      }
    }
  },
  mounted() {
    // console.log(this.$route.path)
    this.showTitle();
  },
  watch: {
    $route(to, from) {
      this.showTitle();
    }
  }
};
</script>
<style>
.header {
  width: 100%;
}
.header .search span {
  color: #fff !important;
}
.header .top {
  height: 148px;
  display: flex;
  background: url("~@/assets/3-bg@2x.png") center center no-repeat;
  background-size: 100%;
}
.header .top .logo {
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.header .top .logo img {
  display: block;
}
.header .top .logo2 img {
  display: none;
}
.header .top .search {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: -30vw;
}
.header .top .search .ivu-input-group-append .ivu-btn,
.ivu-input-group-prepend .ivu-btn {
  border-color: #0096d6;
  background-color: #0096d6;
  border-radius: 0;
  height: 42px;
  width: 65px;
}
.header .top .search .ivu-input-group .ivu-input,
.ivu-input-group .ivu-input-inner-container {
  height: 42px;
  width: 274px;
  border-radius: 0;
}
.header .top .qrcode {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.header .top .qrcode img {
  width: 8vw;
  margin: 0 2vw;
}
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.first {
  width: 12.5%;
  height: 40px;
  list-style: none;
  text-align: center;
  background: #0096d6;
  border: 0.2px solid #c0c0c0;
}
.first:hover {
  background: #287594;
}
.first > a {
  color: white;
  line-height: 40px;
  font-size: 20;
}
.header .select {
  display: none;
}
.header .select li {
  list-style: none;
  background: rgba(0, 150, 214, 0.8);
  height: 40px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .select li a {
  color: white;

  word-wrap: break-word;
}
.menu > li {
  display: block;
}
.menu > li a:hover + ul {
  display: block;
}
.header .menu > li:hover .select {
  display: block;
  position: relative;
  z-index: 9999;
}
.header .select li:hover {
  background: #287594;
}
.active {
  background: #ccc;
}
.header .btn {
  margin-left: auto;
  display: flex;
  background: #0096d6;
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
  background: rgba(0, 150, 214, 0.8);
  border-bottom: 1px solid #c0c0c0;
  text-align: right;
}
.header .caidan-item li:hover {
  background: #287594;
}

.header .caidan-item ul li a {
  color: #fff;
  margin-right: 60px;
}
.header .caidan-item ul .zhuanyelist ul {
  position: relative;
  z-index: 9999;
}
.openlist {
  display: block;
}
.closelist {
  display: none;
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
    display: flex;
    align-items: center;
    margin: 5vh auto;
  }
  .header .top .search .ivu-input-group-append .ivu-btn,
  .ivu-input-group-prepend .ivu-btn {
    height: 36px;
    width: 65px;
  }
  .header .top .search .ivu-input-group .ivu-input,
  .ivu-input-group .ivu-input-inner-container {
    height: 36px;
    width: 224px;
  }
}
@media screen and (max-width: 1000px) {
  .header .top .qrcode img {
    width: 11vw;
    margin: 2vh 2vw;
  }
}
@media screen and (max-width: 750px) {
  .header .top {
    background: #0096d6;
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
    display: none;
  }
  .header .top .logo2 img {
    display: inherit;
    height: 96%;
  }
  .header .btn {
    display: flex;
    margin: 1.5vh 1.5vw;
  }
}
</style>