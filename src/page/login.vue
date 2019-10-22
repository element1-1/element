<template>
  <div>
    <div class="loginMain">
      <img src="../images/login.png" alt="login.png" />
      <form action="login()">
        <div class="formItem">
          <input type="text" placeholder="手机号" v-model="phone" class="phone" />
          <button v-on:click="getVerifyCode()" class="verifyCodeButton">发送验证码</button>
        </div>
        <input type="text" placeholder="验证码" v-model="verifyCode" class="verifyCode" />
        <p class="note">新用户登录即自动注册，并表示已同意
          <a href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18" class="noteLink">《用户服务协议》</a>和
          <a href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html" class="noteLink">《隐私权政策》</a>
        </p>
        <button type="submit" class="loginButton">登录</button>
      </form>
    </div>
    <div class="loginFoot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from "../components/common/foot";
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
    getVerifyCode() {
      this.$http
        .post('/api/element/public/index.php/index/index/verifytelcode', {
          phone: this.phone
        })
        .then(res => {
          document.getElementsByClassName("verifyCodeButton").innerHTML = "已发送";
        })
        .catch(err => {
          document.getElementsByClassName("verifyCodeButton").innerHTML = "发送失败";
        });
    },
    login(){
      alert("scuess")
    }
  }
};
</script>

<style scoped>
.formItem{
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
.noteLink{
  text-decoration: none;
}
.noteLink:link{
  color: rgb(35, 149, 255)
}
.noteLink:visited{
  color: rgb(35, 149, 255);
}
.loginButton {
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
