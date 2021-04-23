<template>
  <div class="warp">
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="login_form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { cssStyle } from "@/utils/utils";
import { mapActions } from "vuex";
export default {
  // name: "Login",
  // components: {},
  data() {
    return {
      ruleForm: {
        username: "黄树盛",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在3到15个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 15, message: "长度在5到15个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    //css特效
    // cssStyle();
  },
  methods: {
    ...mapActions(["user/login"]),
    //重置
    resetLoginForm() {
      this.$refs.ruleForm.resetFields();
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          this.$message.error("请输入正确的用户名或密码");
          return false;
        } else {
          this["user/login"](this.ruleForm).then((res) => {
            console.log(res);
            this.$message.success("登录成功");
            this.$router.push("/");
          });
        }
      });
    },
  },
};
</script>
<style  scoped>
.warp {
  width: 100%;
  height: 98vh;
  background-color: rgba(77, 236, 138, 0.3);
}
.login {
  width: 450px;
  height: 300px;
  background-color: #ccc;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #000;
}
.login_form {
  position: absolute;
  top: 22px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
