<template lang="html">
  <el-form :model="userInfo" status-icon :rules="rules" ref="userInfo" label-width="100px" class="">
  <el-form-item label=账号 prop="account">
    <el-input v-model="userInfo.account" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="userInfo.password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
    <el-button @click="resetForm('userInfo')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import { mapActions } from 'vuex'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.userInfo.password !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      return {
        userInfo: {
          account: '',
          password: ''
        },
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validateUsername, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      ...mapActions(['getUserInfo']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.store.dispatch('getUserInfo',userInfo)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>




<style lang="css">
</style>
