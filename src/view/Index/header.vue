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
                  <li><a href="http://www.lcvc.cn/Item/19138.aspx">网络专业团队</a></li>
                  <li><a href="http://www.lcvc.cn/Item/19139.aspx"> 软件专业群团队</a></li>
                  <li><a href="http://www.lcvc.cn/Item/19140.aspx">动漫专业群团队</a></li>
                  <li><a href="http://www.lcvc.cn/Item/19141.aspx">公共基础团队</a></li>
                  <li><a href="http://www.lcvc.cn/Item/19137.aspx">行政管理 </a></li>
              </ul>
            </li>
            <li class="first">
              <a href="#">专业设置</a>
              <ul class="select">
                <li><a href="http://www.lcvc.cn/Item/13786.aspx">软件专业群介绍</a></li>
                <li><a href="http://www.lcvc.cn/Item/13787.aspx">动漫专业群介绍</a></li>
                <li><a href="http://www.lcvc.cn/Item/13788.aspx">网络专业群介绍</a></li>
                <li><a href="http://www.lcvc.cn/Item/13789.aspx">移动运用与开发</a></li>
                <li><a href="http://www.lcvc.cn/Item/13790.aspx">电子商务技术</a></li>
                <li><a href="http://www.lcvc.cn/Item/13791.aspx">电子信息工程技术</a></li>
                <li><a href="http://www.lcvc.cn/Item/13792.aspx">物流信息技术</a></li>
              </ul>
            </li>

            <li class="first">
              <a href="#">教学科研</a>
              <ul class="select">
                <li><a href="http://www.lcvc.cn/Category_262/Index.aspx">教学与科技管理处</a></li>
                <li><a href="http://rs.lcvc.cn/suite/portal/portalView.do;jsessionid=24BACB38CA147255DFAAD4423FDC2285?siteKey=0">数字化学习中心</a></li>
                <li><a href="http://www.lcvc.cn/Category_661/Index.aspx">高等职业教育研究所</a></li>
                <li><a href="http://www.lcvc.cn/Category_343/Index.aspx">科技创新</a></li>
              </ul>
            </li>

            <li class="first">
              <a href="#">学生管理</a>
              <ul class="select">
                <li><a href="http://www.lcvc.cn/Category_280/Index.aspx">学生处</a></li>
                <li><a href="http://www.lcvc.cn/Category_293/Index.aspx">院团委</a></li>
               </ul>
            </li>

             <li class="first">
              <a href="#">招生就业</a>
               <ul class="select">
                <li><a href="http://www.lcvc.cn/Category_311/Index.aspx">招生网</a></li>
                <li><a href="http://www.lcvc.cn/Category_323/Index.aspx">就业网</a></li>
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
          <a href="http://www.lcvc.cn/Category_311/Index.aspx">系招生网</a>
        </li>
        <li>
          <a href="http://www.lcvc.cn/Category_944/Index.aspx">专业建设</a>
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
.menu{
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-around; 
 }
 .first{
  width: 12.5%;
  height: 40px;
  list-style: none;
  text-align: center;
  background: #0096D6;
  border: 0.2px solid white;
  
 }
 .first>a{
  color: white;
  line-height: 40px;
  font-size: 20;
 }
.select{
    display: none;
}
.select li{
    list-style: none;
    background: rgba(0, 150, 214, 0.8);
    height: 40px;
    border-bottom:  1px solid white;
}

.select li a{
  color: white;
  line-height: 40px;
}
.menu>li{
    display: block;
} 
.menu>li a:hover  +ul {
    display: block;
}
.menu>li:hover .select{
    display: block;
}
.select li:hover{
   background: #287594;
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