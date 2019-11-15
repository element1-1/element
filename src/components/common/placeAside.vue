<template>
  <div id="box">
    <div class="left">
      <div class="middle">
        <a href class="iconfont iconwodedingdan tooltip">
          <span class="tooltiptext">我的订单</span>
        </a>
        <span class="line"></span>
        <a href="javascript:void(0)" class="shoppingcart carttip" @click="showShoppingCart()">
          <span class="iconfont icongouwuche"></span>
          <span>购</span>
          <span>物</span>
          <span>车</span>
          <span class="carttiptext" v-if="isorder">{{totalnum}}</span>
        </a>
        <span class="line"></span>
        <a href class="iconfont iconyoujian tooltip">
          <span class="tooltiptext">我的信息</span>
        </a>
      </div>
      <div class="bottom">
        <a href class="iconfont iconerweima tooltip">
          <div class="tooltiptext">
            <img src="../../images/placeFoot5.png" style="width:100%" />
            <span style="font-size:16px;color:blue">下载手机应用</span>
            <br />
            <span style="font-size:12px;color:red">即可参加分享红包活动</span>
          </div>
        </a>
        <a class="iconfont icontubiao102" v-if="up" @click="backUp()"></a>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <span>购物车</span>
        <a class="iconfont iconxiangyou" @click="showShoppingCart()">

        </a>
      </div>
      <div class="main">
        <div class="tip" v-if="!isorder">
          <div class="iconfont iconshizhongclock74"></div>
          <div class="tip1">购物车空空如也</div>
          <div class="tip2">快去订餐吧，总有你心仪的美食</div>
        </div>
        <div class="order" v-if="isorder">
          <dl>
            <dt>
              <span>1号购物车</span>
              <a href="javascript:void(0)" @click="clearCart()">[清空]</a>
            </dt>
            <dd>
              <ul>
                <li v-for="(item,index) in cart" :key="index">
                  <div class="name">{{item.foodname}}</div>
                  <div class="num">
                    <span @click="cut(index)">-</span>
                    <input v-model="item.num" />
                    <span @click="add(index)">+</span>
                  </div>
                  <div class="money">{{item.totalmoney}}</div>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="checkout">
            <p>
              共
              <span>{{totalnum}}</span>份，总计
              <span>{{totalmoney}}</span>
            </p>
            <button @click="checkout()">去结算</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "placeAside",
  data() {
    return {
      up: false,
      upHeight: "",
      //是否有订单
      isorder: false,
      //购物车
      cartstore: JSON.parse(sessionStorage.getItem("store")) || '',
      cart: [],
      totalnum: 0,
      totalmoney: 0
    };
  },

  mounted() {
    window.addEventListener("scroll", this.showUp);
    if (!sessionStorage.getItem("store")){
      this.isorder = false;
    }else{
      this.cart = JSON.parse(this.cartstore.order.cart);
      if(this.cart != ''){
        this.isorder = true
        for(let i = 0;i < this.cart.length;i++){
        this.totalnum += this.cart[i].num;
      }
      this.totalmoney = parseFloat(this.cartstore.order.totalmoney);
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.showUp);
  },
  methods: {
    ...mapMutations({
      changeOrder: "SET_ORDER",
      changeMoney: "SET_MONEY"
    }),
    //是否显示回到顶部
    showUp() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.upHeight = scrollTop;
      this.up = this.upHeight > 60 ? true : false;
    },
    //回到顶部
    backUp() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.upHeight / 5);
        document.documentElement.scrollTop = this.upHeight + ispeed;
        if (this.upHeight === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    //控制购物车滑动效果
    showShoppingCart() {
      var obj = document.getElementById("box");
      var r = window.getComputedStyle(obj).right;
      if (r === "0px") {
        document.getElementById("box").style.right = -295 + "px";
      } else {
        document.getElementById("box").style.right = 0;
      }
    },
    //清空购物车
    clearCart() {
      this.isorder = false;
      sessionStorage.removeItem("store");
    },
    //结算并清空购物车
    checkout() {
      this.isorder = false;
      sessionStorage.removeItem("store");
      this.$router.push('/payorder')
    },
    //减少/增加商品数量
    cut(index) {
      this.cart[index].num -= 1;
      this.cart[index].totalmoney =
        this.cart[index].num * this.cart[index].foodprice;
      this.totalnum--;
      this.totalmoney -= parseFloat(this.cart[index].foodprice);
      if (this.cart[index].num == 0) {
        this.cart.splice(index, 1);
      }
    },
    add(index) {
      this.cart[index].num += 1;
      this.cart[index].totalmoney =
        this.cart[index].num * this.cart[index].foodprice;
      this.totalnum++;
      this.totalmoney += parseFloat(this.cart[index].foodprice);
    }
  },
  watch: {
    cart: {
      handler(newVal, oldVal) {
        this.changeOrder(newVal);
        //this.changeMoney(this.totalmoney);
        //sessionStorage.setItem('store',JSON.stringify(this.$store))
      },
      deep: true
    },
    totalmoney: {
      handler(newVal, oldVal) {
        this.changeMoney(newVal);
        //sessionStorage.setItem('store',JSON.stringify(this.$store))
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
#box {
  z-index: 100;
  display: flex;
  position: fixed;
  height: 100%;
  width: 330px;
  right: -295px;
  transition: right 0.5s;
  .left {
    background-color: rgb(75, 75, 75);
    width: 35px;
    .middle {
      display: flex;
      flex-direction: column;
      padding: 100px 0 230px 0;
      z-index: 15;
      .shoppingcart {
        display: flex;
        flex-direction: column;
        font-size: 14px;
      }
      .line {
        width: 20px;
        border-top: 1px solid rgb(204, 204, 204);
        margin: 0 auto;
      }

      .tooltip {
        position: relative;
        display: inline-block;
        &:hover .tooltiptext {
          visibility: visible;
        }
        .tooltiptext {
          visibility: hidden;
          width: 100px;
          background-color: rgb(75, 75, 75);
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          top: 15%;
          right: 115%;
          font-size: 14px;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent rgb(75, 75, 75);
          }
        }
      }
      .carttip{
        position: relative;
        .carttiptext{
          padding: 3px 7px;
          position: absolute;
          bottom: 100%;
          left: 23%;
          background-color: orangered;
          color: white;
          border-radius: 5px;
          &::after{
            content: "";
            position: absolute;
            top: 97%;
            left:30%;
            border-width: 5px;
            border-style: solid;
            border-color: orangered transparent transparent transparent;
            z-index: 999
          }
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: column;
      z-index: 15;
      #upTop {
        display: none;
      }

      .tooltip {
        position: relative;
        display: inline-block;
        &:hover .tooltiptext {
          visibility: visible;
        }
        .tooltiptext {
          visibility: hidden;
          width: 120px;
          background-color: white;
          text-align: center;
          padding: 10px 10px;
          position: absolute;
          z-index: 1;
          bottom: -10px;
          right: 100%;
          &::after {
            content: "";
            position: absolute;
            top: 85%;
            left: 100%;
            margin-bottom: -10px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent white;
          }
        }
      }
    }
    a {
      font-size: 16px;
      font-weight: bold;
      color: rgb(204, 204, 204);
      padding: 8px 0;
      margin: 8px 0;
      &:hover {
        background-color: rgb(38, 162, 255);
      }
    }
  }
  .right {
    width: 295px;
    background-color: rgb(230, 230, 230);
    .title {
      padding: 5px 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(221, 221, 221);
      color: rgb(51, 51, 51);
      font-size: 16px;
      background-color: white;
      a:hover {
        color: blue;
      }
      .iconxiangyou {
        font-size: 12px;
        color: rgb(51, 51, 51);
        padding: 7px 10px;
      }
    }
    .main {
      .tip {
        padding: 5px 10px;
        .iconshizhongclock74 {
          color: rgb(153, 153, 153);
          font-size: 50px;
          margin: 30px 0 20px 0;
        }
        .tip1 {
          color: rgb(51, 51, 51);
          font-size: 18px;
        }
        .tip2 {
          color: rgb(153, 153, 153);
          font-size: 12px;
        }
      }
      .order {
        dl {
          padding: 10px;
          background-color: #fff;
          border: solid #ddd;
          border-width: 1px 0;
          margin-bottom: 10px;
          dt {
            font-size: 12px;
            border-bottom: 1px solid #ddd;
            padding: 2px 3px;
            color: #666;
            display: flex;
            justify-content: space-between;
            a {
              color: #0089dc;
            }
          }
          dd {
            ul {
              margin: 0;
              padding: 0;
              li {
                margin: 5px 0;
                padding: 5px 10px;
                font-size: 12px;
                line-height: 20px;
                color: #666;
                display: flex;
                justify-content: space-between;
                .name {
                }
                .num {
                  input,
                  span {
                    font-size: 12px;
                    color: #666;
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    text-align: center;
                    border: 1px solid #ddd;
                  }
                }
                .money {
                  font-weight: 700;

                  color: #f17530;
                }
              }
            }
          }
        }
        .checkout {
          width: 275px;
          padding: 20px 10px;
          text-align: right;
          border-top: 1px solid #ddd;
          bottom: 0;
          background: #fff;
          position: absolute;
          p {
            font-size: 14px;
            span {
              color: #f74342;
            }
          }
          button {
            display: block;
            border: 0;
            margin-top: 10px;
            line-height: 32px;
            width: 100%;
            text-align: center;
            background: #fa5858;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
