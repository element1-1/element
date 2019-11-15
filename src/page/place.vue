<template>
  <div class="container">
    <div class="left">
      <placeHead class="head"></placeHead>
      <div class="main">
        <div class="toolbar">
          <div class="address">当前位置：xxx</div>
          <div class="sorttool">
            <input
              type="text"
              placeholder="搜索商家,美食..."
              class="input"
              v-model="keyword"
              @focus="showsort()"
              @blur="hidesort()"
            />
            <span class="iconfont iconsousuotubiao" @click="sortByKeyword()"></span>
          </div>
        </div>
        <div class="img">
          <img src="../images/placeImg.png" alt="谁去拿外卖" @click="random()" />
        </div>
        <div class="sortbar">
          <div class="title">商家分类：</div>
          <div class="bar">
            <div class="bar1">
              <a
                href="javascript:void(0)"
                class="alltype"
                :class="{active:isActive}"
                @click="changeToAll()"
              >全部商家</a>
              <a
                href="javascript:void(0)"
                v-for="(list,index) in typeList"
                :key="index"
                class="item"
                :class="{select:isSelect == list.id}"
                @click="changeToSelect(list.id)"
              >{{list.name}}</a>
            </div>
            <div class="bar2">
              <a
                href="javascript:void(0)"
                class="alltype"
                :class="{active1:isActive1}"
                @click="changeToAll1()"
              >全部</a>
              <a
                href="javascript:void(0)"
                v-for="(item,index) in typeList1"
                :key="index"
                class="item"
                :class="{select1:isSelect1 == item.id}"
                @click="changeToSelect1(item.id)"
              >{{item.name}}</a>
            </div>
          </div>
        </div>
        <div class="table" v-if="islogin">
          <router-link
            class="listitem"
            v-for="(list,index) in storeList"
            :class="tooltipdir(list.id)"
            :key="index"
            :to="'/storeDetail?id='+list.id"
          >
            <div class="listimg">
              <img src="../images/store.png" alt="商家图片" />
              <span>30分钟</span>
            </div>
            <div class="listtext">
              <span class="storename">{{list.storename}}</span>
              <span class="grade">
                <star size="24" :score="list.grade"></star>
              </span>
              <span class="fee">配送费:$2.5元</span>
            </div>
            <div class="tooltiptext">
              <div class="storename">{{list.storename}}</div>
              <div class="typeid">{{list.typeid | getType}}</div>
              <div class="feeAndTime">
                <span class="fee">配送费:$2.5元</span>
                <span class="time">
                  平均
                  <span>30</span>分钟送达
                </span>
              </div>
            </div>
          </router-link>
          <a
            class="more"
            href="javascript:void(0)"
            @click="update()"
            :class="show()"
            v-if="isfind"
          >点击加载更多商家...</a>
          <div :class="load()" class="iconfont"></div>
          <div v-if="!isfind" class="notfind iconfont iconzhaobudaoliao">附近没有找到符合条件的商家，换个筛选条件试试吧</div>
        </div>
        <div class="notable" v-if="!islogin">
          <span class="text">查看更多商家，请先</span>
          <router-link to="/" class="login">登录</router-link>
        </div>
      </div>
      <div class="foot">
        <placeFoot></placeFoot>
      </div>
    </div>
    <div class="right">
      <placeAside></placeAside>
    </div>
    <div class="mongolia" v-if="showMong"></div>
    <div class="other" v-if="showMong">
      <div class="title">
        <span>谁去拿外卖</span>
        <a href="javascript:void(0)" @click="closeMong()" class="close">x</a>
      </div>
      <div class="content">
        <div class="tent">
          <div class="tent1">
            <img src="../images/placeDialog.png" alt />
            <img
              src="../images/placeDialog_.png"
              alt
              class="randomButton"
              @click="getRandom()"
              @keyup.space="getRandom()"
            />
          </div>
          <div class="tent2">
            <span>随机到最小数字的人去拿外卖</span>
          </div>
          <div class="tent3">
            <div class="empty" v-if="!isRandom">
              <span>start</span>
            </div>
            <div class="randomList" v-if="isRandom">
              <ul v-for="(list,index) in randomList" :key="index">
                <li :class="index == randomMinKey ? 'randomMin': ''">扔出了一个{{list}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const TYPEDATA = [
  { id: 1, name: "美食" },
  { id: 2, name: "快餐便当" },
  { id: 3, name: "特色菜系" },
  { id: 4, name: "全球美食" },
  { id: 5, name: "小吃夜宵" },
  { id: 6, name: "甜品饮品" },
  { id: 7, name: "早餐" },
  { id: 8, name: "午餐" },
  { id: 9, name: "下午茶" },
  { id: 10, name: "晚餐" },
  { id: 11, name: "夜宵" }
];
const TYPEDATA1 = [
  { id: 1, name: "小吃炸串" },
  { id: 2, name: "地方菜系" },
  { id: 3, name: "简餐便当" },
  { id: 4, name: "汉堡披萨" },
  { id: 5, name: "香锅冒菜" }
];
import placeHead from "../components/common/placeHead";
import placeAside from "../components/common/placeAside";
import placeFoot from "../components/common/placeFoot";
import star from "../components/common/star";
export default {
  name: "place",
  data() {
    return {
      storeList: [],
      moreList: [],
      //一级菜单数据
      typeList: TYPEDATA,
      //二级菜单数据
      typeList1: TYPEDATA1,
      //控制一级菜单
      isActive: true,
      isSelect: "",
      //控制二级菜单
      isActive1: true,
      isSelect1: "",
      //搜索框的关键词
      keyword: "",
      //传到后端的参数
      typeid: "",
      page: 1,
      num: 4,
      key: "",
      //控制加载是否成功
      isload: true,
      //判断是否搜索到商家
      isfind: true,
      //是否显示蒙层
      showMong: false,
      //
      //随机数列表
      randomList: [],
      //是否开始随机数
      isRandom: false,
      //最小随机数的key
      randomMinKey: "",
      //最小的随机数
      minRandom: 101,
    };
  },
  computed: {
    islogin() {
      return this.$store.getters.isLogin;
    }
  },
  components: {
    placeHead,
    placeAside,
    placeFoot,
    star
  },
  mounted() {
    this.getStoreList();
    //下拉刷新
    /*
    let that = this;
    $(window).scroll(function() {
      var h =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      console.log("h" + h);
      var obj = document.getElementsByClassName("table")[0];
      var hh = obj.offsetHeight + obj.offsetTop;
      console.log("hh" + hh);
      if (h > hh / 3) {
          that.update();
          console.log(that.moreList);
          console.log(that.page);
      }
    });
    */
  },
  methods: {
    //获取商家列表
    getStoreList() {
      this.page = 1;
      this.isload = false;
      this.$http
        .post("index/home/getStore", {
          typeid: this.typeid,
          page: this.page,
          num: this.num,
          key: this.key
        })
        .then(res => {
          this.storeList = res.data;
          if (this.storeList.length === 0) {
            this.isfind = false;
          } else {
            this.isfind = true;
          }
          this.isload = true;
        })
        .catch(err => {
          alert("获取商家失败");
        });
    },
    //获取更多商家
    getMoreList() {
      this.isload = false;
      this.load();
      this.$http
        .post("index/home/getStore", {
          typeid: this.typeid,
          page: this.page,
          num: this.num,
          key: this.key
        })
        .then(res => {
          this.moreList = res.data;
          this.isload = true;
          this.load();
        })
        .catch(err => {
          alert("获取商家失败");
        });
    },
    //控制一级菜单
    changeToAll() {
      this.isActive = true;
      this.isSelect = 0;
      document.getElementsByClassName("bar2")[0].style.visibility = "hidden";
      document.getElementsByClassName("sortbar")[0].style.height = 38 + "px";
      this.typeid = "";
      this.key = "";
      this.getStoreList();
    },
    changeToSelect(id) {
      this.isActive = false;
      this.isSelect = id;
      document.getElementsByClassName("bar2")[0].style.visibility = "visible";
      document.getElementsByClassName("sortbar")[0].style.height = 86 + "px";
      this.typeid = id;
      this.getStoreList();
    },
    //控制二级菜单
    changeToAll1() {
      this.isActive1 = true;
      this.isSelect1 = 0;
    },
    changeToSelect1(id) {
      this.isActive1 = false;
      this.isSelect1 = id;
    },
    //通过关键字搜索
    sortByKeyword() {
      this.key = this.keyword;
      this.getStoreList();
    },
    //控制搜索框变长变短
    showsort() {
      document.getElementsByClassName("input")[0].style.paddingRight =
        100 + "px";
    },
    hidesort() {
      document.getElementsByClassName("input")[0].style.paddingRight = 0;
    },
    //控制商家列表的悬停弹框方向
    tooltipdir: function(id) {
      return {
        tooltipleft: id / 4 != 1,
        tooltipright: id / 4 == 1
      };
    },
    //点击加载更多商家
    update() {
      this.page++;
      this.getMoreList();
      this.storeList = this.storeList.concat(this.moreList);
      console.log(this.page);
      console.log(this.moreList);
    },
    //控制加载中图标是否显示
    load() {
      if (this.isload == true) {
        return "";
      } else {
        return "iconjiazaizhong1";
      }
    },
    //控制点击加载更多是否显示
    show() {
      if (this.isload == true) {
        return "";
      } else {
        return "notshow";
      }
    },
    //控制蒙层和谁去拿外卖窗口
    random() {
      this.showMong = true;
    },
    closeMong() {
      this.showMong = false;
      this.isRandom = false;
      //随机数列表、最小随机数、最小随机数key都要恢复初始值
      this.randomList = [];
      this.randomMinKey = "";
      this.minRandom = 101;
    },
    //产生随机数
    getRandom() {
      this.isRandom = true;
      let r = Math.round(Math.random() * 100);
      this.randomList.push(r);
      let that = this;
      //判断产生的随机数个数是否大于10，若是，则删除第一个并把最小随机数的key减一，若第一个使最小的随机数，则删除下一个
      if (that.randomList.length > 10) {
        let i = 0;
        if (i == that.randomMinKey) {
          i++;
          that.randomList.splice(i, 1);
        } else {
          that.randomList.splice(i, 1);
          that.randomMinKey--;
        }
      }
      //找出最小的随机数的key
      for (let i = 0; i < that.randomList.length; i++) {
        if (that.randomList[i] < that.minRandom) {
          that.minRandom = that.randomList[i];
          that.randomMinKey = i;
        }
      }
    }
  },
  filters: {
    getType(typeid) {
      switch (typeid) {
        case "1":
          return "美食";
          break;
        case "2":
          return "快餐便当";
          break;
        case "3":
          return "特色菜系";
          break;
        case "4":
          return "全球美食";
          break;
        case "5":
          return "小吃夜宵";
          break;
        case "6":
          return "甜品饮品";
          break;
        case "7":
          return "早餐";
          break;
        case "8":
          return "午餐";
          break;
        case "9":
          return "下午茶";
          break;
        case "10":
          return "晚餐";
          break;
        case "11":
          return "夜宵";
          break;
        default:
          return "";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    background-color: rgb(247, 247, 247);
    .head {
      flex: 0 0 auto;
    }
    .main {
      flex: 1 0 auto;
      .toolbar {
        display: flex;
        justify-content: space-between;
        width: 1178px;
        margin: 20px 67px 0 67px;
        .address {
          font-size: 12px;
        }
        .sorttool {
          background-color: #fff;
          border: 1px solid lightgray;
          .input {
            width: 230px;
            height: 32px;
            border: 0;
            padding-left: 6px;
            transition: padding-right 0.5s;
            &:focus {
              outline: none;
            }
          }
          .iconsousuotubiao {
            width: 20px;
            height: 20px;
            padding: 0 8px;
            margin: 4px 0;
            font-weight: bold;
          }
        }
      }
      .img {
        display: flex;
        justify-content: flex-end;
        width: 1181px;
        margin: 20px 67px -30px 67px;
        img {
          border-right: 0;
        }
      }
      .sortbar {
        width: 1150px;
        height: 38px;
        margin: 20px 67px 0 67px;
        border: 1px solid lightgray;
        background-color: white;
        font-size: 14px;
        padding: 10px 10px 10px 18px;
        display: flex;
        z-index: 15;
        .title {
          padding: 10px 10px;
          color: #999999;
          width: 79px;
        }
        .bar {
          padding: 10px 10px;
          width: 1050px;
          text-align: left;
          .bar1 {
            .alltype {
              padding: 5px 5px;
              margin: 0 6px;
              color: #666666;
              background-color: rgb(246, 246, 246);
            }
            .item {
              padding: 5px 5px;
              margin: 0 6px;
              color: #666666;
              &:hover {
                background-color: rgb(247, 247, 247);
              }
            }

            .active {
              background: #0089dc;
              color: white;
            }
            .select {
              background-color: rgb(247, 247, 247);
              padding: 15px 15px 15px 15px;
            }
          }
          .bar2 {
            background-color: rgb(247, 247, 247);
            padding: 10px 10px;
            margin: 10px 0;
            visibility: hidden;
            .alltype {
              padding: 5px 10px;
              margin: 0 6px;
              color: #666666;
            }
            .item {
              padding: 5px 10px;
              margin: 0 6px;
              color: #666666;
            }
            .active1 {
              background: #0089dc;
              color: white;
            }
            .select1 {
              background-color: #0089dc;
              color: white;
            }
          }
        }
      }
      .table {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        width: 1178px;
        margin: 20px 67px 0 67px;
        border: 1px solid lightgray;
        .listitem {
          display: flex;
          width: 25%;
          height: 139px;
          margin-bottom: 0;
          border-bottom: 1px solid #f5f5f5;
          &:hover {
            background-color: rgb(247, 247, 247);
            .listtext {
              .storename {
                color: blue;
              }
            }
          }
          .listimg {
            display: flex;
            flex-direction: column;
            width: 70px;
            height: 98px;
            padding: 20px;
            img {
              width: 70px;
              height: 70px;
              margin-bottom: 10px;
            }
            span {
              font-size: 12px;
              color: #999999;
              width: 70px;
              text-align: center;
            }
          }
          .listtext {
            display: flex;
            flex-direction: column;
            text-align: left;
            width: 254px;
            height: 97px;
            padding: 20px 20px 20px 0;
            .storename {
              font-size: 16px;
              font-weight: bold;
              color: #333333;
              width: 164px;
              height: 24px;
              margin-bottom: 6px;
            }
            .grade,
            .fee {
              font-size: 12px;
              color: #999999;
            }
            .fee {
              margin-top: 3px;
            }
          }
        }
        .more {
          width: 1178px;
          height: 54px;
          color: rgb(119, 119, 119);
          font-size: 18px;
          margin: 0 auto; //设置水平居中
          line-height: 54px; //设置垂直居中
          background-image: linear-gradient(to bottom, #f9f9f9, #eee); //渐变
        }
        //控制不显示
        .notshow {
          visibility: hidden;
        }
        //加载中图标样式
        .iconjiazaizhong1 {
          width: 1178px;
          height: 54px;
          background-color: white;
          margin: 0 auto; //设置水平居中
          line-height: 54px; //设置垂直居中
        }
        //没有搜索到商家时的提示信息的样式
        .notfind {
          width: 1138px;
          height: 175px;
          //
          margin: 0 auto;
          line-height: 175px;
          padding: 80px 20px;
          font-size: 14px;
          color: rgb(51, 51, 51);
        }

        .tooltipleft {
          position: relative;
          &:hover {
            .tooltiptext {
              visibility: visible;
            }
          }
          .tooltiptext {
            position: absolute;
            top: 0;
            left: 100%;
            visibility: hidden;
            z-index: 1;
            width: 90%;
            padding: 10px 5%;
            background-color: white;
            text-align: left;
            border: 1px solid lightgray;
            .storename {
              font-size: 16px;
              font-weight: bold;
              color: #333333;
              margin-top: 10px;
            }
            .typeid {
              font-size: 12px;
              color: #999999;
              width: 95%;
              border-bottom: 1px solid rgb(217, 217, 217);
              margin-top: 10px;
              padding-bottom: 10px;
              margin-bottom: 10px;
            }
            .feeAndTime {
              font-size: 12px;
              color: #333333;
              width: 95%;
              padding: 10px 0;
              margin-bottom: 30px;
              background-color: rgb(247, 247, 247);
              .fee {
                border-right: 1px solid #999999;
                padding: 0 20px;
              }
              .time {
                padding: 0 30px;
                span {
                  color: red;
                  padding: 0 3px;
                }
              }
            }
            &::after {
              content: "";
              position: absolute;
              top: 10%;
              right: 100%;
              border-width: 7px;
              border-style: solid;
              border-color: transparent lightgray transparent transparent;
            }
          }
        }
        .tooltipright {
          position: relative;
          &:hover {
            .tooltiptext {
              visibility: visible;
            }
          }
          .tooltiptext {
            position: absolute;
            top: 0;
            right: 100%;
            visibility: hidden;
            z-index: 1;
            width: 90%;
            padding: 10px 5%;
            background-color: white;
            text-align: left;
            border: 1px solid lightgray;
            .storename {
              font-size: 16px;
              font-weight: bold;
              color: #333333;
              margin-top: 10px;
            }
            .typeid {
              font-size: 12px;
              color: #999999;
              width: 95%;
              border-bottom: 1px solid rgb(217, 217, 217);
              margin-top: 10px;
              padding-bottom: 10px;
              margin-bottom: 10px;
            }
            .feeAndTime {
              font-size: 12px;
              color: #333333;
              width: 95%;
              padding: 10px 0;
              margin-bottom: 30px;
              background-color: rgb(247, 247, 247);
              .fee {
                border-right: 1px solid #999999;
                padding: 0 20px;
              }
              .time {
                padding: 0 30px;
                span {
                  color: red;
                  padding: 0 3px;
                }
              }
            }
            &::after {
              content: "";
              position: absolute;
              top: 10%;
              left: 100%;
              border-width: 7px;
              border-style: solid;
              border-color: transparent transparent transparent lightgray;
            }
          }
        }
      }
      .notable {
        background-color: white;
        width: 1178px;
        height: 54px;
        margin: 20px 67px 0 67px;
        border: 1px solid lightgray;
        color: rgb(51, 51, 51);
        font-size: 18px;
        line-height: 54px;
        .login {
          color: #0089dc;
        }
      }
    }
    .foot {
      flex: 0 0 auto;
    }
  }
  .right {
    flex: 0 0 auto;
    position: relative;
  }
  .mongolia {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .other {
    width: 358px;
    border-radius: 5px;
    background-color: white;
    position: fixed;
    top: 11%;
    left: 36%;
    .title {
      padding: 10px;
      border-bottom: 1px solid rgb(247, 247, 247);
      color: rgb(51, 51, 51);
      font-size: 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      .close {
        &:hover {
          color: #0089dc;
        }
      }
    }
    .content {
      padding: 15px;
      .tent {
        padding: 15px 0 0;
        margin: 0 14px 10px;
        background-color: #dbf0fa;
        .tent1 {
          margin: 0 57px;
          .randomButton {
            position: absolute;
            top: 216px;
            left: 42px;
          }
        }
        .tent2 {
          margin: 0 0 10px;
          color: #777;
          font-size: 12px;
          span {
            display: flex;
            justify-content: space-around;
            &::before {
              content: "";
              margin-top: 5px;
              display: block;
              height: 7px;
              width: 40px;
              background-color: #ccc;
            }
            &::after {
              content: "";
              margin-top: 5px;
              display: block;
              height: 7px;
              width: 40px;
              background-color: #ccc;
            }
          }
        }
        .tent3 {
          padding: 5px;
          margin: 0 10px;
          .empty {
            padding: 40px;
            font-size: 73px;
            color: white;
            bottom: 40px;
          }
          .randomList {
            height: 163px;
            ul {
              margin: 0;
              padding: 0;
              li {
                color: rgb(85, 85, 85);
                font-size: 12px;
                padding: 0 0 0 3px;
                text-align: left;
              }
              .randomMin {
                background-color: rgba(254, 90, 35, 0.3);
                color: rgb(254, 90, 35);
                &::after {
                  content: "喂人民服务";
                  font-weight: bold;
                  line-height: 19px;
                  position: relative;
                  left: 50px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
