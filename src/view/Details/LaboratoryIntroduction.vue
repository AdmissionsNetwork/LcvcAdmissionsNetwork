<template>
  <div style="background-color:#ffffff">
    <!--栏目标题-->
    <div style="padding-top: 20px;">
      <p align="center">
        <img src="@/img/title/shixunshijianjie.png" />
      </p>
    </div>
    <!--栏目内容，注意下面的id不能与其他组件的重复-->
    <div id="recommendationProducts">
      <!--用于放置要滚动的元素，必须要足够长，长度必须大于里面的所有元素宽度2倍（其中一个是复制另一个的DOM）总和-->
      <div id="recommendationProductsScoll">
        <!--防止要滚动的元素-->
        <div id="recommendationProductsScoll1">
          <template v-for="item in sxjj">
            <div style="text-align: center;" >
              <img :src="item.image" border="0" />
              <br />
              {{item.name}}
            </div>
          </template>
        </div>
        <!--这里用于在JS中复制要滚动的元素-->
        <div id="recommendationProductsScollCopy"></div>
      </div>
    </div>
  </div>
</template>
<script>
import tu1 from "@/img/sxslb/1.jpg";
import tu2 from "@/img/sxslb/2.jpg";
import tu3 from "@/img/sxslb/3.jpg";
import tu4 from "@/img/sxslb/4.jpg";
import tu5 from "@/img/sxslb/5.jpg";
import tu6 from "@/img/sxslb/6.jpg";
import tu7 from "@/img/sxslb/7.jpg";
import tu8 from "@/img/sxslb/9.jpg";
import tu9 from "@/img/sxslb/10.jpg";
import tu10 from "@/img/sxslb/11.jpg";
export default {
  // 代码参考http://120.76.118.101/ebuy_web_mobile/#/
  name: "LaboratoryIntroduction",
  data() {
    return {
      sxjj: [
        { image: tu1, name: "大师工作坊" },
        { image: tu2, name: "大数据技术应用协同育人基地" },
        { image: tu3, name: "大数据技术应用协同育人基地2" },
          { image: tu4, name: "深圳同耕协同创新研发中心" },
          { image: tu5, name: "实训环境" },
          { image: tu6, name: "实训机房" },
          { image: tu7, name: "现代学徒制试点实训基地" },
          { image: tu8, name: "VR创意开发中心" },
          { image: tu9, name: "VR创意开发中心《青羽》项目组" },
          { image: tu10, name: "VR创意开发中心2" }
      ] // 获取产品集合
    };
  },
  methods: {
    play() {
      var speed = 20; // 数字越大速度越慢
      var tab = document.getElementById("recommendationProducts");
      var tab1 = document.getElementById("recommendationProductsScoll1");
      var tab2 = document.getElementById("recommendationProductsScollCopy");
      tab2.innerHTML = tab1.innerHTML; // 复制tab1的html给tab2
      function Marquee() {
        if (tab2.offsetWidth - tab.scrollLeft <= 0) {
          tab.scrollLeft -= tab1.offsetWidth;
        } else {
          tab.scrollLeft++;
        }
      }
      var MyMar = setInterval(Marquee, speed);
      tab.onmouseover = function() {
        clearInterval(MyMar);
      };
      tab.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
      };
    }
  },
  mounted() {
    this.play(); // 获取数据接口方法
  }
};
</script>

<style  scoped>
#recommendationProducts {
  margin-top: 5px;
  background: #fff;
  overflow: hidden;
  width: 100%;
  margin-bottom: 5px;
}
#recommendationProducts img {
  border: 3px solid #f2f2f2;
  height: 23vw;
  margin-right: 1vw;
  width: 33vw;
}
#recommendationProductsScoll {
  float: left;
  width: 1400%; /*尽可能设置长，为滚动容器的两倍以上*/
}
#recommendationProductsScoll1,
#recommendationProductsScollCopy {
  float: left;
  display: -webkit-flex; /*用弹性布局来展示每个单项滚动列的内容，可以不让单项列使用float*/
  display: flex; /*用弹性布局来展示每个单项滚动列的内容，可以不让单项列使用float*/
}
@media screen and (max-width: 750px) {
  #recommendationProducts img {
    border: 3px solid #f2f2f2;
    height: 35vw;
    margin-right: 1vw;
    width: 50vw;
  }
}
</style>

