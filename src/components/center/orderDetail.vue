<template>
    <div class="orderdetail">
        <div class="panel-content">
            <h3>订单详情</h3>
            <div class="orderprogress-card">
                <div class="orderprogress-status">
                    <h5>订单已送达</h5>
                    <p>19:56确认送达</p>
                    <div class="orderprogress-statusbuttons">
                        <a href="javascript:">申请退单</a>
                        <a href="javascript:">再来一单</a>
                        <a href="javascript:">评价得金币</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="orderprogress-rstinfo">
                    <img src="https://fuss2.ele.me/b/67/b4ee44a67338199590d4f3af29fe9jpeg.jpeg?imageMogr2/thumbnail/44x44/format/webp/quality/85" alt="">
                    <div class="info">
                        <span>订单号：{{store.ordernum}}</span>
                        <span>商家电话：15859931909</span>
                    </div>
                    <div>
                        收藏
                    </div>
                </div>
            </div>
            <div class="orderprogress-cardtable">
                <div class="orderprogress-cardcell">
                    <div class="orderprogress-totalrow">
                        <span class="cell name">菜品</span>
                        <span class="cell quantity">数量</span>
                        <span class="cell price">小计（元）</span>
                    </div>
                    <div class="orderprogress-totalrow foodlist" v-for="order in order">
                        <span class="cell name">{{order.foodname}}</span>
                        <span class="cell quantity">{{order.num}}</span>
                        <span class="cell price">{{order.totalprice}}</span>
                    </div>
                     <div class="orderprogress-totalrow favourable">
                        <span class="cell name">店铺满减优惠</span>
                        <span class="cell price">-2.00</span>
                    </div>
                     <div class="orderprogress-totalrow favourable">
                        <span class="cell name">店铺红包</span>
                        <span class="cell price">-4.00</span>
                    </div>
                     <div class="orderprogress-totalrow favourable">
                        <span class="cell price" style="color: #333;">实际支付：
                            <em>{{totalprice}}</em>
                        </span>
                    </div>
                </div>
                <div class="orderprogress-location">
                    <div class="orderprogress-deliveryinfo">
                        <h5 class="orderprogress-deliverytitle">配送信息</h5>
                        <div class="orderprogress-deliverygroup">
                            <p>配送方式：蜂鸟配送</p>
                            <p>送达时间：尽快送达</p>
                        </div>
                         <div class="orderprogress-deliverygroup">
                            <p><span>联&nbsp;系&nbsp;人：</span><span>{{store.name}}</span></p>
                            <p><span>联系电话：</span><span>{{store.phone}}</span></p>
                            <p><span>收货地址：</span><span>{{store.location}}</span></p>
                        </div>
                          <div class="orderprogress-deliverygroup">
                            <p><span>发票信息：</span><span>无发票</span></p>
                            <p><span>备  注：</span><span>无备注</span></p>
                        </div>
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
            store:'',
            order:'',
            totalprice:0
        }
    },
    methods:{
        totalmoney(){
            let momey=0;
            for(let i=0;i<this.order.length;i++){
                money+=this.order[i].totalprice;
            }
            return money;
        },
        setorder(order){
            //console.log(order);
            let arr=[];
            let money=0;
            for(let i=0;i<order.length;i++){
               let flag=true;
                for(let t=0;t<arr.length;t++){
                    if(arr[t].id==order[i].id){
                        flag=false;
                        arr[t].num++;
                        arr[t].totalprice+=parseInt(arr[t].foodprice);
                        money+=parseInt(arr[t].foodprice);
                        break;
                    }
                }
               if(flag){
                    order[i].num=1;
                    order[i].totalprice=parseInt(order[i].foodprice);
                    money+=parseInt(order[i].foodprice);
                    arr=arr.concat(order[i]);
               }
           }
           this.order=arr;
           this.totalprice=money-6;
           //console.log( this.totalmoney)
        }
    },
    mounted(){
        let id=this.$route.params.id;
        this.$http.post("index/center/getorderDetail",{
            orderid:id
        })
        .then(res => {
           this.store=res.data.res;
           console.log(res);
           let order=res.data.order;
         //  console.log(order);
           this.setorder(order);
        })
        .catch(err => {
          
        });
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';
.orderdetail{
    padding:20px 18px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: left;
    font-size: 14px;
    h3{
        border-bottom: 2px solid #f4f4f4;
        padding: 0 20px 11px;
        font-size: 18px;
        font-weight: 700;
    }
    .orderprogress-card{
        width: 100%;
        margin: 20px 0;
        .orderprogress-status{
            position: relative;
            padding: 24px 32px 0 30px;
            border: 1px solid #f8e5bb;
            background-color: #fefdee;
            line-height: 1;
            h5{
                padding-bottom: 12px;
                font-size: 16px;
            }
            p{
                padding-bottom: 8px;
                line-height: 1.5;
                font-size: 14px;
                color: #999;
            }
            .orderprogress-statusbuttons{
                position: absolute;
                top: 24px;
                right: 32px;
                height: 40px;
                a{
                    display: inline-block;
                    line-height: 40px;
                    margin-left: 24px;
                    min-width: 100px;
                    text-align: center;
                    text-decoration: underline;
                }
                a:last-child{
                    color: #fff;
                    padding: 0 .8em;
                    border-radius: 2px;
                    background-color: #f74342;
                    cursor: pointer;  
                    color:#fff;
                     text-decoration: none;
                    &:hover{
                            background-color: #e62625;
                    }
                }
            }
        }
    }
    .orderprogress-rstinfo{
        position: relative;
        padding: 18px 30px 16px;
        background-color: #f8f8f6;
        border: 1px solid #eee;
        display: flex;
        // font-size:16px;
        img{
            margin-right: 12px;
        }
        div{
            display:inline-block;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                max-width: 250px;
                padding-right: 50px;
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #999;
            }
        }
    }
    .orderprogress-cardtable{
        .orderprogress-cardcell{
            display:inline-block;
            width: 538px;
            background-color: #f8f8f8;
            border-left: 1px solid #eee;
            vertical-align: top;
            .cell{
                display: inline-block;
                vertical-align: middle;
            }
            .name{
                box-sizing: border-box;
                padding-left: 30px;
                width: 58%;
                text-align: left;
            }
            .quantity{
                width: 10%;
                text-align: center;
            }
            .price{
                padding-right: 30px;
                width: 30%;
                 text-align: right;
                box-sizing: border-box;
            }
            .orderprogress-totalrow{
                padding: 20px 0 16px;
                font-weight: 700;
                border-bottom: 1px solid #eee;
            }
            .foodlist{
                color: #666;
                font-weight: 400 !important;
                .price{         
                    padding:0;
                    text-align: center;
                }
            }
            .favourable{
                border:0 !important;
                color: #666;
                font-weight: 400 !important;
               .price{     
                    float: right;    
                    padding:0;
                    text-align: center;
                    color: #f74342;
                    em{
                        font-style: normal;
                        font-size: 26px;
                        font-weight: 700;
                        color: #f74342;
                    }
                } 
            }
        }
        .orderprogress-location{
            width: auto;
            display:inline-block;
            .orderprogress-deliveryinfo{
                padding: 0 30px;
                .orderprogress-deliverytitle{
                    padding: 20px 0 4px;
                    font-size: 14px;
                    font-weight: 700;
                }
                .orderprogress-deliverygroup{
                    border-bottom: 1px dashed #eee;
                    padding: 20px 0 4px;
                    p{
                        height:36px;
                        span:first-child{
                            display: inline-block;
                            width: 5em; 
                            text-align: justify;
                            vertical-align: top;
                            &::after{
                                content: '';
                                display: inline-block;
                                width:100%;
                                height:0; 
                            }
                        }  
                    }
                }
            }
        }
    }

}
</style>