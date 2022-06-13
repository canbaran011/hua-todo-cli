<template>
  <div id="app">
    <div>
      <el-menu
        class="el-menu-trial"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
      >
        <el-menu-item index="1">CBG MY TODO APP</el-menu-item>

        <el-menu-item index="3" disabled>Info</el-menu-item>
        <!-- <el-menu-item>
          <el-input :xs="24" :sm="24" :md="6" :lg="12" :xl="12" placeholder="Something to search"></el-input>
        </el-menu-item> -->
        <el-menu-item index="4">
          <!-- <a href="" target="_blank">Orders</a> -->
          <el-button type="primary" @click="dialogFormVisible = true" round
            >New</el-button
          >
        </el-menu-item>
      </el-menu>
      <br>
      <el-container>
        <el-main>
          <header-top></header-top>
          <!-- <search-todo></search-todo> -->
          <uncompleted-todo></uncompleted-todo>
          <completed-todo></completed-todo>
        </el-main>
      </el-container>
    </div>

    <el-dialog  title="CREATE" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Add</el-button
        >
      </span>
    </el-dialog>
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
  data(){
    return{
       dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  }
};
</script>

<style>
.el-menu-trial {
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
