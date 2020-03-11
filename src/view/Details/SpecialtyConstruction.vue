<template>
  <div>
    <p align="center">
      <img src="@/img/title/zhuanyejianshe.png" />
    </p>

    <div align="center" class="icon">
      <Row>
        <router-link to="/software">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/ruanjianjishu.png" />
          </i-Col>
        </router-link>

        <router-link to="/computerapplication">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/jisuanji.png" />
          </i-Col>
        </router-link>

        <router-link to="/bigdata">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/dashuju.png" />
          </i-Col>
        </router-link>

        <router-link to="/computerapplication">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/yunjisuan.png" />
          </i-Col>
        </router-link>

        <router-link to="/drone">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/wurenji.png" />
          </i-Col>
        </router-link>

        <router-link to="/anime">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/dongman.png" />
          </i-Col>
        </router-link>

        <router-link to="/digitalmedia">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/shuzimeiti.png" />
          </i-Col>
        </router-link>

        <router-link to="/e-commerce">
          <i-Col :xs="12" :sm="12" :md="12" :lg="6">
            <img src="@/img/icon/dianzishangwu.png" />
          </i-Col>
        </router-link>
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
  margin-top:6vh;
  width: 45%;
  height: 45%;
}
</style>
