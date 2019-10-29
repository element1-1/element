<template>
  <div class="box">
    <div class="box1">
      <div class="boxItem1">
        <p>用户帮助</p>
        <a href="https://help.ele.me/pc/" target="_black">我的客服</a>
      </div>
      <div class="boxItem2">
        <p>商务合作</p>
        <a href="https://kaidian.ele.me/" target="_black">我要开店</a>
        <a href="https://www.ele.me/support/about/jiameng" target="_black">加盟指南</a>
        <a href="https://www.ele.me/support/about/contact" target="_black">市场合作</a>
        <a href="https://open.shop.ele.me/openapi" target="_black">开放平台</a>
      </div>
      <div class="boxItem3">
        <p>关于我们</p>
        <a href="https://www.ele.me/support/about" target="_black">饿了么介绍</a>
        <a href="https://jobs.ele.me/#/" target="_black">加入我们</a>
        <a href="https://www.ele.me/support/about/contact" target="_black">联系我们</a>
        <a href="https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1" target="_black">规则中心</a>
        <a
          href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html"
          target="_black"
        >隐私政策</a>
      </div>
      <div class="line"></div>
      <div class="boxItem4">
        <p>
          24小时客服热线：
          <a href="https://www.ele.me/tel:10105757" target="_black">10105757</a>
        </p>
        <div >
          关注我们：
          <span class="iconfont iconweixin tooltip">
            <span class="tooltiptext">
              <img :src="imgUrl5" style="width:100%">
              <span>微信号:elemeorder</span><br>
              <span>饿了么网上订餐</span>
            </span>
          </span>
          <a href="https://weibo.com/elemeorder" target="_blank">
            <span class="iconfont iconweibo"></span>
          </a>
        </div>
      </div>
      <div class="boxItem5">
        <p>
          <a href="https://h5.ele.me/landing" target="_blank">
            <img :src="imgUrl5" alt="二维码" />
          </a>
        </p>
        <div>
          <h3>下载手机版</h3>
          <p>扫一扫，手机订餐更方便</p>
        </div>
      </div>
    </div>
    <div class="box2">
      <p class="title">
        <span>所有方：上海拉扎斯信息科技有限公司</span>
        <a
          href="https://cube.elemecdn.com/5/48/420acfac773425847dc67ef1e307fpng.png"
          target="_black"
        >| 营业执照</a>
      </p>
      <p class="links">
        <span>增值电信业务许可证：</span>
        <a href="http://www.shca.gov.cn/" target="_black" class="linkItem">沪B2-20150033</a>
        <a href="http://www.miibeain.gov.cn/" target="_black" class="linkItem">|沪ICP备 09007032</a>
        <a
          href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20120305173227823"
          target="_black"
          class="linkItem"
        >|上海工商行政管理</a>
        <span>Copyright@2008-2017 ele me,All Rights Reserved.互联网药品信息服务资格证书 编号：（沪）-经营性-2016-0011</span>
      </p>
      <p class="linkImg">
        <a href="http://www.zx110.org/picp/?sn=310100103568" target="_black">
          <img :src="imgUrl1" alt="placeFoot1.png" />
        </a>
        <a href="http://www.shjbzx.cn/" target="_black">
          <img :src="imgUrl2" alt="placeFoot2.png" />
        </a>
        <a href="https://scjgj.sh.gov.cn/platform/survey/step1_phone" target="_black">
          <img :src="imgUrl3" alt="placeFoot3.png" />
        </a>
        <a href="https://newsxmwb.xinmin.cn/special/mljbzsjs/index.html" target="_black">
          <img :src="imgUrl4" alt="placeFoot4.png" />
        </a>
      </p>
      <p class="other">违法和不良信息举报电话 10105757-选消费者-选0</p>
    </div>
  </div>
</template>
<script>
import imgUrl1 from "../../images/placeFoot1.png";
import imgUrl2 from "../../images/placeFoot2.png";
import imgUrl3 from "../../images/placeFoot3.png";
import imgUrl4 from "../../images/placeFoot4.png";
import imgUrl5 from "../../images/placeFoot5.png";
export default {
  name: "placeFoot",
  data() {
    return {
      imgUrl1,
      imgUrl2,
      imgUrl3,
      imgUrl4,
      imgUrl5
    };
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 35%;
  border-top: 1px solid rgb(230, 230, 230);
  margin-top: 50px;
  .box1 {
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    .boxItem1,
    .boxItem2,
    .boxItem3,
    .boxItem4 {
      display: flex;
      flex-direction: column;
    }
    .boxItem1,
    .boxItem2,
    .boxItem3 {
      width: 15%;
      p {
        font-size: 14px;
        color: rgb(51, 51, 51);
      }
      a {
        font-size: 12px;
        line-height: 24px;
      }
    }
    .line {
      width: 0;
      height: 70px;
      border-left: 1px solid rgb(230, 230, 230);
      margin-left: 45px;
      margin-top: 18px;
    }
    .boxItem4 {
      width: 23%;
      height: 70px;
      text-align: left;
      padding-left: 3%;
      margin-right: 30px;
      div,
      p {
        line-height: 24px;
        font-size: 14px;
        color: rgb(102, 102, 102);
        span,
        a {
          font-size: 14px;
          color: rgb(102, 102, 102);
        }
      }
      .iconweixin {
        font-size: 24px;
        &:hover {
          color: green;
        }
      }
      .tooltip {
        position: relative;
        &:hover{
          .tooltiptext {
             visibility: visible;
          }
        }
        .tooltiptext {
          visibility: hidden;
          width: 130px;
          background-color: white;
          text-align: center;
          padding: 10px 10px;
          position: absolute;
          z-index: 1;
          bottom: 100%;
          left: -240%;
          border: 1px solid lightgray;
          &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -10px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent lightgray;
            transform: rotateZ(90deg);
          }
        }
      }

      .iconweibo {
        font-size: 24px;
        &:hover {
          color: red;
        }
      }
    }
    .boxItem5 {
      display: flex;
      a {
        margin-right: 20px;
      }
      div {
        text-align: left;
        h3 {
          color: rgb(51, 51, 51);
          font-size: 16px;
        }
        p {
          color: rgb(102, 102, 102);
          font-size: 12px;
        }
      }
    }
  }
  .box2 {
    margin: 0 auto;
    margin-top: 60px;
    .title,
    .links,
    .linkImg,
    .other {
      margin: 5px 0;
    }
    .title {
      color: rgb(14, 14, 14);
      font-size: 12px;
      a {
        color: rgb(14, 14, 14);
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .links {
      color: rgb(153, 153, 153);
      font-size: 12px;
      a {
        &:hover {
          text-decoration: underline;
          color: rgb(14, 14, 14);
        }
      }
    }
    .other {
      color: rgb(153, 153, 153);
      font-size: 12px;
    }
  }
}
</style>
