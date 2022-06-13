<template>
  <div>
    <el-dialog title="CREATE" :visible.sync="dialogFormVisible">
      <el-form >
        <el-input 
        :value="newTodo" 
        @change="getTodo"
        placeholder="I need to do ..."
        autocomplete="off">

        </el-input>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Add</el-button
        >
      </span>
    </el-dialog>
    <el-menu
      class="el-menu-trial"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-menu-item index="1">CBG MY TODO APP</el-menu-item>
<!-- 
      <el-menu-item index="3" disabled>Info</el-menu-item> -->
      <!-- <el-menu-item>
          <el-input :xs="24" :sm="24" :md="6" :lg="12" :xl="12" placeholder="Something to search"></el-input>
        </el-menu-item> -->
      <el-menu-item index="4">
        <el-button type="primary" @click="dialogFormVisible = true" round
          >New</el-button
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed:{
    newTodo(){
      return this.$store.getters.newTodo;
    }
  },
  methods:{
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value);
    },
    addTodo(){
      this.$store.dispatch('addTodo');
      this.$store.dispatch('clearTodo');
    }
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
.el-menu-trial {
  margin: 0;
}
</style>
/*
    <el-row>
      <el-col :span="24" class="navbar__menu-box">
        <ul class="el-menu el-menu--horizontal navbar__menu">
          <!-- <li class="el-menu-item">Home</li> -->
          <li class="el-menu-item">
            <el-input placeholder="something to search"></el-input>
          </li>
          <li class="el-menu-item">
            <el-button type="primary" round>New</el-button>
          </li>
        </ul>
        <p class="navbar__title"><a href="#">MY TODO APP</a></p>
      </el-col>
    </el-row>
    */

/////////////////////////////////////////////////////

//   <el-header>



//     <!-- <el-row type="flex" class="row-bg" justify="space-around">
//       <el-col> MY TODO LIST </el-col> 

//       <el-col></el-col>
//     </el-row> -->
//   </el-header>

        // <!-- <el-form-item>
        //         <input class="form-control"
        //        :value="newTodo"
        //        @change="getTodo"
        //        placeholder="I need to...">
        // </el-form-item> -->