<template>
    <div class="store">
        <!--头部-->
        <div class="store-head">
             <div class="store-head-nav">
                <ul>
                    <li class="list">
                        饿了么
                    </li>
                    <li class="list">
                        首页
                    </li>
                      <li class="list">
                        我的订单
                    </li>
                    <li class="list">
                        加盟合作
                    </li>
                    <li class="list">
                        我的客服
                    </li>
                     <li class="right" style="margin-left:100px">
                        规则中心
                    </li>
                     <li class="right">
                        手机应用
                    </li>
                     <li class="list">
                        用户名
                    </li>
                    <li class="right">
                        下拉框
                    </li>
                </ul>
            </div> 
             <!-- <placeHead class="head"></placeHead> -->
            <div class="store-head-content">
                <div class="shopguide-info">
                    <img src="https://fuss10.elemecdn.com/4/03/a48012b0c2d1c1daea52beae52477png.png?imageMogr2/thumbnail/95x95/format/webp/quality/85" alt="">
                    <div class="shopguide-info-wrapper">
                        <h1>{{store.storename}}</h1>
                        <p>星星</p>
                    </div>
                </div>
                <div class="shopguide-server">
                    <span>
                        <em>起送价</em>
                        <em>20元</em>
                    </span>
                    <span>
                        <em>配送费</em>
                        <em>配送费3.1元</em>
                    </span>
                     <span>
                        <em>平均送达速度</em>
                        <em>30分钟</em>
                    </span>
                </div>
                <div class="shopguide-favor" @click="collect($event)" v-if="collection">
                    <span class="collect">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-aixin_shixin"></use>
                        </svg>
                        <p>取消收藏</p>
                    </span>
                </div>
                 <div class="shopguide-favor" @click="collect($event)" v-else>
                    <span class="collect">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-aixin"></use>
                        </svg>
                        <p>收藏</p>
                    </span>
                </div>
            </div>
        </div>

         <div class="store-nav">
             <div class="shopnav-left">
                 <a href="javascript:" class="shopnav-tab">
                     所有商品
                 </a>
                  <a href="javascript:" class="shopnav-tab">
                     评价
                 </a>
                  <a href="javascript:" class="shopnav-tab">
                     商家资质
                 </a>
                 <span class="shopnav-filter">
                     <a href="javascript:" @click="sortOrder($event,0)">
                     默认排序
                     </a>
                      <a href="javascript:"  @click="sortOrder($event,1)">
                     评分
                     </a>
                      <a href="javascript:"  @click="sortOrder($event,2)">
                     销量
                     </a>
                      <a href="javascript:"  @click="sortOrder($event,3)">
                     价格
                     </a>
                     <span>
                         <a href="javascript:" title="以网格形式显示菜单" @click="grid()">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-fenlei"></use>
                            </svg>
                         </a>
                         <a href="javascript:" title="以列表形式显示菜单" @click="list()">
                              <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-liebiao"></use>
                            </svg>
                         </a>
                     </span>
                 </span>
             </div>
             <div class="shopnav-search">
                 <input type="text" placeholder="搜索商家，美食..." v-model="searchfood">
                 <svg class="icon" aria-hidden="true" @click="searchFood()">
                     <use xlink:href="#icon-icon-test"></use>
                 </svg>
             </div>
        </div>
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
        <div class="shopping-cart">
            <div class="ng-isolate-scope">
                <div class="single">
                    购物车<a href="javascript:" @click="clear()">[清空]</a>
                </div>
            </div>
            <div class="cart-table" v-for="(cart,index) in cart" :key="index">
                <div class="cell">
                     {{cart.foodname}}
                </div>
                <div  class="itemquantity">
                    <button @click="reducefood(index)">-</button>
                    <button>{{cart.num}}</button>
                    <button @click="addfood(index)">+</button>
                </div>
                <div class="foodprice">
                    ¥{{cart.totalmoney}}
                </div>

            </div>
              <div class="shop-cartfooter">
                    <svg class="icon carticon" aria-hidden="true">
                        <use xlink:href="#icon-icozhuanhuan"></use>
                    </svg>
                    <p>¥
                        <span>{{totalmoney}}</span>
                    </p>
                    <div class="shop-cartfooter-text">
                        配送费¥2.6
                    </div>
                    <button class="shop-cartfooter-checkout" @click="submitOrder()">
                        前往支付
                    </button>
              </div>
        </div>
        <div class="store-shade">
            <div class="store-norms">
                <div class="shop-specmenu-specs">
                    <p>规格</p>
                    <div class="norms-item active" @click="specmenu($event,0)">小份</div>
                    <div class="norms-item" @click="specmenu($event,1)">大份</div>
                </div>
                <p>已选：{{specs.specs}}</p>
                <p class="price">¥<span>{{specs.price}}</span></p>
                <button class="blue" @click="normsSubmit()">选好了，加入购物车</button>
                <button @click="nopay()">不要了</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations,mapGetters }from "vuex";
