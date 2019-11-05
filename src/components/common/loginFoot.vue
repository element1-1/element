<template>
  <div class="foot">
    <div class="title">所有方：上海拉扎斯信息科技有限公司</div>
    <div class="links">
      <span>增值电信业务许可证：</span>
      <a href="http://www.shca.gov.cn/" target="_blank">沪B2-20150033</a>
      <a href="http://www.miibeain.gov.cn/" target="_blank">|沪ICP备 09007032</a>
      <a
        href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20120305173227823"
        target="_blank"
      >|上海工商行政管理 Copyright@2008-2017 ele me,All Rights Reserved.</a>
    </div>
    <div class="img">
      <a href="http://www.zx110.org/picp/?sn=310100103568" target="_blank">
        <img :src="imgUrl" alt="foot.png" />
      </a>
    </div>
  </div>
</template>
<script>
import imgUrl from "@/images/loginFoot.png";
export default {
  name: "foot",
  data() {
    return {
      imgUrl
    };
  }
};
</script>
<style lang="scss" scoped>
.foot {
  width: 100%;
  background-color: rgb(248, 248, 248);
  font-size: 12px;
  .title {
    color: rgb(85, 85, 85);
    padding-top: 10px;
  }
  .img{
    padding: 15px 0;
  }
}
</style>
