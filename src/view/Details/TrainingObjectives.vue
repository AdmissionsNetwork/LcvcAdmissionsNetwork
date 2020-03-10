<template>
  <div class="aims">
    <div class="title">
      <img src="@/assets/peiyangmvbiao.png" alt />
    </div>
    <div class="content">
      <p>{{info.aims}}</p>
    </div>
    <div class="photos" align="center">
      <img src="@/assets/VRcenter-footer@2x.png" alt />
    </div>
    <div class="course">
      <div class="title">
        <img src="@/assets/zhuyaokecheng.png" alt />
      </div>
      <div class="course-item">
        <div class="border" align="center" v-for="(item,index) in info.course" :key="index">
          <div class="item" align="center">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: {
        title: {
          ruanjian: "软件技术专业",
          dashuju: "大数据技术与应用专业",
          dianzishangwu: "电子商务技术专业",
          wurenji: "无人机应用技术专业",
          jisuanji: "计算机网络技术专业",
          dongman: "动漫制作技术专业",
          shuzimeiti: "数字媒体应用技术专业"
        },
        aims: {
          ruanjian:
            "本专业紧贴信息产业发展需求和软件行业发展趋势开设新技术课程，加强与区域行业企业的深度合作，依托“深圳同耕”搭建校企协同创新平台，校企合作开展软件产品研发和协同创新，本专业始终坚持校企共建模式，模拟实景教学，教、学、做、管一体化，培养具有良好的软件相关行业职业素质和可持续发展能力，具备软件开发从业人员所必需的基本理论知识和实际开发能力，熟悉相关行业背景知识并具备一定的项目经验，适应软件开发/测试/实施/维护、信息化管理/服务等第一线需要的高素质技能型“数字工匠”。",
          dashuju:
            "本专业主要立足于广西，服务地方经济发展，依托“大数据技术应用协同育人基地”联合柳州大数据发展局、广西大数据产业发展有限公司等企事业单位，培养德、智、体、美、劳全面发展，适应企业大数据技术与应用第一线的需要，具有良好的职业道德和敬业精神、良好职业素质和人文素质，能掌握计算机操作系统、大数据程序设计、大数据技术应用、数据库开发等方面的专业知识，有一定的项目分析与实践能力，适应从事如大数据运维、数据库应用、后台开发、大数据处理、数据挖掘、机器学习、人工智能等互联网一线工作，具备“综合素质+一技之长”的高素质技能型“数字工匠”。",
          dianzishangwu:
            "本专业培养掌握足够的互联网信息技术知识, 具备互联网交互设计能力，能够使用基本测试方法及工具来测试和发现电子商务系统中存在的缺陷，精通现代电子商务活动，充分了解和理解企业商务需求，能够以最有效的手段实施电子商务，熟悉相关的国家电子商务政策和法规，具有良好职业道德、敬业与创新精神，“懂营销、会策划、精技术、擅实战”的复合型高素质“数字工匠”。",
          wurenji:
            "本专业依托无人机行业应用中心人才培养基地，培养德、智、体、美全面发展，能适应社会主义现代化建设需要和适应现代行业发展需要，具有扎实的基础理论知识，熟练掌握各项专业技能，职业素质优良，专业技术适用，实践能力突出，能在无人机应用领域面向无人机操作、无人机维护和开发等不同发展方向，从事无人机设备操作、编程、维护及生产组织和管理方面工作的高素质技能型人才。",
          jisuanji:
            "本专业依托大数据行业应用中心人才培养基地，培养学生掌握网络设备的安装与调试、局域网和广域网组建、网络布线工程、网络操作系统的安装与配置、数据库的安装与维护、云计算系统安装与维护等技能，具有良好职业道德和人文素养，能够从事网络系统方案的设计、网络设备与系统的安装与维护（含无线）、网站开发与维护、云计算系统安装与维护、网络及系统的安全保障等工作的高素质技能型“数字工匠”。",
          dongman:
            "本专业依托于VR创意开发中心、1+X认证中心等实训基地，联合行业具有一定影响力的企业，培养具有一定美术基础知识、数字界面交互设计知识、具备游戏策划方案设计与绘制游戏原画能力，具备独立完成二维和三维动画角色和场景制作的能力，具有较强的虚拟现实技术、游戏美术制作及动画制作及影视后期制作能力的高素质技能型“数字工匠”。",
          shuzimeiti:
            "本专业依托于VR创意开发中心、大数据行业应用中心、深圳同耕协同创新研发中心等实训基地，培养具有与社会需求相适应的具备C#语言基础知识、具备使用Unity3D、UE4等游戏引擎开发安卓版、苹果版、PC端等VR/AR等游戏或应用的能力、具备游戏策划方案与游戏规则设计能力、具备与团队合作完成二维和三维游戏开发的能力、掌握3D数学及应用的能力、掌握VR图片和视频制作能力、具备网络游戏客户端程序员Windows平台或跨平台引擎游戏客服端开发设计的能力的新技术数字媒体应用产业的“数字工匠”。"
        },
        course: {
          ruanjian: [
            { name: "程序设计基础" },
            { name: "网页设计与制作" },
            { name: "软件测试" },
            { name: "数据库技术与应用" },
            { name: "面向对象程序设计" },
            { name: "Web应用开发" },
            { name: "Jquery技术" },
            { name: "企业级项目开发" },
            { name: "企业项目实践课" }
          ],
          dashuju: [
            { name: "程序设计基础" },
            { name: "Linux系统管理" },
            { name: "网页设计与制作" },
            { name: "大数据与云计算导论" },
            { name: "数据库技术与应用" },
            { name: "Hadoop开发基础" },
            { name: "python编程基础" },
            { name: "面向对象程序设计" },
            { name: "Web应用开发" },
            { name: "Hadoop项目实战" },
            { name: "Jquery技术" },
            { name: "软件测试" }
          ],
          dianzishangwu: [
            { name: "SQLServer数据库基础" },
            { name: "市场营销" },
            { name: "程序设计基础" },
            { name: "前端应用基础" },
            { name: "Photoshop基础与应用" },
            { name: "PHP动态网站开发" },
            { name: "淘宝运营" },
            { name: "淘宝美工" },
            { name: "网络营销" },
            { name: "PHP项目开发" },
            { name: "计算机调试和维护" },
            { name: "中小企业网络搭建与应用工作" }
          ],
          wurenji: [
            { name: "机械制图" },
            { name: "无人机导论" },
            { name: "通用航空概论" },
            { name: "电子电工基础" },
            { name: "无人机构造与原理" },
            { name: "AutoCad制图" },
            { name: "无人机模拟飞行" },
            { name: "电机驱动与调速" },
            { name: "无人机组装与调试" },
            { name: "无线电遥控技术" },
            { name: "单片机技术应用" },
            { name: "摄影技术（含后期处理）" },
            { name: "无人机维护与维修" },
            { name: "自动控制系统" },
            { name: "无人机航拍实训" },
            { name: "无人机的操作实训" },
            { name: "无人机故障诊断" }
          ],
          jisuanji: [
            { name: "工程识图与制图" },
            { name: "综合布线工程技术" },
            { name: "数据库管理与网站开发" },
            { name: "Windows系统服务" },
            { name: "Linux系统服务" },
            { name: "网络设备安装与调试" },
            { name: "网络安全防护" },
            { name: "云计算应用技术" },
            { name: "构建无线网络" },
            { name: "网络设计与项目实施" },
            { name: "企业项目实践" }
          ],
          dongman: [
            { name: "三维动画制作" },
            { name: "三维建模" },
            { name: "二维动画制作" },
            { name: "游戏原画" },
            { name: "游戏角色设计" },
            { name: "影视后期剪辑" },
            { name: "UI界面设计" },
            { name: "UX交互设计" },
            { name: "动效设计" },
            { name: "信息可视化" }
          ],
          shuzimeiti: [
            { name: "VR特效设计" },
            { name: "VR全景视频制作" },
            { name: "VR场景设计" },
            { name: "unity3d开发基础" },
            { name: "3D数学" },
            { name: "shape入门" },
            { name: "算法基础" },
            { name: "高级界面编程" },
            { name: "VR动画设计与制作等" }
          ]
        },
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
        }
      },
      info: {
        aims: "",
        course: []
      }
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/software") {
      //软件技术
      this.info.aims = this.content.aims.ruanjian;
      this.info.course = this.content.course.ruanjian;
    } else if (path == "/bigdata") {
      //大数据
      this.info.aims = this.content.aims.dashuju;
      this.info.course = this.content.course.dashuju;
    } else if (path == "/computerapplication") {
      //计算机应用
      this.info.aims = this.content.aims.jisuanji;
      this.info.course = this.content.course.jisuanji;
    } else if (path == "/drone") {
      //无人机
      this.info.aims = this.content.aims.wurenji;
      this.info.course = this.content.course.wurenji;
    } else if (path == "/anime") {
      //动漫
      this.info.aims = this.content.aims.dongman;
      this.info.course = this.content.course.dongman;
    } else if (path == "/digitalmedia") {
      //数字媒体
      this.info.aims = this.content.aims.shuzimeiti;
      this.info.course = this.content.course.shuzimeiti;
    } else if (path == "/e-commerce") {
      //电子商务
      this.info.aims = this.content.aims.dianzishangwu;
      this.info.course = this.content.course.dianzishangwu;
    }
    console.log(this.info);
  }
};
</script>
<style>
.aims {
  width: 100%;
}
.aims .title {
  width: 202px;
  margin: 3em auto;
}
.aims .title img {
  margin-left: 15%;
}
.aims .content {
  margin: 20px 0;
  font-size: 14px;
}
.aims .content p {
  text-indent: 2em;
}
.aims .photos img {
  width: 50vw;
}
.aims .course .course-item {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.aims .course .course-item .border {
  width: 25%;
}
.aims .course .course-item .border .item {
  width: 55%;
  height: 190px;
  background: url("~@/assets/book@2x.png") center center no-repeat;
  background-size: 100% 100%;
  margin: 3vh 0;
}
.aims .course .course-item .border .item span {
  width: 75%;
  word-break: normal;
  display: block;
  white-space: pre-wrap;
  overflow: hidden;
  font-size: 17px;
  font-weight: 550;
  text-align: left;
  padding-top: 40%;
}
@media screen and (max-width: 1200px) {
  .aims .content {
    margin: 20px 0;
    font-size: 14px;
    padding: 0 1.5em 0 1.5em;
  }
  .aims .photos img {
    width: 65vw;
  }
}
@media screen and (max-width: 1000px) {
  .aims .course .course-item .border .item {
    width: 63%;
    height: 170px;
    background: url("~@/assets/book@2x.png") center center no-repeat;
    background-size: 100% 100%;
    margin: 3vh 0;
  }
}
  @media screen and (max-width: 750px) {
  .aims .photos img {
    width: 90vw;
  }
  .aims .course .course-item {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
  .aims .course .course-item {
    display: flex;
    flex-flow: wrap;
  }
  .aims .course .course-item .item {
    width: 40%;
    margin: 30px 0;
  }
  .aims .course .course-item .border {
    width: 50%;
    height: 80%;
  }
  .aims .course .course-item .border .item {
    height: 150px;
  }
  .aims .course .course-item .border .item span {
    font-size: 14px;
  }
}
</style>
