<template>
  <div class="aims">
    <div class="title">
      <img src="@/assets/培养目标.png" alt />
    </div>
    <div class="content">
      <p>
        本专业依托于VR创意开发中心、1+X认证中心等实训基地，联合行业具有一定影响力的企业，
        培养具有一定美术基础知识、数字界面交互设计知识、具备游戏策划方案设计与绘制游戏原画能力，
        具备独立完成二维和三维动画角色和场景制作的能力，具有较强的虚拟现实技术、游戏美术制作及
        动画制作及影视后期制作能力的高素质技能型“数字工匠”。
      </p>
    </div>
    <div class="photos" align="center">
      <img src="@/assets/VR创意开发中心-footer@2x.png" alt />
    </div>
    <div class="course">
      <div class="title">
        <img src="@/assets/主要课程.png" alt />
      </div>
      <div class="course-item">
        <div class="item" align="center">
          <img src="@/assets/sanweidonghua.png" alt />
        </div>
        <div class="item" align="center">
          <img src="@/assets/shuma.png" alt />
        </div>
        <div class="item" align="center">
          <img src="@/assets/jianmo.png" alt />
        </div>
        <div class="item" align="center">
          <img src="@/assets/erweidonghua.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.aims {
  width: 100%;
}
.aims .title {
  width: 202px;
  margin: 2em auto;
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
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
@media screen and (max-width: 750px) {
  .aims .photos img {
    width: 90vw;
  }
  .aims .course .course-item {
    width: 80%;
    display: flex;
    margin: 0 auto;
  }
  .aims .course .course-item{
    display: flex;
    flex-flow: wrap;
  }
  .aims .course .course-item .item{
      width: 40%;
      margin: 30px 0;
  }
}
</style>
