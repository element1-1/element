<template>
  <div class="box">
    <div>
      <img :src="imgUrl" alt="logo.png" />
    </div>
    <div class="active common1">
      <router-link to="#" class="font1">首页</router-link>
    </div>
    <div class="common1">
      <router-link to="/order" class="font1">我的订单</router-link>
    </div>
    <div class="common1">
      <router-link to="/cooperation" class="font1" target="_blank">加盟合作</router-link>
    </div>
    <div class="common1">
      <router-link to="/help" class="font1" target="_blank">我的客服</router-link>
    </div>
    <div class="common2 spec1">
      <a class="font2" href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1">规则中心</a>
    </div>
    <div class="common2 spec2">
      <span class="iconfont iconweibiaoti1 tooltip"></span>
      <a class="font2 tooltip" href="javascript:void(0)">手机应用
        <div class="tooltiptext">
        <span class="title">扫一扫，手机订餐更方便</span>
        <img src="../../images/placeFoot5.png" alt="二维码" class="img" />
      </div>
      </a>
    </div>
    <div class="common1 spec3" v-if="islogin">
      <a class="font1">个人中心</a>
      <span class="iconfont iconarrow-down tooltip">
        <span class="tooltiptext">
          <router-link to="/profile" class="common">
            <span class="iconfont icongerenzhongxin-zhong"></span>个人中心
          </router-link>
          <router-link to="/profile" class="common">
            <span class="iconfont iconu_collect"></span>我的收藏
          </router-link>
          <router-link to="/profile" class="common">
            <span class="iconfont icon_dizhi"></span>我的地址
          </router-link>
          <div class="common spec" @click="loginout()">
            <span class="iconfont iconkaiji">退出登录</span>
          </div>
        </span>
      </span>
    </div>
    <div class="common1 spec3" v-if="!islogin">
      <span class="iconfont icongerenzhongxin-zhong font1" style="padding:5px"></span>
      <router-link to="/" class="font1">登录/注册</router-link>
    </div>
  </div>
</template>
<script>
import imgUrl from "@/images/placeLogo.png";
export default {
  name: "nav",
  data() {
    return {
      imgUrl
    };
  },
  computed:{
    islogin(){
      return this.$store.getters.isLogin
    }
  },
  methods:{
    loginout(){
      localStorage.removeItem('flag');
      this.$store.dispatch('setIsLogin',false);
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgb(0, 137, 220);
  .common1 {
    width: 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(0, 107, 199, 0.5);
    }
    .font1 {
      color: white;
      font-size: 16px;
    }
    .iconarrow-down {
      color: white;
      padding: 2px;
      margin-left: 5px;
      font-weight: bold;
      background-color: rgba(192, 192, 192, 0.5);
      border-radius: 3px;
    }
    .tooltip {
      position: relative;
      &:hover {
        .tooltiptext {
          visibility: visible;
        }
      }
      .tooltiptext {
        display: flex;
        flex-direction: column;
        visibility: hidden;
        width: 110px;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 130%;
        right: 0;
        border: 1px solid lightgray;
        padding: 4px 6px;
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          right: 3px;
          border-width: 6px;
          border-style: solid;
          border-color: transparent lightgray transparent transparent;
          transform: rotateZ(90deg);
        }
        .common {
          color: rgb(165, 165, 165);
          font-size: 14px;
          display: block;
          padding: 10px 15px;
          &:hover{
            background-color: rgb(245, 245, 245);
          }
          .icongerenzhongxin-zhong,
          .iconu_collect,
          .icon_dizhi,
          .iconkaiji {
            color: rgb(165, 165, 165);
            font-size: 14px;
            padding: 0 5px;
          }
        }
        .spec {
          border-top: 1px solid lightgray;
        }
      }
    }
  }
  .active {
    width: 112px;
    background-color: rgb(0, 107, 199);
  }
  .common2 {
    width: 106px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    .font2 {
      color: rgb(210, 231, 249);
      font-size: 14px;
      &:hover {
        color: white;
      }
    }
    .iconweibiaoti1 {
      width: 22px;
      height: 22px;
      font-size: 21px;
      margin-right: 5px;
      color: rgb(210, 231, 249);
    }
    .tooltip {
      position: relative;
      z-index: 30;
      &:hover {
        .tooltiptext {
          visibility: visible;
        }
      }
      .tooltiptext {
        display: flex;
        flex-direction: column;
        visibility: hidden;
        width: 180px;
        background-color: white;
        text-align: center;
        position: absolute;
        top: 160%;
        left: -60%;
        border: 1px solid lightgray;
        padding: 3px 10px;
        &::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 5%;
          border-width: 7px;
          border-style: solid;
          border-color: transparent lightgray transparent transparent;
          transform: rotateZ(90deg);
        }
        .title {
          color: rgb(51, 51, 51);
          font-size: 16px;
          font-weight: bold;
          margin: 5px 0;
        }
        .img {
          width: 100%;
          margin: 10px 0;
        }
      }
    }
  }
  .spec1 {
    margin-left: 100px;
  }
  .spec2 {
    margin-right: 50px;
  }
  .spec3 {
    &:hover {
      background-color: rgb(0, 137, 220);
    }
  }
}
</style>