import placeHead from "../components/common/placeHead";
export default {
     components: {
        placeHead
     },
    data(){
        return{
            store:'',
            classify:'',
            food:"",
            cart:[],
            totalmoney:0,
            searchfood:'',
            collection:'',
            specs:{
                specsfood:'',
                specs:"小份",
                price:0
            },
            height:[]
        }
    },
    methods:{
         ...mapMutations({
		    // 将changeNews与mutations中的SET_NEWS关联
            changeOrder: "SET_ORDER",
            changeMoney: "SET_MONEY"
        }),
        //提交订单
        submitOrder(){
            this.changeOrder(this.cart);
            this.changeMoney(this.totalmoney);
            this.$router.push("/payorder");
        },
        //获取食物列表
        getfood(){
            let id=this.$route.query.id;
            this.$http.post("index/detail/getFood", {
                 storeid:id,
                 classifyid:'',
                 key:this.searchfood
            })
            .then(res => {
                this.food=res.data;
            });
        },
        //点击分类跳到对应食物区
        change(e,id){
            $(e.currentTarget).addClass("active");
            $(e.currentTarget).siblings().removeClass("active");
            var Height = $(window).height();
            var div_height=$(id).offset().top;
            var height=div_height-91;
            $(document).scrollTop(height);
        },
        check(id){
            var flag=false;
            for(var i=0;i<this.food.length;i++){
                if(this.food[i].classifyid==id){
                    flag=true;
                    break;
                }
            }
            return flag;
        },
        list(){
              $(".shopmenu-list").children("div").removeClass("shopmenu-food");
              $(".shopmenu-list").children("div").addClass("shopmenu-food2");
        },
        grid(){
              $(".shopmenu-list").children("div").removeClass("shopmenu-food2");
              $(".shopmenu-list").children("div").addClass("shopmenu-food");
        },
        add(food){
            let flag=true;
            for(var i=0;i<this.cart.length;i++){
                if(food.id==this.cart[i].id){
                    this.addfood(i);
                    flag=false;
                    break;
                }
            }
            if(flag){
                food.num=1;
                food.totalmoney=food.num*food.foodprice;
                this.cart=this.cart.concat(food);
                this.totalmoney+=parseFloat(food.totalmoney);
            }
        },
        clear(){
            this.cart=[];
            this.totalmoney=0;
        },
        addfood(index){
            this.cart[index].num+=1;
            this.cart[index].totalmoney=this.cart[index].num*this.cart[index].foodprice;
            this.totalmoney+=parseFloat(this.cart[index].foodprice);
        },
        reducefood(index){
            this.cart[index].num-=1;
            this.cart[index].totalmoney=this.cart[index].num*this.cart[index].foodprice;
            this.totalmoney-=parseFloat(this.cart[index].foodprice);
            if( this.cart[index].num==0){
               this.cart.splice(index,1);
            }
        },
        searchFood(){
            this.getfood();

        },
        collect(e){
            if(this.collection==false){
                 this.$http.post("index/detail/collect", {
                    storeid:1,
                    state:true
                })
                .then(res => {
                   if(res.data==1){
                       this.collection=true;
                   }
                });
            }else{
                 this.$http.post("index/detail/collect", {
                    storeid:1,
                    state:false
                })
                .then(res => {
                      if(res.data==1){
                       this.collection=false;
                   }
                });
            }  
        },
        norms(e,food){
            this.specs.specsfood=Object.assign({}, food);
            this.specs.price=JSON.parse(food.foodprice)[0];
            let div_top=$(e.currentTarget).offset().top;
            let div_left=$(e.currentTarget).offset().left;
            $(".store-shade").css("display","block");
            $(".store-norms").css({"top":div_top-20+"px","left":div_left+80+"px"});

        },
        nopay(){
              $(".store-shade").css("display","none");
        },
        specmenu(e,index){
            $(e.currentTarget).addClass("active");
            $(e.currentTarget).siblings().removeClass("active");
            this.specs.specs=$(e.currentTarget).html();
            this.specs.price=JSON.parseFloat(this.specs.specsfood.foodprice)[index];
            this.specs.norm=index;
        },
        normsSubmit(){
            if(this.specs.norm==undefined){
                this.specs.norm=0;
            }
            this.specs.specsfood.foodprice=this.specs.price;
            this.specs.specsfood.norm=this.specs.norm;
            console.log(this.specs.norm, this.specs.specsfood);
            this.add(this.specs.specsfood);
            $(".store-shade").css("display","none");
        },
        sortOrder(e,index){
            $(e.currentTarget).addClass("active");
            $(e.currentTarget).siblings().removeClass("active");
        }
    },
    watch:{
        searchfood:{
            handler(newVal,oldVal){
                this.getfood();
            }
        },
    },
    mounted(){
        let id=this.$route.query.id;
        this.$http.post("index/detail/getClassify", {
            storeid:id
        })
        .then(res => {
            this.store=res.data[0];
            this.classify=JSON.parse(res.data[1].classify);
           
        });
         this.$http.post("index/detail/collection", {
            storeid:id,
        })
        .then(res => {
            if(res.data.status==0){
                this.collection=false;
               // console.log(this.collection);
            }else{
                 this.collection=true;
            }
        });
        this.getfood();
         //页面初始化的时候，获取滚动条的高度（上次高度）
        var start_height = $(document).scrollTop();
        //获取导航栏的高度(包含 padding 和 border)
        var navigation_height = $('.shopmenu-nav').outerHeight();
        let that=this;
        $(window).scroll(function() {
            //触发滚动事件后，滚动条的高度（本次高度）
            var end_height = $(document).scrollTop();
            //触发后的高度 与 元素的高度对比
            if (end_height > 250){
                $('.shopmenu-nav').addClass('hide');
                let array=[];
                 for(let i=1;i<=that.classify.length;i++){
                   // console.log($("#menu-list1"));
                    let height=$("#menu-list"+i).offset().top;
                   // console.log(height);
                    array.push(height);
                }
               that.height=array;
            }else {
                $('.shopmenu-nav').removeClass('hide');
            }
           let rate=()=>{
               if(that.height.length==0){
                   return 0;
               }
               for(let i=that.height.length-1;i>=0;i--){
                 //  console.log(Math.trunc(end_height/(that.height[i]-91)),that.height[i]-91);
                   if(Math.trunc(end_height/(that.height[i]-91))==1){
                      // console.log(end_height,that.height[i]-91)
                    //    if(i==undefined){
                    //        i=0;
                    //    }
                       return i;
                   }
               }
           }
           $(".shopmenu-nav").find("a:eq("+rate()+")").addClass('active');
           $(".shopmenu-nav").find("a:eq("+rate()+")").siblings().removeClass("active");
            //let height=end_height
            start_height = $(document).scrollTop();
        });
    }
}
</script>
<style lang="scss" scoped>

