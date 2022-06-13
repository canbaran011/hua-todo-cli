<template>
  <div>
    <h2>Completed</h2>

    <el-card shadow="always" v-for="o in 4" :key="o" class="box-card">
      <div class="text item">
        <p>Two One</p>
        <div class="btn-group">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  
        methods: {
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
            completed(){
                return this.$store.getters.completedTodos
            }
        }
};
</script>

<style>
.btn-group{
  float: right;
  margin: 5px 5px;
}
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