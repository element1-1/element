<template>
    <div class="payorder">
         <div class="payorder-nav">
             <header class="carttopbar">
                 <div class="carttopbar-nav container">
                     <span>
                         当前位置：
                     </span>
                     <a href="javascript:">创新路新大陆壹号</a>
                      <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-you"></use>
                    </svg>
                    <a href="javascript:">早餐店</a>
                     <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-you"></use>
                    </svg>
                    <span>订单信息</span>
                 </div>
             </header>
         </div>
         <div class="payorder-main">
             <div class="container main-nav">
                 <a href="javascript:" class="checkoutguide-text">饿了么</a>
                 <span class="checkoutguide-text">订单信息</span>
                 <div class="checkoutguide-content">
                    <p>
                         <span class="line line1"></span>
                         <span class="line line2"></span>
                         <span class="line line3"></span>
                         <span class="line line4"></span>
                     </p>
                     <span class=" checkoutguide-item active">
                         <i>1</i>
                         <h5>选择商品</h5>
                     </span>
                      <span class="checkoutguide-item active">
                         <i>2</i>
                          <h5>确认订单信息</h5>
                     </span>
                    <span class="checkoutguide-item">
                         <i>3</i>
                          <h5>成功提交订单</h5>
                     </span>
                 </div>
             </div>
             <div class="container main-content">
                 <div class="checkout-cart">
                     <div class="checkoutcart-title">
                        <h2>
                            订单详情
                        </h2>
                        <a href="javascript:"> < 返回商家修改</a>
                     </div>
                     <div class="checkoutcart-tablerow tablerow">
                         <div class="item itemname">
                            商品
                         </div>
                          <div class="item itemquantity">
                            份数
                         </div>
                          <div class=" item itemtotal">
                            小计（元）
                         </div>
                     </div>
                     <dl>
                         <dt class="tablerow">1号购物车</dt>
                         <dd class="tablerow">
                             <div>
                                 油条
                             </div>
                             <div  class="itemquantity">
                                <button @click="reducefood()">-</button>
                                <button>1</button>
                                <button @click="addfood()">+</button>
                            </div>
                            <div class="foodprice">
                                ¥30.00
                            </div>
                         </dd>
                     </dl>
                     <div class="tablerow distributionfee">
                         <div>配送费</div>
                         <div>¥2.60</div>
                     </div>
                     <div class="checkoutcart-total">
                         ¥
                         <span>25.00</span>
                     </div>
                     <div class="checkoutcart-totalextra">
                         共8份商品
                     </div>
                 </div>
                 <div class="checkout-content">
                     <div class="checkout-select">
                         <h2>收货地址 <a href="javascript:">添加新地址</a></h2>
                        <ul>
                            <li class="checkout-address">
                                <i>图标</i>
                                <div class="checkout-address-info">
                                    <p>王 女士 15735101060</p>
                                    <p>启达·时尚大厦</p>
                                </div>
                            </li>
                            <a href="javascript:">显示更多地址v</a>
                        </ul>
                     </div>
                     <div class="checkout-select">
                         <h2>
                             付款方式<span>推荐使用在线支付，不用找零，优惠更多</span>
                         </h2>
                         <div class="checkout-pay">
                             <p style="margin-bottom:2px;">在线支付</p>
                             <p style="color: #999;">支持微信、支付宝、QQ钱包及大部分银行卡</p>
                         </div>
                     </div>
                      <div class="checkout-select">
                         <h2>
                             选择优惠
                         </h2>
                        <p style="margin-bottom:2px;">
                            <span>
                                使用优惠券
                            </span>
                            <span>网站不支持
                                <em>（仅手机客户端可用）</em>
                            </span>
                        </p>
                     </div>
                     <div class="checkout-select">
                         <h2>
                             其他信息
                         </h2>
                        <div class="checkout-info">
                            <span>配送方式</span>
                            <span>本订单由
                                <a href="javascript:"> [德克士（东方名城）] </a>
                                提供配送</span>
                        </div>
                        <div class="checkout-info">
                            <span>送达时间</span>
                            <div class="select" >
                                <div @click="select($event)">
                                    <input type="text"  placeholder="请选择" readonly="readonly" >
                                    <svg class="icon carticon" aria-hidden="true" >
                                        <use xlink:href="#icon-xia"></use>
                                    </svg>
                                </div>   
                                <ul>
                                    <li>
                                        立即配送
                                    </li>
                                     <li>
                                        13:00前
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="checkout-info">
                           <span>发票信息</span>
                           <input type="text" placeholder="仅在饿了么 APP 中支持开发票哦" disabled>
                       </div>
                       <div class="checkout-info">
                           <span>订单备注</span>
                           <input type="text" >
                       </div>
                       <div class="checkout-info">
                            <span>餐具份数</span>
                            <div class="select" >
                               <div @click="select($event)">
                                    <input type="text"  placeholder="请选择" readonly="readonly" >
                                    <svg class="icon carticon" aria-hidden="true">
                                        <use xlink:href="#icon-xia"></use>
                                    </svg>
                               </div>
                                <ul>
                                    <li>
                                        无需餐具
                                    </li>
                                     <li>
                                        1份
                                    </li>
                                     <li>
                                        2份
                                    </li>
                                </ul>
                            </div>
                       </div>
                       <div class="checkout-infor">
                             <div class="test">
                               <svg class="icon carticon" aria-hidden="true">
                                        <use xlink:href="#icon-riqi"></use>
                                </svg>
                                <input type="text" placeholder="开始日期" class="test-input"  readonly="readonly">
                                至
                                <input type="text" placeholder="结束日期" class="test-input" readonly="readonly">
                           </div>  
                           <!-- <button class="order-button" id="orderbutton">确认下单</button> -->
                       </div>
                    </div>
                 </div>
             </div>
             <div class="checkout-quicksubmit">
                 <div class="container">
                     <span class="quick-text">应付金额 
                         <span>¥</span>
                         <span>26</span>
                     </span>
                     <button class="order-button">确认下单</button>
                 </div>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    methods:{
        select(e){
            if($(e.currentTarget).siblings("ul").is(":visible")){
                 $(e.currentTarget).siblings("ul").slideUp();
            }else{
                $(e.currentTarget).siblings("ul").slideDown();
            }
            
        }
    },
    mounted(){
         var start_height = $(document).scrollTop();
        //获取导航栏的高度(包含 padding 和 border)
        var button_height = $('#orderbutton').offset().top;
        // console.log(button_height,$(window).height())
        $(window).scroll(function() {
            var Height = $(window).height();
            //触发滚动事件后，滚动条的高度（本次高度）
            var end_height = $(document).scrollTop();
            //触发后的高度 与 元素的高度对比
            if (button_height-end_height-Height<0){
                $('.checkout-quicksubmit').css("display","none");
            }else {
                $('.checkout-quicksubmit').css("display","block");
            }
            start_height = $(document).scrollTop();
        });   
    }
}
</script>
<style lang="less">
.test{
    position: relative;
    height:38px;
    border: 1px solid #e0e0e0;
    width:300px;
    padding-left:40px;
    box-sizing: border-box;
    svg{
        position: absolute;
        left:5px;
        top:8px;
    }
    // .test-input:first-child{
    //     display: inline-block;
    // }
    .test-input{
        cursor: pointer;
        background-color: #fff;
        height: 100%;
        outline: none;
        border: none;
        width:100px;
        box-sizing: border-box;
        padding-left: 20px;
        color: #666;
    }
}
.container{
    width: 1180px;
    margin:0 auto;  
    font-size: 14px;  
}
li{
    list-style: none;
}
.order-button{
    background-color: #f74342;
    padding: 12px 30px;
    font-size: 16px;
    border: none;
    border-radius: 2px;
    outline: 0;
    cursor: pointer;  
    color:#fff;
    &:hover{
            background-color: #e62625;
    }
}
.payorder{
    background-color: #f7f7f7;
    .carttopbar{
        display: block;
        background-color: #0089dc;
        border-bottom: 1px solid #027ecb;
        color: #fff;
        font-size: 12px;
        .carttopbar-nav{
            display: flex;
            align-items: center;
            line-height: 30px;
            height:30px;
            a{
                color:white;
            }
        }
    }
    .payorder-main{
            background-color: #0089dc;
            height: 96px;
        .main-nav{
            height:100%;
            position: relative;
            display: flex;
            align-items: center;
            .checkoutguide-text{
                font-size: 26px;
                color: #fff;
                margin-left: 14px;
            }
            .checkoutguide-text:last-child{
                border-left: 1px solid #9cc9ee;
                margin-left: 14px;
                width: 130px;
                text-align: center;
            }
            .checkoutguide-content{
                position: absolute;
                right:0;
                top:30px;
                .active{
                    i{
                         background-color: #fef22f;
                    }
                    h5{
                       color: #fef22f; 
                    }
                }
                span{
                    display: inline-block;
                     width: 100px;
                     z-index:1;
                     position: relative;
                     height:48px;
                     h5{
                       text-align: center;
                       color: #a5d0f3;
                     }
                    i{
                        display: inline-block;
                        margin: 0 40px 8px;
                        width: 22px;
                        line-height: 22px;
                        border-radius: 50%;
                        font-weight: 700;
                        color: #0089dc;
                        background-color: #a5d0f3;
                        text-align: center;
                        font-style: normal;
                        font-size:12px;
                        z-index:1;
                    }
                }
                .checkoutguide-item{
                    margin-left:65px;
                }
                p{
                    position: absolute;
                    top: 10px;
                    right: 45px;
                    height: 3px;
                    width: 350px;
                    background-color: #9cc9ee;
                    &::after{
                        position: absolute;
                        left: 0;
                        height: 3px;
                        content:'';
                        background: #fef22f;
                        width:260px;
                    }
                    .line{
                        display: inline-block;
                        height: 3px;
                        background-color: #fff;
                        vertical-align: top;
                    }
                    .line1{
                        width: 3px;
                        margin-left:-48px;
                    }
                    .line2{
                        width: 5px;
                    }
                    .line3{
                        width: 8px;
                    }
                    .line4{
                        width: 15px;
                    }
                }
            }
        }
        .main-content{
            clear: both;
            &::after{
                content: "";
                display: table;
                height: 0;
                clear: both;
            }
            .checkout-cart{
                float: left;
                width: 34%;
                margin-top: 12px;
                background-color: #fff;
                border: 1px solid #e0e0e0;
                .checkoutcart-title{
                    position: relative;
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                    h2{
                        font-size: 16px;
                        font-weight: 700;
                        color: #333;
                    }
                    a{
                        position: absolute;
                        top:22px;
                        right:28px;
                        font-size: 12px;
                        color: #666;
                    }
                }
                .tablerow{
                     height: 48px;
                    line-height: 48px;
                    padding: 0 18px 0 20px;
                    box-sizing: border-box;
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .checkoutcart-tablerow{
                    font-weight: 700;
                    font-size: 12px;
                    color: #999;
                    .itemname{
                        width: 45%;
                    }
                    .itemquantity{
                        width: 30%;
                    }
                }
                dl{
                    dt{
                        border-bottom: 1px solid #eee;
                        padding-left: 30px;
                        height: 48px;
                        line-height: 48px;
                        font-size: 14px;
                        font-weight: 700;
                        color: #333;
                    }
                    dd{
                        background-color: #fcfaf8;
                        font-size: 14px;
                        .itemquantity{
                            display:inline-block;
                            display: flex;
                            align-items: center;
                            width: 35%;
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
                        div:first-child{
                            width: 45%;
                        }
                    }
                   
                }
                .distributionfee{
                    font-size: 12px;
                    div:first-child{
                        width: 80%;
                    }
                    div:last-child{
                        font-size:14px;
                    }
                }
                .checkoutcart-total{
                    padding: 52px 28px 10px;
                    font-size: 24px;
                    text-align: right;
                    color: #f74342;
                    span{
                        font-size: 46px;
                    }
                }
                .checkoutcart-totalextra{
                    padding: 0 30px 22px;
                    font-size: 12px;
                    color: #666;
                    text-align: right;
                }

            }
            .checkout-content{
                box-sizing: border-box;
                padding: 25px 20px 150px 30px;
                float: right;
                width: 65%;
                border: 1px solid #e0e0e0;
                margin-top:12px;
                .checkout-select{
                    margin-bottom: 40px;
                    h2{
                        margin-bottom: 15px;
                        font-size: 16px;
                        font-weight: 700;
                        span{
                            margin-left: 16px;
                            font-size: 12px;
                            font-weight: 400;
                            color: #ff9c00;
                        }
                    }
                    .checkout-pay{
                       // border-color: #0089dc;
                        padding: 11px 20px;
                        width: 49.2%;
                        border: 1px solid #0089dc;
                        cursor: pointer;
                    }
                    p{
                        span:last-child{
                            margin-left:5px;
                            color:#999;
                            em{
                                color: #f74342;
                            }
                        }
                    }
                    .checkout-info{
                        margin-bottom: 20px;
                        span:first-child{
                            display: inline-block;
                            margin-right: 20px;
                            width: 5em;
                            text-align: right;
                        }
                        input{
                            padding: 7px 10px;
                            width: 235px; 
                            border: 1px solid #e0e0e0;
                            outline: 0;
                            color: #666;
                        }
                        .select{
                            display: inline-block;
                            svg{
                                position: absolute;
                                top: 10px;
                                right:8px;
                                font-size: 10px;
                                cursor: pointer;
                                color:#c0c4cc;
                            }
                            input{
                                position: relative;
                                width: 100%;
                                height:38px;
                                border: 1px solid #e0e0e0;
                                background-color: #fff;
                                padding-left:10px;
                                outline: none;
                                cursor: pointer;
                                border-radius: 3px;
                                z-index: 0;
                                box-sizing: border-box;
                            }                          
                            position: relative;
                            width:160px;                                         
                            ul{
                                display: none;
                                position: absolute;
                                top:38px;
                                left:0;
                                background-color: #fff;
                                width:100%;
                                box-sizing: border-box;
                                border: 1px solid #e0e0e0;
                                font-size: 12px;
                                color: #606266;
                                li{
                                    height:40px;
                                    line-height: 40px;
                                    padding-left:5px;
                                }
                            }
                        }
                    }
                }
                .checkout-select:first-child{    
                    a{
                        display:inline-block;
                        margin-top: 8px;
                        color: #999;
                    }
                    h2{
                        a{
                            float: right;
                            text-decoration: underline;
                            font-size: 14px;
                            font-weight: 400;
                            color:#0089dc;
                        }
                    }
                    .checkout-address{
                        display: flex;
                        box-sizing: border-box;
                        align-items: center;
                        position: relative;
                        margin-bottom: -1px;
                        padding: 15px 20px 15px 0;
                        width: 100%;
                        border: 1px solid #eee;
                        cursor: pointer;
                        .checkout-address-info{
                            padding-left:16px;
                        }
                    }
                }
            }
        }
        .checkout-quicksubmit{
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background: #fff;
            opacity: .85;
            border-top: 1px solid #ddd;
            height: 50px;
            text-align: right;
            padding-top: 4px;
            .container{
                height:100%;
            }
            .quick-text{
                display: inline-block;
                height:100%;
                padding-top: 10px;
                margin-right: 2em;
                span:first-child{
                    padding: 0 4px 0 6px;
                    font-size: 16px;
                    color: #f74342;
                }
                span:last-child{
                    font-size: 24px;
                    font-weight: 700;
                    color: #f74342;
                }
            }
        }
    }
    
}
</style>