.store{
    text-align: left;
    position: relative;
    // .head{
    //     background-color: rgba(0,0,0,0.4);
    //     img{
    //         display: none;
    //     }
    // }
}
#app{
    margin:0;
}
a{
    text-decoration: none;
    color:black;
}
.store-head{
    background-image:url("https://www.ele.me/media/img/shop-bg.0391dd.jpg") ;
    background-position:center;
   // background-size: cover;
    height: 100%;
}
.store-head-nav{
    ul{
        height:48px;
        padding:0 81.5px;
        background-color: rgba(0,0,0,0.4);
    }
    li{
        height:100%;
        line-height: 48px;
        float: left;
        list-style: none;
    }
    .list{
        color:white;
        width: 120px;
    }
    .right{
        color:gray;
        width: 120px;
    }
}
.store-head-content{
    position: relative;
    padding:0 81.5px;
    .shopguide-info{
       position: relative;
        display: table-cell;
        vertical-align: middle;
        color: #fff;
        z-index: 1;
        padding:20px 0;
    }
    img{
        margin-right: 15px;
        width: 95px;
        height: 95px;
        border-radius: 50%;
        border: 4px solid #fff;
        border: 4px solid rgba(255,255,255,.3);
        vertical-align: middle;
    }
    .shopguide-info-wrapper{
        display: inline-block;;
        vertical-align: middle;
        h1{
            font-size: 20px;
            max-width: 270px;
            font-weight: 300px;
        }
    }
    .shopguide-server{
        display: table-cell;
        padding-right: 100px;
        vertical-align: middle;
        color: #fff;
        text-align: right;
        width: 700px;
        span{
            display: inline-block;
            margin-left: 80px;
            vertical-align: top;
            text-align: center;
        }
        em{
            font-style: normal;
            font-weight: 400;
            display: block;
        }
    }
    .shopguide-favor{
        position: absolute;
        top: 0;
        right: 150px;
        padding: 10px 5px;
        width: 80px;
        text-align: center;
        background: #fff;
        background: rgba(255,255,255,.1);
        border-radius: 0 0 5px 5px;
        color: #eee;
        .collect{
            p{
                font-size:14px;
            }
            svg{
               // background-color: white;
                color:white;
                cursor: pointer;
            }
        }
    }

}
.store-nav{
    padding:0 81.5px;
    line-height: 57px;
    background-color: #fff;
    height:59px;
    .shopnav-left{
        float: left;
        width: 75%;
        .shopnav-tab{
            display: inline-block;
            width:112px;
            text-align: center;
        }
        .shopnav-filter{
            float:right;
            font-size: 14px;
            position: relative;
            .active{
                    color: #0089dc;
            }
            a{
                padding: 0 15px;
                display: inline-block;
                padding: 0 10px;
                line-height: 1;
                border-left: 1px solid #eee;
                color: #333;
            }
        }
    }
    .shopnav-search{
        float: right;
        line-height: normal;
        font-size: 14px;
        border:1px solid #ccc;
        padding:3px;
        margin-right:30px;
        margin-top:10px;
        width:250px;
        position: relative;
        input{
            border:none;
            outline: none;
            height:30px;
        }
        svg{
            position: absolute;
            top: 8px;
            right:15px;
        }
    }


}
.store-content{
    background-color: #eeeeee;
    .shopmain{
        margin-top:20px;
        width: 1180px;
        margin:auto;
        display: table;
        clear: both;
        .shopmenu{
            float: left;
            width: 75%;
            .loading{
                display:none;
                font-size: 14px;
                color: #999;
                line-height: 150px;
                text-align: center;
                img{
                    margin-top: -2px;
                    margin-right: 10px;
                    width: 86px;
                }
            }
            .hide{
                width: 853px;
                position: fixed;
                top: 0;
                left: 81.5px;
            }
            .shopmenu-nav{
                padding: 10px 15px 5px;
                background-color: #fff;
                border: 1px solid #eee;
                z-index: 101;
                a{
                    display: inline-block;
                    margin: 5px;
                    padding: 3px 10px;
                    width: 16%;
                    border-radius: 2px;
                    color: #666;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    vertical-align: top;
                    &:hover{
                       background-color: #eeeeee;
                    }
                }
                .active{
                    background-color:#0089dc !important;
                    color:white;
                }
            }
            .shopmenu-main{
                .shopmenu-list{
                    width: 104%;
                    clear: both;
                    .shopmenu-title{
                        padding: 20px 0 10px 15px;
                        font-size: 20px;
                        span{
                            font-size: 12px;
                            color: #999;
                        }
                    }
                    .shopmenu-food{
                        background-color: white;
                        position: relative;
                        float: left;
                        margin-right: 2%;
                        margin-bottom:12px;
                        padding-right: 10px;
                        width: 46%;
                        img{
                            float: left;
                            margin-right: 14px;
                            width: 100px;
                            height: 100px;
                        }
                        .shopmenu-food-main{
                                margin-top: 10px;
                                h3{
                                    font-size: 14px;
                                    font-weight: 700;
                                }
                                p{
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    color: #999;
                                    font-size: 12px;
                                }
                                .pay{
                                    color: #f74342;
                                    bottom: 10px;
                                }
                                .add{
                                    cursor: pointer;
                                    float: right;
                                    background-color: #0089dc;
                                    color: #fff;
                                    width: 70px;
                                    height:25px;
                                    text-align: center;
                                    line-height: 25px;
                                    border-radius: 20px;
                                }
                        }
                    }
                    .shopmenu-food2{
                        background-color: white;
                        position: relative;
                        float: left;
                        margin-right: 2%;
                        margin-bottom:12px;
                        width: 96%;
                         img{
                            float: left;
                            margin-right: 14px;
                            width: 100px;
                            height: 100px;
                        }
                         .shopmenu-food-main{
                                margin-top: 10px;
                                .star{
                                    &::before{
                                       content: "\e950\e950\e950\e950\e950";

                                    }
                                }
                                h3{
                                    font-size: 14px;
                                    font-weight: 700;
                                }
                                p{
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    color: #999;
                                    font-size: 12px;
                                }
                                .pay{
                                    color: #f74342;
                                    bottom: 10px;
                                }
                                .add{
                                    cursor: pointer;
                                    float: right;
                                    background-color: #0089dc;
                                    color: #fff;
                                    width: 70px;
                                    height:25px;
                                    text-align: center;
                                    line-height: 25px;
                                    border-radius: 20px;
                                }
                        }
                    }

                }
            }
        }
        .shopmenu-right{
            float: right;
            width: 23.6%;
            .shopbulletin-section-title{
                padding: 0 1em;
                line-height: 2.8em;
                background-color: #0089dc;
                color: #fff;
            }
            .shopbulletin-content{
                padding: 10px 15px;
                line-height: 2;
                background-color: white;
                font-size: 14px;
            }
            .shopbulletin-delivery{
                padding: 10px 15px;
                background-color: #f5f5f5;
            }
            a{
                background-color: white;
                display: inline-block;
                width: 100%;
                height:50px;
                text-align: center;
                line-height: 50px;
                font-size:18px;
            }

        }
    }
}
.shopping-cart{
    position: fixed;
    right:0;
    bottom:0;
    width:300px;
    .single{
        font-size: 14px;
        background-color: #fafafa;
        padding: 10px 20px;
        border-top: 2px solid #0089dc;
        border-bottom: 1px solid #eee;
        a{
            color:#0089dc;
        }
    }
    .cart-table{
        table-layout: fixed;
        height: 45px;
        width: 100%;
        padding: 0 10px;
        margin-top: -1px;
        background-color: white;
        line-height: 45px;
        display: flex;
        align-items: center;
        &:hover{
            background-color: #f5f5f5;
        }
        .cell{
            display:inline-block;
            width: 45%;
            margin-right: 10px;
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666;
        }
        .itemquantity{
            display:inline-block;
            display: flex;
            align-items: center;
            button{
                background-color: #fff;
                height: 20px;
                width: 20px;
                line-height: 18px;
                vertical-align: top;
                border: 1px solid #ddd;
                outline: 0;
                cursor: pointer;
            }
        }
        .foodprice{
            display: table-cell;
            margin-left: 45px;
            text-align: right;
            color:crimson;
            font-weight: 500px;
        }

    }
     .shop-cartfooter{
            display: flex;
            align-items: center;
            z-index: 2;
            position: relative;
            cursor: pointer;
            height: 46px;
            line-height: 46px;
            background-color: #2c2c2c;
            box-shadow: 0 1px 3px #2c2c2c;
            color:white;
            .carticon{
                padding:0 10px 0 10px;
            }
            p{
                font-size: 15px;
                display: inline-block;
                span{
                    font-size: 25px;
                }
            }
            .shop-cartfooter-text{
                position: relative;
                font-size: 12px;
                margin-left: 2px;
                padding-left: 6px;
                color: #999;
                border-left: 1px solid #555;
                line-height: 1;
            }
            .shop-cartfooter-checkout{
                background-color: #51d862;
                color: white;
                cursor: default;
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                border: 0;
                outline: 0;
                width: 120px;
                text-align: center;
                font-weight: 700;
            }
    }
}
.store-shade{
    z-index: 200;
    background-color: rgba(0,0,0,0.4);
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    display: none;
    .store-norms{
        position: absolute;
        background-color: #fff;
        width: 300px;
        border: 1px;
        box-shadow: 0 1px 15px #ccc;
        height:214px;
        padding:10px;
        box-sizing: border-box;
        .price{
            color: #ff6000;
            font-weight: 700;
            span{
                font-size: 16px;
            }
        }
        p{
            margin:5px 0 0 0;
        }
        button{
            padding: 8px 17px;
            cursor: pointer;
            border-radius: 2px;
            text-align: center;
            background-color: white;
            color: #999;
            outline:none;
            margin-top:5px;
        }
        .blue{
            background-color: #0089dc;
            color: #fff;
            &:hover{
                background-color: #0074b7;
            }
        }
        &::before{
            content:"";
            position: absolute;
            left: -12px;
            top:30px;
            width: 0;
            height:0;
            border: 6px solid transparent;
            border-right-color: #fff;
        }
        .shop-specmenu-specs{
            padding: 12px 10px 0;
            border: 1px solid #eee;
            background-color: #fcfcfc;
            font-size:14px;
            .norms-item{
                width: 58px;
                height:26px;
                border:1px solid #bbb;
                border-radius: 15px;
                text-align: center;
                line-height: 26px;
                color: #999;
                display: inline-block;
                margin:20px 18px 20px 0;
                cursor: pointer;
            }
            .active{
                border-color:#0089dc;
                color: #0089dc;
            }
        }
    }
}
</style>
