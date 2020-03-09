<template>
  <div>
    <p align="center">
      <img src="@/img/title/jinengzhengshu.png" />
    </p>
    <div align="center" class="nv">
      <Row>
        <i-Col style="margin-bottom: 30px" :sm="24" :md="24" :lg="12">
          <img src="@/img/dengji.png" style="vertical-align:middle" />
          <a>游戏美术设计职业技能等级证书</a>
        </i-Col>
        <i-Col :sm="24" :md="24" :lg="12">
          <img src="@/img/dengji.png" style="vertical-align:middle" />
          <a>数字创意建模职业技能等级证书</a>
        </i-Col>
      </Row>
    </div>

    <div class="nvv">
      <p align="center">
        <img src="@/img/title/shixunshifenwei.png" />
      </p>
      <div align="center" style="margin-top: 30px">
        <Row>
          <i-Col style="margin-bottom: 30px" :sm="24" :md="24" :lg="12">
            <img src="@/img/pic/750VRcenter2.png" />
          </i-Col>
          <i-Col :sm="24" :md="24" :lg="12">
            <img src="@/img/pic/750VRcenterpinyu.png" />
          </i-Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nv {
  margin-top: 20px;
}
a {
  /* i-color: black; */
}
.nvv {
  margin-top: 20px;
}
.nv img {
  width: 50px;
  height: 70px;
}
.nv a {
  font-size: 14px;
}
@media screen and (max-width: 750px) {
  .nv img {
    width: 40px;
    height: 60px;
  }
}
</style>
