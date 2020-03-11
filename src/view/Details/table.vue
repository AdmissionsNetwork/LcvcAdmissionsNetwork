<template>
  <div class="table">
    <div class="title">
      <img src="@/img/title/jieyemianxiang.png" />
    </div>
    <div class="options">
      <div class="select" v-for="(item,index) in jiuyemianxiang" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      employment: {
        ruanjian: [
          { name: "在企事业单位从事计算机软件开发" },
          { name: "编程及计算机系统维护" },
          { name: "从事移动应用开发" },
          { name: "移动游戏开发" },
          { name: "前端开发" },
          { name: "软件开发" },
          { name: "软件测试" },
          { name: "技术支持" }
        ],
        dashuju: [
          { name: "本专业毕业生主要面向电子商务" },
          { name: "互联网" },
          { name: "零售" },
          { name: "保险等与大数据技术与应用相关的企业" },
          { name: "以及政府数据中心" },
          { name: "医药" },
          { name: "银行" },
          { name: "金融机构" },
          { name: "智能制造等需要收集处理高质量数据的企事业单位" }
        ],
        dianzishangwu: [
          { name: "从事企事业单位企业品牌推广" },
          { name: "网页设计与美工、动态网站开发" },
          { name: "互联网整合营销" },
          { name: "计算机调试和维护" },
          { name: "中小企业网络搭建与应用工作" }
        ],
        wurenji: [
          { name: "国土局" },
          { name: "测绘局" },
          { name: "规划局" },
          { name: "建设局" },
          { name: "设计院" },
          { name: "大专院校" },
          { name: "科研单位" },
          { name: "电影制片厂" },
          { name: "电视剧制作公司" },
          { name: "广告公司" },
          { name: "企事业单位" }
        ],
        jisuanji: [
          { name: "主要面向网络集成行业" },
          { name: "网络设备厂商及各类企事业单位" },
          { name: "在网络工程" },
          { name: "网络管理" },
          { name: "网络应用等岗位群" },
          { name: "从事网络系统设计与组建" },
          { name: "网络运行维护与安全管理" },
          { name: "网站建设与管理" },
          { name: "网络设备销售与维护" }
        ],
        dongman: [
          { name: "广告设计师" },
          { name: "影视制作" },
          { name: "动画制作" },
          { name: "游戏美工" },
          { name: "数字界面交互设计师" },
          { name: "UI设计师" },
          { name: "UED设计师" },
          { name: "UX设计师等岗位" }
        ],
        shuzimeiti: [
          { name: "VR模型设计师" },
          { name: "VR原画设计师" },
          { name: "VR动作设计师" },
          { name: "VR室内设计师" },
          { name: "VR特效设计师" },
          { name: "游戏开发工程师" },
          { name: "游戏测试程序员等岗位" }
        ]
      },
      jiuyemianxiang: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let path = this.$route.path;
      if (path == "/software") {
        //软件技术
        this.jiuyemianxiang = this.employment.ruanjian;
      } else if (path == "/bigdata") {
        //大数据
        this.jiuyemianxiang = this.employment.dashuju;
      } else if (path == "/computerapplication") {
        //计算机应用
        this.jiuyemianxiang = this.employment.jisuanji;
      } else if (path == "/drone") {
        //无人机
        this.jiuyemianxiang = this.employment.wurenji;
      } else if (path == "/anime") {
        //动漫
        this.jiuyemianxiang = this.employment.dongman;
      } else if (path == "/digitalmedia") {
        //数字媒体
        this.jiuyemianxiang = this.employment.shuzimeiti;
      } else if (path == "/e-commerce") {
        //电子商务
        this.jiuyemianxiang = this.employment.dianzishangwu;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.getInfo()
    }
  }
};
</script>
<style scoped>
.title {
  margin: 3em auto;
}
.title img{
  margin-left: 10%;
}
@media screen and (min-width: 750px) {
  .select {
    width: 40vw;
    text-align: center;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media screen and (max-width: 750px) {
  .select {
    width: 80%;
  }
  .options {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.table {
  width: 100%;
  /* margin: 10vh auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.select {
  border: 1px solid rgba(203, 203, 203, 1);
  background: rgba(246, 246, 246, 1);
  height: 55px;
  line-height: 55px;
  text-align: center;
  font-size: 14px;
}
.options {
  margin-bottom: 3rem;
}
</style>