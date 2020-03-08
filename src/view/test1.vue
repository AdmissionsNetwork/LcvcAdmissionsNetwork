
<template>
  <div class="slide">
    <div class="slideshow">
        <button @click="left">left</button>
         <button @click="right">right</button>
           {{mark}}
            <img :src='imgArray[mark]'>
      <!-- <ul>
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
           
          </a>
         <img >
       
        </li>
      </ul> -->
      
    </div>
    
    <div class="bar">
      <!-- <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span> -->
        <span><img src="..\img\on@2x.png"></span>
        <span><img src="..\img\on@2x.png"></span>
        <span><img src="..\img\on@2x.png"></span>

    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      mark: 0, //比对图片索引的变量
      imgArray: [
        require('../img/pic/VR创意开发中心2a.png'),
        require('../img/pic/VR创意开发中心-footer.png'),
        require('../img/pic/VR创意开发中心2a.png')
      ]
    }
  },
  methods: {
    // autoPlay () {
    //   this.mark++;
    //   if (this.mark === 3) { //当遍历到最后一张图片置零
    //     this.mark = 0
    //   }
    // },
    play () {
      setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    left(){
        this.mark++;
        if(this.mark>2){
             this.mark=0
        }
    },
    right(){
        this.mark--;
        if(this.mark<0){
             this.mark=2
        }
    }
  },
  created () {
    this.play()
  }
}

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 1024px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
  }
  .slideshow {
    width: 1024px;
    height: 320px;
  }
  img {
    width: 1024px;
    height: 320px;
  }
  button{
      height: 50px;
      width: 150px;
  }
  bar{

  }
</style>