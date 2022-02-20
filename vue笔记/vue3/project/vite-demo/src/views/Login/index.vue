<template>
  <div class="login">
    <p class="login-title">前端学霸</p>
    <div class="login-content">
      <el-form
        ref="ruleForm"
        :model="temp"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="temp.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Create</el-button
          >
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router"; //导入路由
// import { Login } from "@/api";
import { Login } from "../../api/index.js";
const router = useRouter();
const temp = reactive({
  name: "admin123",
  password: "admin123",
});

const rules = reactive({
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 18,
      message: "Length should be 3 to 18",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 3,
      max: 18,
      message: "Length should be 3 to 18",
      trigger: "blur",
    },
  ],
});
const ruleForm = ref(null);
function submitForm() {
  ruleForm.value.validate((valid) => {
    if (valid) {
      Login(temp).then((res) => {
        const { code, msg } = res.data;
        if (code === 200) {
          router.push("/home");
        } else {
          console.log(msg);
        }
      });
    } else {
      console.log("error submit!!");
      return false;
    }
  });
}

function resetForm() {}
</script>