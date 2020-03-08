<template>
  <div class="details">
    <profession></profession>
    <div class="main">
        <TrainingObjectives></TrainingObjectives>
    </div>
  </div>
</template>
<script>
export default {
  // name:'details',
  components: {
    profession: () => import("@/view/Details/Profession"),
    TrainingObjectives: () => import("@/view/Details/TrainingObjectives")
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