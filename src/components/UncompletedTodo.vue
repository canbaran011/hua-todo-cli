<template>
  <div>
    <h2>Uncompleted</h2>
    <!-- <div v-if="todos.length > 0">

    </div>
    <div>
      <p>There is no uncompleted todo item ...</p>
    </div> -->
    <el-card shadow="always" v-for="o in 4" :key="o" class="box-card">
      <div class="text item">
        <p>One One</p>
        <div class="btn-group">
          <el-button
            @click="complete(todo)"
            type="success"
            icon="el-icon-check"
            circle
          ></el-button>
          <el-button
            @click="remove(todo)"
            type="danger"
            icon="el-icon-delete"
            circle
          >
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    complete(todo) {
      this.$store.dispatch("completeTodo", todo);
    },
    remove(todo) {
      this.$store.dispatch("removeTodo", todo);
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<style>
.btn-group {
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