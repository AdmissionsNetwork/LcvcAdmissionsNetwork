<template>
  <div class="spec">
    <p align="center"><img src="../assets/major/专业建设b.png" ></p>

    <div align="center" style="margin-top: 20px;">
      <Row>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/软件.png"></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/计算机.png" ></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/大数据.png" ></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/云计算.png"></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/无人机.png" ></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/动漫.png" ></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/数字媒体.png" ></i-col>
        <i-col :sm="12" :md="12"  :lg="6"><img src="../assets/major/电子商务.png"></i-col>
      </Row>
    </div>

    <div class="nv">
    </div>
  </div>

</template>

<script>
    export default {
        name: "SpecialtyConstruction"
    }
</script>

<style scoped>
.spec .nv{
  margin-top: -70px;
  width: 100%;
  height: 200px;
  background:url("../assets/major/3-bg.png") no-repeat;
  background-size: 100%;
}

</style>
