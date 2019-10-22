<template>
  <div>
    <div class="loginMain">
      <img src="../images/login.png" alt="login.png" />
      <form action>
        <div class="formItem1">
          <input type="text" placeholder="手机号" v-model="phone" class="phone" />
          <button v-on:click="postVerifyCode()" class="verifyCodeButton">发送验证码</button>
        </div>
        <input type="text" placeholder="验证码" v-model="verifyCode" class="verifyCode" />
        <p class="note">新用户登录即自动注册，并表示已同意《用户服务协议》和《隐私权政策》</p>
        <button type="submit" class="login">登录</button>
      </form>
    </div>
    <div class="loginFoot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from "/element/src/components/common/foot";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      verifyCode: ""
    };
  },
  components: {
    foot
  },
  methods: {
    postVerifyCode() {
      this.$http
        .post("http://47.107.160.141//element/public/index.php/index/index/verifytelcode", {
          phone: this.phone
        })
        .then(res => {
          document.getElementsByClassName("verifyCodeButton").innerHTML = "已发送";
        })
        .catch(err => {
          document.getElementsByClassName("verifyCodeButton").innerHTML = "发送失败";
        });
    }
  }
};
</script>

<style scoped>
.formItem1{
  display: block;
  margin: 21px auto;
  height: 48px;
  width: 301px;
}
.phone {
  height: 48px;
  width: 200px;
  float: left;
  border: 1px solid rgb(221, 221, 221);
  border-right: 0px solid white;
  border-radius: 5px 0px 0px 5px;
  color: rgb(51, 51, 51);
}
.verifyCodeButton {
  height: 52px;
  width: 100px;
  float: right;
  border: 1px solid rgb(221, 221, 221);
  border-left: 0px solid white;
  border-radius: 0px 5px 5px 0px;
  color: rgb(51, 51, 51);
  background-color: white;
}
.verifyCode {
  display: block;
  margin: 21px auto;
  height: 48px;
  width: 300px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 5px;
  color: rgb(51, 51, 51);
}
.note{
  margin: 21px auto;
  height: 48px;
  width: 300px;
  color: rgb(51, 51, 51);
  font-size: 15px;
}
.login {
  display: block;
  margin: 21px auto;
  height: 48px;
  width: 300px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 5px;
  color: rgb(51, 51, 51);
  background-color: rgb(76, 271, 111);
}
.loginFoot{
  margin-top: 125px;
}
</style>
