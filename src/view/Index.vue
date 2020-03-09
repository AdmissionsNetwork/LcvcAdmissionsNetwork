<template>
    <div class="index">
        <index-header></index-header>
        <div class="main">
            <introduction></introduction>
            <introduction-tow></introduction-tow>
            <spe></spe>
            <labor></labor>
        </div>
        <foo></foo>
    </div>
</template>
<script>
export default {
    name:'index',
    components:{
        indexHeader: () => import('@/view/Index/header'),
        introduction: () => import('@/view/Index/DepartmentIntroduction'),
        introductionTow: () => import('@/view/Index/introduction'),
        foo: () => import('@/view/Details/Footer'),
        spe: () => import('@/view/Details/SpecialtyConstruction'),
        labor: () => import('@/view/Details/LaboratoryIntroduction'),
    }
}
</script>
<style>
.index .main{
    max-width: 1200px;
    margin: 0 auto;
}
</style>
