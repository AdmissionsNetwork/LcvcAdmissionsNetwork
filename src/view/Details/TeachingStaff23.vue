<template>
  <div class="shixunandjiuye">
    <div v-if="isShow">
      <p align="center" class="title">
        <img src="@/img/title/jinengzhengshu.png" />
      </p>
      <div align="center" class="certificate">
        <Row>
          <i-Col :xs="24" :sm="24" :md="24" :lg="12" v-for="(item,index) in zhengshu" :key="index">
            <img src="@/img/dengji.png" style="vertical-align:middle" />
            <a>{{item.name}}</a>
          </i-Col>
        </Row>
      </div>
    </div>

    <div class="practicaltraining">
      <p align="center" class="title">
        <img src="@/img/title/shixunshifenwei.png" />
      </p>
      <div align="center" style="margin-top: 30px">
        <Row>
          <i-Col :xs="24" :sm="24" :md="24" :lg="12">
            <img src="@/img/pic/750VRcenter2.png" />
          </i-Col>
          <i-Col :xs="24" :sm="24" :md="24" :lg="12">
            <img src="@/img/pic/750VRcenterpinyu.png" />
          </i-Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificate: {
        ruanjian: [],
        dashuju: [],
        dianzishangwu: [],
        wurenji: [],
        jisuanji: [],
        dongman: [
          { name: "3D引擎技术应用职业技能等级证书" },
          { name: "3D引擎技术应用职业技能等级证书" }
        ],
        shuzimeiti: [
          { name: "游戏美术设计职业技能等级证书" },
          { name: "数字创意建模职业技能等级证书" }
        ]
      },
      zhengshu: [],
      isShow: true
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/software") {
      //软件技术
      this.zhengshu = this.certificate.ruanjian;
    } else if (path == "/bigdata") {
      //大数据
      this.zhengshu = this.certificate.dashuju;
    } else if (path == "/computerapplication") {
      //计算机应用
      this.zhengshu = this.certificate.jisuanji;
    } else if (path == "/drone") {
      //无人机
      this.zhengshu = this.certificate.wurenji;
    } else if (path == "/anime") {
      //动漫
      this.zhengshu = this.certificate.dongman;
    } else if (path == "/digitalmedia") {
      //数字媒体
      this.zhengshu = this.certificate.shuzimeiti;
    } else if (path == "/e-commerce") {
      //电子商务
      this.zhengshu = this.certificate.dianzishangwu;
    }
    this.isShowZhengShu();
  },
  methods: {
    isShowZhengShu() {
      if (this.zhengshu.length == 0) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
.shixunandjiuye {
  width: 100%;
}
.shixunandjiuye .title{
  margin: 3em auto;
}
.certificate {
  width: 100%;
}
.practicaltraining {
  margin-top: 20px;
  width: 100%;
}

.certificate a {
  font-size: 14px;
}
@media screen and (max-width: 750px) {
  .practicaltraining {
    margin-top: 20px;
    width: 100%;
    padding: 0 1.5em;
  }
  .practicaltraining div img {
    width: 100%;
  }
  .certificate img{
    margin-top:-3px;
  }
  .certificate a{
    line-height: 80px;
  }
}
</style>
