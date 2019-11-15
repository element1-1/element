<template>
    <div>
          <div class="store-content">
             <div class="shopmain">
                 <div class="shopmenu">
                    <div class="loading">
                        <img src="https://www.ele.me/media/img/profile-loading.4984fa.gif" alt="正在加载">
                        正在加载
                    </div>
                    <div class="shopmenu-nav">
                        <a href="javascript:"  v-for="list in classify"  @click="change($event,'#menu-list'+list[0])" >{{list[1]}}</a>
                    </div>
                    <div class="shopmenu-main" v-if="searchfood==''">
                        <div class="shopmenu-list" v-bind:id="'menu-list'+list[0]"  v-for="list in classify" v-if="check(list[0])">
                            <h3 class="shopmenu-title">{{list[1]}}
                                <span class="shopmenu-des">早餐补气！</span>
                            </h3>
                            <div class="shopmenu-food" v-for="food in food " v-if="food.classifyid==list[0]">
                                <div>
                                    <img src="https://fuss10.elemecdn.com/5/b3/56f779015dacbcd2d3179dae53c5fjpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85" alt="">
                                </div>
                                <div class="shopmenu-food-main">
                                    <h3>{{food.foodname}}.</h3>
                                    <p>{{food.fooddesc}}</p>
                                    <p>
                                        <div class="star">
                                             <!-- <svg class="icon carticon" aria-hidden="true">
                                                <use xlink:href="#icon-star"></use>
                                            </svg> -->
                                        </div>
                                    </p>
                                    <p>
                                        <span class="pay" v-if="JSON.parse(food.foodprice).length>0">{{JSON.parse(food.foodprice)[0]}}元</span>
                                        <span class="pay" v-else>{{food.foodprice}}元</span>
                                        <span class="add" v-if="JSON.parse(food.foodprice).length>0" @click="norms($event,food)" >选规格</span>
                                        <span class="add" v-else @click="add(food)">加入购物车</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="shopmenu-main" v-else>
                        <div class="shopmenu-list">
                            <h3 class="shopmenu-title">搜索[{{searchfood}}]的结果
                            </h3>
                            <div class="shopmenu-food" v-for="food in food " >
                                <div>
                                    <img src="https://fuss10.elemecdn.com/5/b3/56f779015dacbcd2d3179dae53c5fjpeg.jpeg?imageMogr2/thumbnail/100x100/format/webp/quality/85" alt="">
                                </div>
                                <div class="shopmenu-food-main">   
                                    <h3>{{food.foodname}}.</h3>
                                    <p>{{food.fooddesc}}</p>
                                    <p>
                                        <div>
                                             <svg class="icon carticon" aria-hidden="true">
                                                <use xlink:href="#icon-star"></use>
                                            </svg>
                                        </div>
                                    </p>
                                    <p>
                                        <span class="pay" v-if="JSON.parse(food.foodprice).length>0">{{JSON.parse(food.foodprice)[0]}}元</span>
                                        <span class="pay" v-else>{{food.foodprice}}元</span>
                                        <span class="add" v-if="JSON.parse(food.foodprice).length>0" @click="norms($event,food)" >选规格</span>
                                        <span class="add" v-else @click="add(food)">加入购物车</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div class="shopmenu-right">
                     <div class="shopbulletin">
                        <h3 class="shopbulletin-section-title">
                            商家公告
                        </h3>
                        <p class="shopbulletin-content">
                                欢迎来到草本汤（马尾名城店），为了回馈小主们，我们坚持追求用心，责任，高品质，高效率，让小主们看到我们的努力，打心底觉得吃的安全，放心！温馨提醒:1.高峰期提前下单，保障用餐时间。2.下雨天稍有延误请谅解。3.疑问和建议请与本店联系，谢谢！
                        </p>
                        <div class="shopbulletin-delivery">
                            <h4>配送说明</h4>
                            <p>配送费3.1元</p>
                        </div>
                        <a href="javascript:" @click="abc()">举报商家</a>
                     </div>
                 </div>
             </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        //获取食物列表
         getfood(){
            this.$http.post("index/detail/getFood", {
                 storeid:1,
                 classifyid:'',
                 key:this.searchfood
            })
            .then(res => {
                this.food=res.data;
            });
        },
    }
}
</script>