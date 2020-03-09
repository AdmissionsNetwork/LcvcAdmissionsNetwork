<template>
  <div class="nv">
    <div class="nv">
      <div align="center" class="nvv">
        <div v-if="code">
          <img src="@/assets/code@2x.png" />
        </div>

        <p>学院地址：柳州市鱼峰区官塘大道文苑路1号</p>
        <p>邮编：545036 &nbsp;&nbsp; 电话：0772-2756270 &nbsp;&nbsp; 学院邮箱：lcvcdzb@163.com</p>
        <p>备案序号：桂ICP备11003253号</p>
        <p>桂公网安备：450203022000067号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      code: false,
      heightData: 135,
      widthd:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    };
  },
  mounted() {
    // this.mes();
    this.setMobile();
    this.getScreen();
  },
  methods: {
    getScreen() {
      let clientWidth =
        document.documentElement.clientWidth || document.body.clientHeight;

      if (clientWidth < 768) {
        //当屏幕小于768时，设置Vuex里的数据为true
        this.code = true;
        this.heightData = 220;
      } else {
        //反之，设置Vuex里的数据为false
        this.code = false;
        this.heightData = 135;
      }
    },
    setMobile() {
      //监听屏幕
      addEventListener("resize", () => {
        this.getScreen();
      });
    }
  }
};
</script>

<style scoped>
.nv {
  width: 100%;
  /* height: 135px; */
  background: url("~@/assets/footerBg.png") no-repeat;
  /*background-size: 100%;*/

  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  clear: both;
}
.nvv {
  color: #ffffff;
  padding-top: 10px;
  font-size: 14px;
}
.nvv img{
  width: 80px;
  height: 80px;
}
</style>
