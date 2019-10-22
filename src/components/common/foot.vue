<template>
  <div class="foot">
    <h3>所有方：上海拉扎斯信息科技有限公司</h3>
    <p>增值电信业务许可证：沪B2-20150033|沪ICP备 09007032|上海工商行政管理 Copyright@2008-2017 ele me,All Rights Reserved.</p>
    <img :src="imgUrl" alt="foot.png">
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
</style>
