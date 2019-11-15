<template>
    <div class="panel-content">
        <div class="profile-info">
        <div class="profile-infoitem">
            <div class="head-img">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572932704879&di=16ce95e45d243a850cd5dc33e8d00c09&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201601%2F13%2F20160113194651_EfQaj.jpeg" alt="">
            </div>
            <div class="perosondata">
                <h3>早上好，faineswbe</h3>
                <p> 订餐了吗？提前订餐送的快！ </p>
            </div>
        </div>
        <div class="profile-infoitem">
            <p>我的红包</p>
            <p class="profile-infoitem-number" style="color: #fc463f;">
                <span>0</span>个
            </p>
        </div>
        <div class="profile-infoitem">
            <p>我的金币</p>
            <p class="profile-infoitem-number" style="color: #5db423;">
                <span>537</span>个
            </p>
        </div>
        <div class="profile-infoitem">
            <p>账户余额</p>
            <p class="profile-infoitem-number"  style="color:#ff9c00;">
                <span>0.00</span>个
            </p>
        </div>
        </div>
        <div class="profile-order">
        <div class="tabnav">
                <a href="javascript:">最近订单</a>
                <a href="javascript:">查看全部订单></a>
        </div>
        <div class="profile-order-content">
            <div style="display:none">
                正在加载
            </div>
            <div class="orderblock" v-for="(store,index) in store" :key="index">
                <div class="orderblock-item">
                    <img src="https://fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85" alt="">   
                    <div>
                        <h3 class="name">
                        {{store.storename}}
                        </h3>
                        <p class="product" v-html='orderlist[index][0].foodname+"1份"'></p>
                        <a href="javascript:" @click="lookorder(store.id)" v-html="'共'+orderlist[index].length+'个菜品'"></a>
                    </div>
                </div>
                <div class="orderblock-item time">
                    16时50分钟前
                </div>
                <div class="orderblock-item price">
                    {{store.price}}
                </div>
                <div class="orderblock-item status" v-if="store.assessid==null">
                    <p>等待评价</p>
                    <a href="javascript:" @click="assess(store.id)">立即评价</a>
                </div>
                 <div class="orderblock-item status" v-else>
                    <p style="color:#999">订单已完成</p>
                    <a href="javascript:"  @click="lookorder(store.id)">订单详情</a>
                </div>
            </div> 
            <pagenation :total="total" everypage="3"  @sendCurrentPage='getMsg'></pagenation>
        </div>
        
        </div>
    </div> 
</template>
<script>
import pagenation from "../common/pagenation";
export default {
    components: {
        pagenation
     },
    data(){
        return{
            store:'',
            orderlist:'',
            total:'',
            currentPage:1
        }
    },
    methods:{
       getMsg(data){ 
           this.currentPage = data;
           this.getorder();
       },
       getorder(){
            this.$http.post("index/center/getOrder",{
               currentPage:this.currentPage,
               everynum:3
            })
            .then(res => {
                this.store=res.data.store;
                this.orderlist=res.data.order;
            })
            .catch(err => {
               alert("数据接收失败");
            });
       },
       lookorder(id){
            this.$router.push("/orderdetail/"+id);
       },
       assess(id){
           this.$router.push("/rate/"+id); 
       }
    },

    mounted(){
        this.$http.post("index/center/getOrdernum")
        .then(res => {
            this.total=res.data.total;
        });
        this.getorder();     
    } 
}
</script>
<style lang="scss" scoped>
//   .profile-panel{
//         margin-left:170px;
        .profile-info{
            margin-bottom: 20px;
            border: 1px solid #eee;
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            padding: 30px 0;
            width: 100%;
            .profile-infoitem:first-child{
                display:flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding-left: 30px;
                width: 398px;
                text-align: left; 
                .head-img{
                    width: 80px;
                    height:80px;
                    position: relative;
                   // display: inline-block;
                    img{
                            width: 80px;
                            height:80px;
                        }
                    margin-right: 20px;
                    cursor: pointer;
                    border-radius: 50%;
                    border: 1px solid #eee;
                    overflow: hidden;
                }
                h3{
                    max-width: 220px;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p{
                    margin: 6px 0 10px;
                    color: #999;
                    font-size: 12px;
                }
            }
            .profile-infoitem{
                display: inline-block;
                padding:0;
                border-right: 1px solid #eee;
                width: 185px;
                text-align: center;
                width: 203px;
                p:first-child{
                    margin-top:10px;
                }
                .profile-infoitem-number{
                    font-weight: 600;
                    font-size: 12px;
                    height: 60px;
                    line-height: 60px;
                    span{
                        font-size:30px;
                    }
                }
            }
            div{
                display: inline-block;
            }
          
        }
        .profile-order{
             padding: 20px 20px 0;
            margin-bottom: 20px;
            border: 1px solid #eee;
            background-color: #fff;
            .tabnav{
                border-bottom: 2px solid #f4f4f4;
               text-align: left;
                a{
                    text-decoration: none;
                }
                a:first-child{
                    font-weight: 700;
                    border-bottom: 3px solid #0089dc;
                    display: inline-block;
                    margin-bottom: -2px;
                    padding: 0 10px;
                    height: 27px;
                    cursor: pointer;
                    font-size: 16px;
                    color: #666;
                }
                a:last-child{
                    float:right;
                    font-size: 12px;
                    color: #666;
                    &:hover{
                        color:#0089dc;
                        text-decoration: underline;
                    }
                }
            }
            .profile-order-content{
                // padding: 20px 0 15px;
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap:wrap;
                border-top: 1px solid #eee;
                .orderblock{
                    display: flex;
                    align-items: center;
                    border-top: 1px solid #eee;
                    padding: 20px 0 15px;
                    .orderblock-item:first-child{
                        width: 593px;
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        text-align: left;
                        img{
                            display: inline-block;
                            width: 80px;
                            height:80px;
                            margin-right: 20px;
                        }
                        .name{
                            display: inline-block;
                            width: 400px;
                            font-size: 16px;
                            font-weight: 700;
                        }
                        .product{
                            display: inline-block;
                            width: 400px;
                            margin: 6px 0;
                            color: #999;
                        }
                        a{
                            text-decoration: none;
                            display: inline-block;
                            width: 400px;
                            color: #999;
                        }
                    }
                    .orderblock-item{
                        display: inline-block;
                        text-align: center;
                    }
                    .time{
                        width: 85px;
                        color: #999;
                        font-size: 13px;
                    }
                    .price{
                        width: 190px;
                    }
                    .status{    
                        p{
                            color: #ff9c00;
                            font-size:16px;
                        }
                        a{
                            color: #0089dc;
                            font-size:12px;
                        }
                    }
                }
            }
        }
    //}
</style>