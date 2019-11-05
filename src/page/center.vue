<template>
    <div class="center">
        <div class="ng-scope">
            <div class="profile">
                <div class="clearfix">
                    <div class="location">
                        <span>当前位置</span>
                        <span class="location-current">创新路新大陆壹号</span>
                        <span><a href="javascript:">[切换地址]</a></span>
                        <span>>个人中心</span>
                    </div>
                </div>
                 <ul class="profile-sidebar">
                     <li class="profile-sidebar-section">
                        <svg class="icon carticon" aria-hidden="true">
                            <use xlink:href="#icon-home"></use>
                        </svg>
                        <span>个人中心</span>
                     </li>
                    <li class="profile-sidebar-section">
                        <svg class="icon carticon" aria-hidden="true">
                            <use xlink:href="#icon-ico-shrwd"></use>
                        </svg>
                        <span>我的订单</span><br/>
                     <ul>
                         <li>
                             近三个月订单
                         </li>
                     </ul>
                     </li>
                    <li class="profile-sidebar-section">
                        <svg class="icon carticon" aria-hidden="true">
                            <use xlink:href="#icon-renminbiqian"></use>
                        </svg>
                        <span>我的资产</span>
                         <ul>
                            <li>
                                我的红包
                            </li>
                              <li>
                                我的金币
                            </li>
                        </ul>
                     </li>
                    <li class="profile-sidebar-section">
                        <svg class="icon carticon" aria-hidden="true">
                            <use xlink:href="#icon-geren"></use>
                        </svg>
                        <span>我的资料</span>
                        <ul>
                            <li>
                                个人资料
                            </li>
                              <li>
                                地址管理
                            </li>
                        </ul>
                     </li>
                    <li class="profile-sidebar-section">
                        <svg class="icon carticon" aria-hidden="true">
                            <use xlink:href="#icon-xingxing"></use>
                        </svg>
                        <span>我的收藏</span>
                     </li>
                 </ul>  
                 <div class="profile-panel">
                     <div class="panel-content">
                         <div class="profile-info">
                            <div class="profile-infoitem">
                                <div class="head-img">
                                    <img src="http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg" alt="">
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
                                <div class="orderblock">
                                    <div class="orderblock-item">
                                        <img src="https://fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85" alt="">   
                                        <div>
                                            <h3 class="name">
                                            汉堡王(马尾名城23403)
                                            </h3>
                                            <p class="product">送福单人套餐1份</p>
                                            <a href="javascript:">共一个菜品</a>
                                        </div>
                                    </div>
                                    <div class="orderblock-item time">
                                        16时50分钟前
                                    </div>
                                     <div class="orderblock-item price">
                                        ¥37.00
                                    </div>
                                      <div class="orderblock-item status">
                                       <p>等待评价</p>
                                        <a href="javascript:">立即评价</a>
                                    </div>
                                </div>
                                 <div class="orderblock">
                                    <div class="orderblock-item">
                                        <img src="https://fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr2/thumbnail/70x70/format/webp/quality/85" alt="">   
                                        <div>
                                            <h3 class="name">
                                            汉堡王(马尾名城23403)
                                            </h3>
                                            <p class="product">送福单人套餐1份</p>
                                            <a href="javascript:">共一个菜品</a>
                                        </div>
                                    </div>
                                    <div class="orderblock-item time">
                                        16时50分钟前
                                    </div>
                                     <div class="orderblock-item price">
                                        ¥37.00
                                    </div>
                                    <div class="orderblock-item status">
                                       <p>等待评价</p>
                                        <a href="javascript:">立即评价</a>
                                    </div>
                                </div>
                            </div>
                         </div>
                     </div>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.center{
    a{
        text-decoration: none;
    }
    background-color: #eeeeee;
    .profile{
        width: 1180px;
        margin: 0 auto;
        .location{
            vertical-align: middle;
            font-size: 12px;
            span{
                display: inline-block;
                line-height: 54px;
                vertical-align: top;
            }
            span:first-child{
                color: #999;
                margin-right: 5px;
            }
            .location-current{
                max-width: 138px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-right: .5em;
            }
            a{
                color: #0089dc;
            }
        }
    }
    .profile-sidebar{
        float: left;
        margin-top: 20px;
        width: 170px;
        li:first-child{
            cursor: pointer;
        }
        li:last-child{
             cursor: pointer;
        }
        .profile-sidebar-section{
            list-style: none;
            margin-bottom:32px;
            display: flex;
            align-items: center;
            flex-wrap:wrap;
            span{
                margin-left: 15px;
                font-size: 18px;
                font-weight: 600;
            }
            ul{
                margin-top:10px;
                width: 100%;
                li{
                    height:30px;
                    line-height: 30px;
                    list-style: none;
                    padding-left:40px;
                    color: #666;
                    font-size: 14px;
                    cursor: pointer;
                }
            }
        }
    }
    .profile-panel{
        margin-left:170px;
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
                    display: inline-block;
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
                // position: relative;
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
    }
}
</style>