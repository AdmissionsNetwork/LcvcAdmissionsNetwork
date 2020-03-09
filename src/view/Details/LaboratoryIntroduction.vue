<template>
  <div class="labor">
    <p align="center">
      <img src="@/img/title/shixunjianjieb.png" />
    </p>

    <div class="nv">
      <marquee direction="left" scrollamount="8" scrolldelay="60" width="100%">
        <img class="nvv" border="0" src="@/img/pic/shixunhuanjinga.png" />
        <img border="0" src="@/img/pic/750VRcenter.png" />
        <img border="0" src="@/img/pic/xuetujidia.png" />
      </marquee>
    </div>
    <div align="center" class="txt"><p>VR创意中心</p></div>
  </div>
</template>

<script>
// import slider from 'vue-concise-slider'// 引入slider组件
export default {
  name: "LaboratoryIntroduction"
};
</script>
<style>
.labor p {
  margin: 8vh 0;
}
.nv img {
  margin-top: 20px;
  height: 40vh;
}
.labor .txt p{
  font-weight: 600;
}
</style>
