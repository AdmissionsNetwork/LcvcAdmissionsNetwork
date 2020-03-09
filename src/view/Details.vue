<template>
  <div class="details">
    <index-header></index-header>
    <div class="main">
        <TrainingObjectives></TrainingObjectives>
        <tea></tea>
        <d-table></d-table>
    </div>
    <foo></foo>
  </div>
</template>
<script>
export default {
  // name:'details',
  components: {
    indexHeader: () => import('@/view/Index/header'),
    TrainingObjectives: () => import("@/view/Details/TrainingObjectives"),
    tea: () => import("@/view/Details/TeachingStaff23"),
    tea: () => import("@/view/Details/TeachingStaff23"),
    dTable: () => import("@/view/Details/table"),
    foo: () => import('@/view/Details/Footer'),
  }
};
</script>
<style>
.details {
  width: 100%;
}
.details .main {
  max-width: 1200px;
  margin: 0 auto;
}

</style>