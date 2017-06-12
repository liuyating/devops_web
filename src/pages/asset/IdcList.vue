<template>
  <el-row class="warp" id="idc">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>资产信息管理</el-breadcrumb-item>
        <el-breadcrumb-item>机房管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <!--编辑界面-->
      <!--<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">-->
        <!--<el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">-->
          <!--<el-form-item label="书名" prop="name">-->
            <!--<el-input v-model="editForm.name" auto-complete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="作者" prop="author">-->
            <!--<el-input v-model="editForm.author" auto-complete="off"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="出版日期">-->
            <!--<el-date-picker type="date" placeholder="选择日期" v-model="editForm.publishAt"></el-date-picker>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="简介" prop="description">-->
            <!--<el-input type="textarea" v-model="editForm.description" :rows="8"></el-input>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click.native="editFormVisible = false">取消</el-button>-->
          <!--<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->
      <!--列表-->
      <el-table :data="books" highlight-current-row v-loading="listLoading" style="width: 100%;">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column prop="code" label="机房代码"></el-table-column>
        <el-table-column prop="name" label="机房名称"></el-table-column>
        <el-table-column prop="province_name" label="省份/区县"></el-table-column>
        <el-table-column prop="address" label="机房地址"></el-table-column>
        <el-table-column prop="contact" label="联系人"></el-table-column>
        <el-table-column prop="comment" label="机房备注"></el-table-column>
        <el-table-column label="操作" width="150">
          <template scope="scope">
            <el-button size="small" @click="showEditDialog(scope.$index,scope.row)">编辑</el-button>
            <el-button type="danger" @click="delIdc(scope.$index,scope.row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--<el-col :span="24" class="toolbar">-->
        <!--<el-button type="danger" @click="batchDeleteBook" :disabled="this.sels.length===0">批量删除</el-button>-->
        <!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total"-->
                       <!--style="float:right;">-->
        <!--</el-pagination>-->
      <!--</el-col>-->
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        listLoading: false
      }
    },
    beforeCreate () {
      this.$store.dispatch('getIdcList', this);
    },
    computed: {
      books () {
        return this.$store.state.Idc.idcList;
      }
    },
    methods: {
      // 显示编辑界面
      showEditDialog: function (index, row) {
        alert('功能还在开发中……')
//        this.editFormVisible = true;
//        this.editForm = Object.assign({}, row);
      },
      // 删除
      delIdc: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
          alert('功能还在开发中……')
        }).catch(() => {
        });
      }
    }
  }
</script>

<style scoped>

</style>
