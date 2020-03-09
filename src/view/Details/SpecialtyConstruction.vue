<template>
  <div>
    <p align="center">
      <img src="@/img/title/zhuanyejiansheb.png" />
    </p>

    <div align="center" class="icon">
      <Row>
        <router-link to="/details">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/ruanjian.png" />
          </i-Col>
        </router-link>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/jisuanji.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/dashuju.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/yunjisuan.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/wurenji.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/dongman.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/shuzimeiti.png" />
        </i-Col>
        <i-Col :xs="12" :sm="12" :md="12" :lg="6">
          <img src="@/img/icon/dianzishangwu.png" />
        </i-Col>
      </Row>
      <Row></Row>
    </div>

    <div class="nv"></div>
  </div>
</template>

<script>
export default {
  name: "SpecialtyConstruction"
};
</script>

<style scoped>
.nv {
  margin-top: -70px;
  width: 100%;
  height: 200px;
  background: url("~@/img/3-bg.png") no-repeat;
  background-size: 100%;
}
.icon img {
  margin-top: 10vh;
  width: 45%;
  height: 45%;
}
</style>
