<template>
  <div class="foot">
    <p class="title">所有方：上海拉扎斯信息科技有限公司</p>
    <p class="links">
      <span>增值电信业务许可证：</span>
      <a href="http://www.shca.gov.cn/" class="linkItem">沪B2-20150033</a>
      <a href="http://www.miibeain.gov.cn/" class="linkItem">|沪ICP备 09007032</a>
      <a href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20120305173227823" class="linkItem">|上海工商行政管理 Copyright@2008-2017 ele me,All Rights Reserved.</a>
    </p>
    <a href="http://www.zx110.org/picp/?sn=310100103568">
        <img :src="imgUrl" alt="foot.png">
    </a>
  </div>
</template>
<script>
import imgUrl from '@/images/foot.png'
export default {
  name: "foot",
  data(){
    return {
      imgUrl
    }
  }
}
</script>
<style scoped>
.foot{
  width: 100%;
  height: 20%;
  background-color: rgb(248, 248, 248);
  font-size: 12px;
}
.title{
  color: rgb(85, 85, 85);
}
.links{
  color: rgb(153, 153, 153);
}
.linkItem{
  text-decoration: none;
}
.linkItem:link{
    color: rgb(153, 153, 153);
  }
.linkItem:visited{
  color: rgb(153, 153, 153);
}
</style>
