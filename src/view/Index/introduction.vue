<template>
  <div class="zhuanye">
    <div class="titleImg">
      <img src="@/img/title/zhuanyequn.png" />
    </div>
    <div class="options">
      <a @click="optionA" :class="activeA == 0 ? 'selected':'select'">软件专业群</a>
      <a @click="optionB" :class="activeB == 0 ? 'selected':'select'">网络专业群</a>
      <a @click="optionC" :class="activeC == 0 ? 'selected':'select'">动漫专业群</a>
    </div>
    <!--  -->
    <div class="introduce" v-if="option==='1' ">
      <div class="img">
        <img :src="imgArray1[index1]" />
        <div class="footerImg">
          <a @click="oneimg1">
            <img :src="footerA1==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="twoimg1">
            <img :src="footerB1==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="threeimg1">
            <img :src="footerC1==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
        </div>
      </div>
      <div class="txt">
        <p>
          软件专业群是区内一流的互联网+软件开发与应用的人才培养基地，
          包含Web软件开发、UI设计、电子商务技术、大数据技术与应用、移动智能应用开发、无人机应用技术等专业。
        </p>
        <p>
          软件技术专业自2007年开办以来，专业群始终坚持企共建模式，
          模拟实景教学，教、学、做、管一体化，通过企业需求导向的协同育人机制及人才培养模式，校企合作培养企业发展
          所需要的人才。紧贴信息产业发展需求和软件行业发展趋势开设新技术课程，加强与区域行业企业的深度合作，
          依托"创新工作室"搭建校企协同创新平台，校企合作开展软件产品研发和协同创新。2018年与深圳同耕科技股份有
          限公司开展现代学徒制人才培养，入学即与企业签订就业保障协议。毕业生就业可进入软件企业及企事业单位从事软件
          研发的相关工作，主要就业岗位有.NET/Java/Android/iOS软件开发工程师、Web前端开发工程师、软件产品支持工程
          师等，工作条件好，薪资待遇高，具备广阔的发展空间，软件专业10多年来为社会培养了大量高素质技能人才。
        </p>
      </div>
    </div>

    <div class="introduce" v-if="option==='2' ">
      <div class="img">
        <!-- <img src="@\img\pic\750-大数据技术应用协同育人基地2.png"> -->
        <img :src="imgArray2[index2]" />
        <div class="footerImg">
          <a @click="oneimg2">
            <img :src="footerA2==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="twoimg2">
            <img :src="footerB2==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="threeimg2">
            <img :src="footerC2==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
        </div>
      </div>
      <div class="txt">
        <p>
          网络专业群是学院重点专业、优势特色专业，包含计算机网络技术专业、
          云计算技术与应用专业,与业界领先的数字化解决方案领导者新华三达成专业共建校企合作。主要培养目标是国家发
          改委鼓励类信息产业的网络基础设施、大数据基础设施、高效能计算基础设施等智能化基础设施建设人才，
          胜任网络工程、网络运维、云计算技术应用、信息安全防护。
        </p>
        <p>
          专业群师资力量雄厚，由副教授、高级工程师、华为网络工程师证、
          思科高级网络工程师、H3CSE网络高级工程师、H3C网络学院讲师为骨干的优秀教学团队。坚持以就业为导向的办学理念，
          采用项目教学模式，学习过程注重实践，让学生在做中学，在学中做，学生在校期间考取H3CNE、H3CSE、HCNA、HCNP、
          HCIE、 RHCE等国际级IT认证工程师70多人，毕业生技术水平有保障，就业率超过 93%，专业综合实力位居广西区同类专业前列，
          在全国具有影响力。
        </p>
      </div>
    </div>

    <div class="introduce" v-if="option==='3' ">
      <div class="img">
        <!-- <img src="@\img\pic\750-大数据技术应用协同育人基地2.png"> -->
        <img :src="imgArray3[index3]" />
        <div class="footerImg">
          <a @click="oneimg3">
            <img :src="footerA3==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="twoimg3">
            <img :src="footerB3==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
          <a @click="threeimg3">
            <img :src="footerC3==0 ? require('@/img/on@2x.png')   : require('@/img/off@2x.png') " />
          </a>
        </div>
      </div>

      <div class="txt">
        <p>
          动漫专业群开设动漫制作技术与数字媒体技术应用两个专业。专业群针对网络媒体公司、传媒业、
          影视广告业、娱乐游戏业、动画设计公司、工业产品设计、人居环境设计和教育等行业，致力于培养能从事于影视动画、
          游戏制作、游戏美工、VR美术素材制作、广告创意、VR全景视频制作等工作岗位的，并兼具系数字影视技术、游戏动画技术、
          网络传播技术等技术能力和艺术素质的高素质创新应用型人才。
        </p>
        <p>
          专业群大学生创业团队成立科影数字工作室，承接各类数字化、三维动画、影视后期等项目，工作室原创漫画《青羽》项目
          、动画《侗族木构建筑营造技艺——风雨桥营造》《青秀山研学手册》插画等项目均得到社会各界的赞誉。
          开设的主要课程有：二维动画元件制作、二维动画制作、数码摄影技术、三维建模、三维动画制作、游戏引擎技术应用、
          三维模型设计与制作 、UI界面设计、Unity3d开发基础 、VR全景项目实训 、VR动画设计与制作 、VR美术特效制作等。
          动漫专业群和企业接轨，为向社会输送优质人才培养优秀人才。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeA: 0,
      activeB: -1,
      activeC: -1, //0为默认选中
      footerA1: 0, //0为选中
      footerB1: -1,
      footerC1: -1,

      footerA2: 0, //0为选中
      footerB2: -1,
      footerC2: -1,

      footerA3: 0, //0为选中
      footerB3: -1,
      footerC3: -1,
      option: "1",
      index1: 0,
      index2: 0,
      index3: 0,
      imgArray1: [
        require("@/img/pic/dashujuxietong.png"),
        require("@/img/pic/tonggengcenter.png"),
        require("@/img/pic/dashujuxietong.png")
      ],
      imgArray2: [
        require("@/img/pic/WechatIMG520b@2x.png"),
        require("@/img/pic/xuetujidi.png"),
        require("@/img/pic/dashujuxietong.png")
      ],
      imgArray3: [
        require("@/img/pic/750VRchuangyikaifa.png"),
        require("@/img/pic/dashujuxietongdandu.png"),
        require("@/img/pic/VRchuangyicenter2b@2x.png")
      ]
    };
  },
  methods: {
    optionA() {
      this.option = "1";
      this.activeA = "0";
      this.activeB = "-1";
      this.activeC = "-1";
    },
    optionB() {
      this.option = "2";
      this.activeA = "-1";
      this.activeB = "0";
      this.activeC = "-1";
    },
    optionC() {
      this.option = "3";
      this.activeA = "-1";
      this.activeB = "-1";
      this.activeC = "0";
    },
    oneimg1() {
      this.index1 = "0";
      this.footerA1 = "0";
      this.footerB1 = "-1";
      this.footerC1 = "-1";
    },
    twoimg1() {
      this.index1 = "1";
      this.footerA1 = "-1";
      this.footerB1 = "0";
      this.footerC1 = "-1";
    },
    threeimg1() {
      this.index1 = "2";
      this.footerA1 = "-1";
      this.footerB1 = "-1";
      this.footerC1 = "0";
    },
    oneimg2() {
      this.index2 = "0";
      this.footerA2 = "0";
      this.footerB2 = "-1";
      this.footerC2 = "-1";
    },
    twoimg2() {
      this.index2 = "1";
      this.footerA2 = "-1";
      this.footerB2 = "0";
      this.footerC2 = "-1";
    },
    threeimg2() {
      this.index2 = "2";
      this.footerA2 = "-1";
      this.footerB2 = "-1";
      this.footerC2 = "0";
    },
    oneimg3() {
      this.index3 = "0";
      this.footerA3 = "0";
      this.footerB3 = "-1";
      this.footerC3 = "-1";
    },
    twoimg3() {
      this.index3 = "1";
      this.footerA3 = "-1";
      this.footerB3 = "0";
      this.footerC3 = "-1";
    },
    threeimg3() {
      this.index3 = "2";
      this.footerA3 = "-1";
      this.footerB3 = "-1";
      this.footerC3 = "0";
    }
  }
};
</script>
<style scoped>
.introduce .txt p {
  text-indent: 2em;
}
@media screen and (max-width: 750px) {
  .select,
  .selected {
    width: 60vw;
  }
  .options {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .introduce {
    display: flex;
    flex-flow: column;

    box-sizing: border-box;
    /* box-sizing: border-box; */
  }
  .introduce img {
    padding: 1em;
    width: 100%;
  }
  .introduce .txt {
    padding: 1.5em;
    width: 100%;
    box-sizing: border-box;
  }
}
@media screen and (min-width: 750px) {
  .select,
  .selected {
    width: 10rem;
  }
  .options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .zhuanye {
    max-width: 1200px;
    padding: 1.5em;
  }
  .introduce img {
    float: left;
    padding: 30px;
    width: 50vw;
  }
  .introduce .txt {
    float: left;
    padding: 30px;
    width: 50vw;
  }
}
@media screen and (min-width: 1200px) {
  .select,
  .selected {
    width: 20rem;
    height: 10rem;
    line-height: 10rem;
  }
}
.introduce {
  width: 100%;
  display: flex;
}
.selected {
  background: rgba(1, 153, 213, 1);
  border-radius: 0.2rem 0.2rem;
  margin-bottom: 20px;
  height: 2rem;
  font-size: 14px;
  color: white;
  padding: auto;
  line-height: 2rem;
  text-align: center;
}
.select {
  border-color: rgba(1, 153, 213, 1);
  border-radius: 0.2rem 0.2rem;
  border: 1px solid rgba(1, 153, 213, 1);
  margin-bottom: 20px;
  height: 2rem;
  font-size: 14px;
  color: rgba(40, 117, 148, 1);
  padding: auto;
  line-height: 2rem;
  text-align: center;
}
.titleImg {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
/* 测试 */
.introduce .img {
  float: left;
}
.footerImg img {
  width: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.footerImg {
  clear: both;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.introduce .txt p {
  font-size: 14px;
}
</style>
