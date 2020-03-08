<template>
  <div>
    <button>left</button>
    <div>  
       <ul>
        <li v-for="(img, index) in imgArray" :key="index">
          <a href="#">
            <img :src='img'>
            <!-- {{img}} -->
          </a>
        </li>
      </ul>
    </div>
  <button>right</button>
  </div>
</template>
<script>
export default {

data () {
    return {
      imgArray: [
        '../img/pic/大数据技术应用协同育人基地2-单独.png',
        '../img/pic/大数据技术应用协同育人基地2-单独.png',
      ]
    }
  }
}
</script>
<style scoped>
    button{
        width: 150px;
        height: 50px;
    }
</style>
