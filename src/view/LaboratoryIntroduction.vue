<!--<template xmlns="http://www.w3.org/1999/html">-->
<template>
  <div class="lab">
    <p align="center"><img src="@/img/title/shixunshijianjieb.png" ></p>

    <div id="demo">

      <div id="indemo">
        <div id="demo1">
          <a href="#"><img src="@/img/pic/shixunhuanjinga.png" border="0" /></a>
          <a href="#"><img src="@/img/pic/750VRcenter.png" border="0" /></a>
          <a href="#"><img src="@/img/pic/xuetujidia.png" border="0" /></a>
          <div>
            <span>VR实训环境介绍</span>
            <span>Ad实训室介绍鹅鹅鹅</span>
            <span>Ad教学楼介绍2222</span>
          </div>
        </div>
        <div id="demo2"></div>
      </div>
    </div>
  </div>
  <!--      &lt;!&ndash;  <marquee direction=left height=400 scrollamount=8  behavior="scroll"  scrolldelay=60 width="100%">&ndash;&gt;-->
  <!--      <img class="nvv" border=0 src="../assets/synopsis/实训环境a.png" >-->
  <!--      <img border=0 src="../assets/synopsis/750VR创意开发中心.png" >-->
  <!--      <img  border=0 src="../assets/synopsis/现代学徒制试点实训基地a.png" >-->
  <!--    </marquee>-->

</template>

<script>
    export default {
        name: "Demo",
        data(){
            return{

            }
        },
        mounted(){
            this.play();
        },
        methods:{
            play(){
                var speed=10; //数字越大速度越慢
                var tab=document.getElementById("demo");
                var tab1=document.getElementById("demo1");
                var tab2=document.getElementById("demo2");
                tab2.innerHTML=tab1.innerHTML;
                function Marquee(){
                    if(tab2.offsetWidth-tab.scrollLeft<=0)
                        tab.scrollLeft-=tab1.offsetWidth
                    else{
                        tab.scrollLeft++;
                    }
                }
                var MyMar=setInterval(Marquee,speed);
                tab.onmouseover=function() {clearInterval(MyMar)};
                tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
            }
        }
    }
</script>

<style scoped>
.lab #demo {
    margin-top: 20px;
    background: #FFF;
    overflow:hidden;
    /*border: 1px dashed #CCC;*/
    width: 100%;
    margin-bottom: 20px;
  }
.lab #demo img {
    border: 3px solid #F2F2F2;
    height: 50vh;
    /*width: 35vw;*/
    width: 380px;
  }
.lab #indemo {
    float: left;
    width: 800%;
  }
.lab #demo1 {
    float: left;
  }
.lab #demo2 {
    float: left;
  }
.lab span{
    margin-left: 140px;
    margin-right: 140px;
  }
</style>
