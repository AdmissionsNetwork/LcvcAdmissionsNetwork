<template>
  <div style="background-color:#ffffff">
    <!--栏目标题-->
        <div style="padding-top: 20px;"><p align="center"><img src="@/img/title/shixunshijianjie.png" ></p></div>
    <!--栏目内容，注意下面的id不能与其他组件的重复-->
    <div id="recommendationProducts">
      <!--用于放置要滚动的元素，必须要足够长，长度必须大于里面的所有元素宽度2倍（其中一个是复制另一个的DOM）总和-->
      <div id="recommendationProductsScoll">
        <!--防止要滚动的元素-->
        <div id="recommendationProductsScoll1">
          <template v-for="item in sxjj">
            <div  style="text-align: center;">
              <img  :src="item.image" border="0" /><br/>
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
  import tu1 from '@/img/pic/shixunhuanjingb.png'
  import tu2 from '@/img/pic/750VRcenter.png'
  import tu3 from '@/img/pic/xuetujidi.png'
    export default {
        // 代码参考http://120.76.118.101/ebuy_web_mobile/#/
        name: 'ProductOfRecommendationMarquee',
        data () {
            return {
                sxjj: [
                    {image:tu1,name:'实训环境'},
                    {image:tu2,name:'750VR创意开发'},
                    {image:tu3,name:'现代学徒制试点实训'},
                ] // 获取产品集合
            }
        },
        methods: {
            play () {
                var speed = 20; // 数字越大速度越慢
                var tab = document.getElementById('recommendationProducts');
                var tab1 = document.getElementById('recommendationProductsScoll1');
                var tab2 = document.getElementById('recommendationProductsScollCopy');
                tab2.innerHTML = tab1.innerHTML; // 复制tab1的html给tab2
                function Marquee () {
                    if (tab2.offsetWidth - tab.scrollLeft <= 0) {
                        tab.scrollLeft -= tab1.offsetWidth;
                    } else {
                        tab.scrollLeft++;
                    }
                }
                var MyMar = setInterval(Marquee, speed);
                tab.onmouseover = function () {
                    clearInterval(MyMar)
                };
                tab.onmouseout = function () {
                    MyMar = setInterval(Marquee, speed)
                };
            }
        },
        mounted () {
            this.play(); // 获取数据接口方法
        }
    }
</script>
<<<<<<< HEAD
<style  scoped>
  #recommendationProducts {
    margin-top: 5px;
    background: #FFF;
    overflow:hidden;
    width: 100%;
    margin-bottom: 5px;
  }
  #recommendationProducts img {
    border: 3px solid #F2F2F2;
    height: 23vw;
    margin-right: 1vw;
    width: 30vw;
  }
  #recommendationProductsScoll {
    float: left;
    width:1400%; /*尽可能设置长，为滚动容器的两倍以上*/
  }
  #recommendationProductsScoll1,#recommendationProductsScollCopy {
    float: left;
    display:-webkit-flex; /*用弹性布局来展示每个单项滚动列的内容，可以不让单项列使用float*/
    display: flex;/*用弹性布局来展示每个单项滚动列的内容，可以不让单项列使用float*/
  }
</style>

