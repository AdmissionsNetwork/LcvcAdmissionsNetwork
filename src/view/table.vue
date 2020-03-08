<template>
    <div>

    <div class="titleImg">
        <img src="../img/标题切/就业面向.png">
    </div>

   
     <div class="options">
        <div class="select">广告设计</div>
        <div class="select">影视制作</div>
        <div class="select">动画设计与制作</div>
        <div class="select">游戏美工</div>
        <div class="select">后期剪辑</div>
        <div class="select">游戏原画</div>
    </div>

    </div>
</template>
<style scoped>
    .titleImg{
        margin:20px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
      @media screen and (min-width: 750px) {
        .select{
             width: 40vw;
             display: flex;
            flex-direction: row;
            flex-wrap:wrap;
            justify-content: center;
        }
        .options{
            display: flex;
            flex-direction: row;
            flex-wrap:wrap;
            justify-content: center	;
            margin:0 10vm;
        }
       
    }
     @media screen and (max-width: 750px) {
        .select{
            width: 60vw;
    
        }
        .options{
            width: 100vw;
            display: flex;
            flex-direction: row;
            flex-wrap:wrap;
            justify-content: center;
        }
    }
    .select{
        border:1px solid rgba(203, 203, 203, 1); 
        background: rgba(246, 246, 246,1);
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
</style>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>