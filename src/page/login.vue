<template>
  <div class="login">
    <div class="loginMain">
      <img src="../images/loginLogo.png" alt="login.png" />
      <form>
        <div
          class="formItem"
          tabindex="-1"
          @focusin="inDiv()"
          @focusout="outDiv()"
          :class="{focus:isfocus}"
        >
          <input
            type="text"
            placeholder="手机号"
            v-model="user.phone"
            class="phone"
            @focus="validatePhone()"
          />
          <button @click="getVerifyCode()" class="verifyCodeButton" disabled>发送验证码</button>
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
          <button @click="login()" class="loginButton">登录</button>
        </div>
      </form>
    </div>
    <div class="loginFoot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from "../components/common/loginFoot";
export default {
  name: "login",
  data() {
    return {
      user: {
        phone: "",
        verifycode: ""
      },
      isfocus: false
    };
  },
  mounted() {
    if (localStorage.getItem("flag") === "isLogin") {
      this.$router.push("/place");
    }
  },
  components: {
    foot
  },
  methods: {
    getVerifyCode() {
      alert("111");
      let obj = document.getElementsByClassName("verifyCodeButton")[0];
      var countdown = 30;
      //60s倒计时实现逻辑
      function setTime(obj) {
        if (countdown == 0) {
          obj.removeAttribute("disabled");
          obj.innerHTML = "重新发送";
          countdown = 30; //60秒过后button上的文字初始化,计时器初始化;
          return;
        } else {
          obj.setAttribute("disabled", true);
          obj.innerHTML = "已发送(" + countdown + "s)";
          countdown--;
        }
        setTimeout(function() {
          setTime(obj);
        }, 1000); //每1000毫秒执行一次
      }
      setTime(obj);
      /*
      this.$http
        .post("index/index/verifyTelCode", {
          phone: this.user.phone
        })
        .then(res => {
          var obj = document.getElementsByClassName("verifyCodeButton")[0];
          var countdown = 30;
          //60s倒计时实现逻辑
          function setTime(obj) {
            if (countdown == 0) {
              obj.removeAttribute("disabled");
              obj.innerHTML = "重新发送";
              countdown = 30; //60秒过后button上的文字初始化,计时器初始化;
              return;
            } else {
              obj.setAttribute("disabled", true);
              obj.innerHTML = "已发送(" + countdown + "s)";
              countdown--;
            }
            setTimeout(function() {
              setTime(obj);
            }, 1000); //每1000毫秒执行一次
          }
          setTime(obj);
        })
        .catch(err => {
          var obj = document.getElementsByClassName("verifyCodeButton")[0];
          obj.innerHTML = "发送失败";
        });
        */
    },
    validatePhone() {
      let obj = document.getElementsByClassName("verifyCodeButton")[0];
      console.log(obj);
      let that = this;
      isPhoneNum(obj);
      function isPhoneNum(obj) {
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var phonenum = that.user.phone;
        if (!reg.test(phonenum)) {
          obj.setAttribute("disabled", true);
        } else {
          obj.removeAttribute("disabled");
        }
        var t = setTimeout(function() {
          isPhoneNum(obj);
        }, 1000); //每1000毫秒执行一次
      }

      /*
        let timer =  setInterval(function(){
        if(reg.test(phonenum)){
          alert(phonenum);
          clearInterval(timer);
        }else{
          isPhoneNum(obj);
        }
      },1000)
      */
    },
    login() {
      if (this.user.phone === "") {
        alert("手机号不能为空");
      } else {
        if (this.user.verifycode === "") {
          alert("验证码不能为空");
        } else {
          this.$http
            .post("index/index/login", {
              code: this.user.verifyCode
            })
            .then(res => {
              console.log(res);
              if (res.data.status === "0") {
                alert("验证码输入错误，请重新输入！");
              } else {
                localStorage.setItem("flag", "isLogin");
                localStorage.setItem("phone", this.user.phone);
                localStorage.setItem("verifyCode", this.user.verifycode);
                this.$store.dispatch("setIsLogin", true);
                this.$router.push({ path: "/place" });
              }
            })
            .catch(err => {
              alert("登录失败");
            });
        }
      }
    },
    inDiv() {
      this.isfocus = true;
    },
    outDiv() {
      this.isfocus = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  .loginMain {
    flex: 1;
    margin-top: 5%;
    .formItem {
      margin: 10px auto;
      height: 48px;
      width: 301px;
      display: flex;
      border: 1px solid rgb(221, 221, 221);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      color: rgb(51, 51, 51);
      .phone {
        height: 48px;
        width: 200px;
        float: left;
        padding: 0 10px;
        border: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        outline: none;
      }
      .verifyCodeButton {
        height: 48px;
        width: 100px;
        float: right;
        border: 0;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        background-color: white;
        outline: none;
      }
    }
    .focus {
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      border: 1px solid blue;
    }
    .verifyCode {
      margin: 10px auto;
      height: 48px;
      width: 280px;
      padding: 0 10px;
      border: 1px solid rgb(221, 221, 221);
      border-radius: 5px;
      color: rgb(51, 51, 51);
      outline: none;
      &:focus {
        border: 1px solid blue;
      }
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
      color: white;
      font-size: 16px;
      background-color: #4cd96f;
      outline: none;
      &:hover {
        background-color: #4cd964;
      }
    }
  }
  .loginFoot {
    flex: 0;
  }
}
</style>
