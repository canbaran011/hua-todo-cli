<template>
  <div>
    <h2>Completed</h2>
    <el-card shadow="always" v-for="o in 4" :key="o" class="box-card">
      <div class="text item">
        <p>Two One</p>
      </div>
    </el-card>
  </div>
</template>

<script>


export default {


}
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 100%;
    margin: 10px;
  }

</style>