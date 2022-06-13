<template>
  <div id="app">
    <div>
      <header-top></header-top>
      <br />
      <el-container>
        <el-main>
          <!-- <search-todo></search-todo> -->
          <el-row>
            <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
              <uncompleted-todo></uncompleted-todo>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
              <completed-todo></completed-todo>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
// import SearchTodo from "./components/SearchTodo.vue";
import CompletedTodo from "./components/CompletedTodo.vue";
import UncompletedTodo from "./components/UncompletedTodo.vue";

export default {
  name: "app",
  components: {
    headerTop: HeaderTop,
    // searchTodo: SearchTodo,
    completedTodo: CompletedTodo,
    uncompletedTodo: UncompletedTodo,
  },
  data() {
    return {
      dialogFormVisible: false,

      formLabelWidth: "120px",
    };
  },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
