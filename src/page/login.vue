<template>
  <div>
    <div class="loginMain">
      <img src="../images/login.png" alt="login.png" />
      <form>
        <div class="formItem">
          <input type="text" placeholder="手机号" v-model="user.phone" class="phone" />
          <button @click="getVerifyCode()" class="verifyCodeButton">发送验证码</button>
        </div>
        <div>
          <input type="text" placeholder="验证码" v-model="user.verifycode" class="verifyCode" />
        </div>
        <div>
          <p class="note">
            新用户登录即自动注册，并表示已同意
            <a
              href="https://h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&key=ruleQue18"
              target="_blank"
            >《用户服务协议》</a>和
            <a
              href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
              target="_blank"
            >《隐私权政策》</a>
          </p>
        </div>
        <div>
          <button type="button" @click="login()" class="loginButton">登录</button>
        </div>
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
      user: {
        phone: "",
        verifycode: ""
      }
    };
  },
  mounted(){
    if(localStorage.getItem('flag') === 'isLogin'){
      this.$router.push('/place')
    }
  },
  components: {
    foot
  },
  methods: {
    getVerifyCode() {
      this.$http
        .post("index/index/verifyTelCode", {
          phone: this.user.phone
        })
        .then(res => {
          document.getElementsByClassName("verifyCodeButton")[0].value =
            "已发送";
        })
        .catch(err => {
          document.getElementsByClassName("verifyCodeButton")[0].value =
            "发送失败";
        });
    },
    login() {
      if(this.user.phone === ""){
        alert("手机号不能为空")
      }else {
        if(this.user.verifycode === ""){
        alert("验证码不能为空");
      }else{
         this.$http
            .post("index/index/login", {
              code: this.user.verifyCode
            })
            .then(res => {
              console.log(res);
              if(res.data.status === 0){
                alert("验证码输入错误，请重新输入！");
              }else{
                localStorage.setItem('flag','isLogin');
                this.$store.dispatch('setIsLogin',true);
                this.$router.push({ path: "/place" });
              }
            })
            .catch(err => {
              alert("登录失败");
            });
      }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 100%;
  .loginMain {
    flex: 1 0 auto;
    margin-top: 5%;
    .formItem {
      margin: 10px auto;
      height: 48px;
      width: 301px;
      display: flex;
      .phone {
        height: 48px;
        width: 200px;
        float: left;
        padding: 0 10px;
        border: 1px solid rgb(221, 221, 221);
        border-right: 0px solid white;
        border-radius: 5px 0px 0px 5px;
        color: rgb(51, 51, 51);
      }
      .verifyCodeButton {
        height: 50px;
        width: 100px;
        float: right;
        border: 1px solid rgb(221, 221, 221);
        border-left: 0px solid white;
        border-radius: 0px 5px 5px 0px;
        color: rgb(51, 51, 51);
        background-color: white;
      }
    }
    .verifyCode {
      margin: 10px auto;
      height: 48px;
      width: 280px;
      padding: 0 10px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      color: rgb(51, 51, 51);
    }
    .note {
      margin: 10px auto;
      height: 48px;
      width: 300px;
      color: #999;
      font-size: 14px;
      text-align: left;
      a:link {
        color: rgb(35, 149, 255);
      }
      a:visited {
        color: rgb(35, 149, 255);
      }
    }
    .loginButton {
      margin: 10px auto;
      height: 48px;
      width: 300px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      color: rgb(51, 51, 51);
      background-color: #4cd96f;
      outline: none;
    }
  }
  .loginFoot {
    flex: 0 0 auto;
  }
}
</style>
