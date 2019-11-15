<template>
  <div class="box">
    <div class="title">
      <h3>
        <span class="span1">待评价订单</span>
        <span class="span2">
          带(
          <span>*</span>)标志为必填项
        </span>
      </h3>
    </div>
    <div class="main">
      <div class="storename">
        <div class="shopinfo">
          <a href="javascript:void(0)" class="img" @click="toshop()">
            <img src="../images/store.png" alt />
          </a>
          <div>
            <h3>
              <a href="javascript:void(0)" @click="toshop">千秋百味牛排·意面·饭(福大店)</a>
            </h3>
            <p>
              <span class="span1">香煎鸡胸排意面+煎蛋+沙拉时蔬-无饮料1份</span>共
              <span class="span2">1</span>个菜品
            </p>
          </div>
        </div>
        <span class="ordertime">下单时间：</span>
        <a href="javascript:void(0)" class="storeshop" @click="shopstore()">收藏商家</a>
      </div>
      <div class="ratetext">
        <div class="div12">
          <span class="type">
            <span>*</span>商家服务
          </span>
          <div class="level">
            <p>
              <span class="span1" v-for="(item,index) in list" :key="index">
                <a
                  href="javascript:void(0)"
                  class="iconfont iconu_collect"
                  :class="index > selectstar1 ? 'dark' : 'light'"
                  @mouseover="changelev1(index)"
                  @mouseleave="recoverlev1()"
                  @click="selectlev1(index)"
                ></a>
              </span>
              <span class="span2 shoplev">点击星星打分</span>
            </p>
            <div class="tooltiptext" v-if="clickstar1flag">
              <textarea placeholder="说说哪里做到不好，帮助商家改进" v-model="textarea1"></textarea>
              <p>
                <span
                  v-for="(item,index) in tiplist1[selectstar1]"
                  :key="index"
                  @click="changetip1(index)"
                >{{item.text}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="div12">
          <span class="type">
            <span>*</span>评价骑手
          </span>
          <div class="level">
            <p>
              <span class="span1" v-for="(list,index) in list" :key="index">
                <a
                  href="javascript:void(0)"
                  class="iconfont iconu_collect"
                  :class="index > selectstar2 ? 'dark' : 'light'"
                  @mouseover="changelev2(index)"
                  @mouseleave="recoverlev2()"
                  @click="selectlev2(index)"
                ></a>
              </span>
              <span class="span2 ridelev">给骑手打分</span>
            </p>
            <div class="tooltiptext" v-if="clickstar2flag">
              <textarea placeholder="请把您的不满告诉我们" v-model="textarea2"></textarea>
              <p>
                <span
                  v-for="(item,index) in tiplist2[selectstar2]"
                  :key="index"
                  @click="changetip2(index)"
                >{{item.text}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="div3">
          <span class="type">
            <span>*</span>送餐速度
          </span>
          <div class="level">
            <div class="time">
              <div class="timeslider"></div>
              <i class="timehandler" @mousedown="changeRandomTime($event)"></i>
              <p>
                <span @click="changetime(0)">0</span>
                <span @click="changetime(25)">0.5h</span>
                <span @click="changetime(50)">1h</span>
                <span @click="changetime(75)">1.5h</span>
                <span @click="changetime(100)">2h</span>
              </p>
            </div>
            <input v-model="ridetime" disabled />
          </div>
        </div>
        <div class="div4">
          <span class="type">评价菜品</span>
        </div>
        <div class="div5">
          <button @click="submitrate()">提交评价</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rate",
  data() {
    return {
      //是否收藏商家
      isstore: false,
      //星星列表
      list: [0, 1, 2, 3, 4],
      //商家评价/骑手评价的鼠标移入的星星位置
      selectstar1: -1,
      selectstar2: -1,
      //商家评价/骑手评价的鼠标点击的星星位置
      clickstar1: -1,
      clickstar2: -1,
      //商家评价/骑手评价的鼠标是否点击了星星
      clickstar1flag: false,
      clickstar2flag: false,
      //商家评价/骑手评价的提示框标签列表/文本框内容
      tiplist1: [
        [
          { text: "服务态度差" },
          { text: "送餐太慢" },
          { text: "菜品少送或送错" }
        ],
        [
          { text: "服务态度一般" },
          { text: "送餐态度一般" },
          { text: "味道一般" }
        ],
        [
          { text: "服务态度一般" },
          { text: "送餐态度一般" },
          { text: "味道一般" }
        ],
        [
          { text: "送餐快" },
          { text: "味道棒" },
          { text: "服务好" },
          { text: "分量足" },
          { text: "干净卫生" }
        ],
        [
          { text: "送餐快" },
          { text: "味道棒" },
          { text: "服务好" },
          { text: "分量足" },
          { text: "干净卫生" }
        ]
      ],
      textarea1: "",
      tiplist2: [
        [
          { text: "态度不好" },
          { text: "送的太早或太晚" },
          { text: "送错或少送" },
          { text: "菜或饮料漏/洒了" }
        ],
        [
          { text: "态度不好" },
          { text: "送的太早或太晚" },
          { text: "送错或少送" },
          { text: "菜或饮料漏/洒了" }
        ],
        [
          { text: "态度不好" },
          { text: "送的太早或太晚" },
          { text: "送错或少送" },
          { text: "菜或饮料漏/洒了" }
        ],
        [
          { text: "态度很好" },
          { text: "送餐很快" },
          { text: "颜值高" },
          { text: "帮带生活垃圾" }
        ],
        [
          { text: "态度很好" },
          { text: "送餐很快" },
          { text: "颜值高" },
          { text: "帮带生活垃圾" }
        ]
      ],
      textarea2: "",
      //滑动条输入后的计算配送时间
      ridetime: "请选择配送时间"
    };
  },
  methods: {
    //收藏商家
    shopstore() {
      this.isstore = !this.isstore;
      if (!this.isstore) {
        //由于a的href不跳转，故a:visited不起作用，直接在这里改变连接访问后颜色
        document.getElementsByClassName("storeshop")[0].style.color =
          "orangered";
      } else {
        document.getElementsByClassName("storeshop")[0].style.color = "#999";
      }
    },
    //提交评价
    submitrate() {
      this.$http.post("index/center/appraiseOrder",{
        orderid: 1,
        storeStar: this.clickstar1 + 1,
        horseStar: this.clickstar2 + 1,
        storeInput: this.textarea1,
        horseInput: this.textarea2,
        speed: this.ridetime
      })
      .then(res => {
        if(res.data === 1){
          this.$router.push('/center')
        }else{
          alert('提交失败')
        }
      })
      .catch(err => {
        alert('提交失败')
        this.$router.push('/rate')
      })
    },
    //跳转到商家详情页面
    toshop() {
      this.$router.push("/storeDetail");
    },
    //控制商家评价星星样式
    changelev1(lev) {
      this.selectstar1 = lev;
      let t = document.getElementsByClassName("shoplev")[0];
      this.startotext(t, lev);
    },
    recoverlev1() {
      if (this.clickstar1 == -1) {
        this.selectstar1 = -1;
        document.getElementsByClassName("shoplev")[0].innerHTML =
          "点击星星打分";
      } else {
        this.selectstar1 = this.clickstar1;
      }
    },
    selectlev1(lev) {
      let t = document.getElementsByClassName("shoplev")[0];
      this.startotext(t, lev);

      this.clickstar1 = lev;
      this.clickstar1flag = true;
    },
    //点击商家评论框标签后标签减少，文本框内容改变
    changetip1(index) {
      this.textarea1 += this.tiplist1[this.selectstar1][index].text + " ";
      this.tiplist1[this.selectstar1].splice(index, 1);
    },
    //控制骑手评价星星样式
    changelev2(lev) {
      this.selectstar2 = lev;
      let t = document.getElementsByClassName("ridelev")[0];
      this.startotext(t, lev);
    },
    recoverlev2() {
      if (this.clickstar2 == -1) {
        this.selectstar2 = -1;
        document.getElementsByClassName("ridelev")[0].innerHTML = "给骑手打分";
      } else {
        this.selectstar2 = this.clickstar2;
      }
    },
    selectlev2(lev) {
      let t = document.getElementsByClassName("ridelev")[0];
      this.startotext(t, lev);

      this.clickstar2 = lev;
      this.clickstar2flag = true;
    },
    //点击骑手评论框标签后标签减少，文本框内容改变
    changetip2(index) {
      this.textarea2 += this.tiplist2[this.selectstar2][index].text + " ";
      this.tiplist2[this.selectstar2].splice(index, 1);
    },
    //根据星星样式改变文本内容
    startotext(t, lev) {
      switch (lev) {
        case 0: {
          t.innerHTML = "极差";
          break;
        }
        case 1: {
          t.innerHTML = "失望";
          break;
        }
        case 2: {
          t.innerHTML = "一般";
          break;
        }
        case 3: {
          t.innerHTML = "满意";
          break;
        }
        case 4: {
          t.innerHTML = "惊喜";
          break;
        }
      }
    },
    //送餐速度
    changetime(t) {
      let s = document.getElementsByClassName("timeslider")[0];
      let h = document.getElementsByClassName("timehandler")[0];
      s.style.width = t + "%";
      h.style.left = t + "%";
      if (t == 0) {
        this.ridetime = "请选择送达时间";
      } else {
        this.ridetime = (t / 100) * 120 + "分钟送达";
      }
    },
    changeRandomTime(e) {
      let s = document.getElementsByClassName("timeslider")[0];
      let h = document.getElementsByClassName("timehandler")[0];
      let that = this;

      document.onmousemove = function(e) {
        if (e.clientX >= 531) {
          h.style.left = 240 + "px";
          s.style.width = 240 + "px";
          this.ridetime = 120 + "分钟送达";
        } else {
          if (e.clientX <= 291) {
            h.style.left = 0;
            s.style.width = 0;
            this.ridetime = "请选择送达时间";
          } else {
            h.style.left = e.clientX - 291 + "px";
            s.style.width = e.clientX - 291 + "px";
            debugger
            that.ridetime = Math.round(((e.clientX - 291) / 240) * 120) + "分钟送达";
          }
        }
      }
      document.onmouseup = function() {
        document.onmousemove = null;
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 972px;
  height: 638px;
  padding: 20px 18px;
  border: 1px solid #eee;
  margin-left: 170px;
  background-color: #fff;
  .title h3 {
    padding: 0 20px 11px;
    border-bottom: 2px solid #f4f4f4;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    .span1 {
    }
    .span2 {
      font-size: 12px;
      font-weight: 400;
      color: #999;
      span {
        color: #f74342;
      }
    }
  }
  .main {
    .storename {
      padding: 10px 32px;
      margin-top: 12px;
      background-color: #f7f7f7;
      font-size: 14px;
      color: #999;
      display: flex;
      .shopinfo {
        width: 56%;
        height: 50px;
        padding: 4px 0;
        display: flex;
        .img img {
          width: 48px;
          height: 48px;
          margin: 0 13px 0 0;
        }
        div {
          max-width: 80%;
          display: flex;
          flex-direction: column;
          text-align: left;
          h3 {
            padding: 0;
            margin: 0;
            a {
              color: #333;
              font-weight: normal;
              font-size: 16.38px;
            }
          }
          p {
            padding: 0;
            margin: 0;
            .span2 {
              color: #f74342;
            }
          }
        }
      }
      .ordertime {
        width: 314px;
        padding: 20px 0;
        text-align: left;
      }
      .storeshop {
        width: 86px;
        padding: 20px 0;
        &:hover {
          color: orangered;
        }
      }
    }
    .ratetext {
      margin: 38px 0 0;
      .div12 {
        margin-bottom: 30px;
        display: flex;
        .type {
          color: #333;
          font-size: 16px;
          margin-right: 27px;
          span {
            color: #f74342;
            margin-right: 7px;
          }
        }
        .level {
          p {
            margin: 0;
            text-align: left;
            .span1 {
              a {
                padding: 4px;
                margin: 0 3px;
                background-color: #eee;
                &:hover {
                  background-color: #f74342;
                }
              }
              .iconu_collect {
                font-size: 18px;
                color: white;
              }
              .dark {
                background-color: #eee;
              }
              .light {
                background-color: #f74342;
              }
            }
            .span2 {
              margin-left: 16px;
              font-size: 14px;
              color: #999;
            }
          }
          .tooltiptext {
            width: 379px;
            position: relative;
            padding: 10px 12px;
            margin-top: 14px;
            background-color: #f7f7f7;
            &::after {
              content: "";
              position: absolute;
              bottom: 100%;
              left: 7%;
              border-width: 10px;
              border-style: solid;
              border-color: transparent transparent #f7f7f7 transparent;
            }
            textarea {
              width: 357px;
              height: 30px;
              background-color: #fff;
              padding: 10px;
              resize: none; //不可改变大小
              border: 1px solid #eee;
            }
            p {
              margin-top: 10px;
              text-align: left;
              span {
                padding: 3px 8px;
                margin-right: 8px;
                color: #666;
                font-size: 12px;
                background-color: #fff;
                border: 1px solid #eee;
                &:hover {
                  border: 1px solid #0089dc;
                  color: #0089dc;
                }
              }
            }
          }
        }
      }
      .div3 {
        margin-bottom: 30px;
        display: flex;
        .type {
          color: #333;
          font-size: 16px;
          margin-right: 27px;
          span {
            color: #f74342;
            margin-right: 7px;
          }
        }
        .level {
          padding-bottom: 30px;
          border-bottom: 1px dashed #e4e4e4;
          display: flex;
          .time {
            position: relative;
            width: 240px;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              top: 7px;
              width: 100%;
              height: 5px;
              background-color: #edecec;
            }
            .timeslider {
              position: absolute;
              left: 0;
              top: 7px;
              width: 0%; //
              height: 5px;
              background-color: #0089dc;
              z-index: 1;
            }
            .timehandler {
              position: absolute;
              left: 0%; //
              top: 3px;
              width: 15px;
              height: 15px;
              margin-left: -8px;
              border: 1px solid white;
              border-radius: 50%;
              background-color: #0089dc;
              z-index: 2;
              &:hover {
                cursor: pointer;
                width: 17px;
                height: 17px;
              }
            }
            p {
              margin: 0;
              padding: 0;
              z-index: 1;
              padding-top: 18px;
              margin: 0 -30px;
              overflow: hidden;
              span {
                position: relative;
                float: left;
                padding-top: 28px;
                margin-top: -18px;
                width: 20%;
                text-align: center;
                color: #666;
                &::after {
                  content: "";
                  position: absolute;
                  top: 18px;
                  left: 50%;
                  margin-left: -0.5px;
                  width: 1px;
                  height: 5px;
                  background-color: #dcdcdc;
                }
                &:hover {
                  color: #0089dc;
                  cursor: pointer; //设置鼠标移入时的鼠标样式
                }
              }
            }
          }
          input {
            background-color: #fff;
            padding: 5px;
            border: 1px solid #eee;
            margin-left: 30px;
            width: 120px;
            height: 20px;
          }
        }
      }
      .div4 {
        margin-bottom: 30px;
        padding-left: 14px;
        text-align: left;
        .type {
          color: #333;
          font-size: 16px;
        }
      }
      .div5 {
        padding-left: 127px;
        float: left;
        button {
          width: 160px;
          background-color: #0089dc;
          border: 0;
          color: #fff;
          padding: 12px 30px;
          font-size: 16px;
          border-radius: 2px;
          outline: none;
          text-align: center;
        }
      }
    }
  }
}
</style>
