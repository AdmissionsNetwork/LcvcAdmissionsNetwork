<template>
  <div class="profession">
    <h1>{{biaoti}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: {
        ruanjian: "软件技术专业",
        dashuju: "大数据技术与应用专业",
        dianzishangwu: "电子商务技术专业",
        wurenji: "无人机应用技术专业",
        jisuanji: "计算机网络技术专业",
        dongman: "动漫制作技术专业",
        shuzimeiti: "数字媒体应用技术专业"
      },
      biaoti: ""
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
        this.biaoti = this.title.ruanjian;
      } else if (path == "/bigdata") {
        //大数据
        this.biaoti = this.title.dashuju;
      } else if (path == "/computerapplication") {
        //计算机应用
        this.biaoti = this.title.jisuanji;
      } else if (path == "/drone") {
        //无人机
        this.biaoti = this.title.wurenji;
      } else if (path == "/anime") {
        //动漫
        this.biaoti = this.title.dongman;
      } else if (path == "/digitalmedia") {
        //数字媒体
        this.biaoti = this.title.shuzimeiti;
      } else if (path == "/e-commerce") {
        //电子商务
        this.biaoti = this.title.dianzishangwu;
      }
    }
  },
  watch: {
    $route(to, from) {
      this.getInfo();
    }
  }
};
</script>
<style scoped>
.profession {
  width: 100%;
  height: 15vh;
  background: url("~@/assets/footerBg@2x.png") center center no-repeat;
  background-size: 100% 100%;
}
.profession h1 {
  color: #fff;
  line-height: 15vh;
  margin-left: 10%;
  font-family: fantasy;
}
@media screen and (max-width: 750px) {
  .profession h1 {
    text-align: center;
    font-size: 20px;
  }
}
</style>