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
                            <router-link to="/order">近三个月订单</router-link>
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
                        <router-link to="/collect"><span>我的收藏</span></router-link>
                     </li>
                 </ul>  
                
                <div class="profile-panel">
                    <router-view/>
                </div>  
            </div>
        </div>
    </div>
</template>
 <script>
// import pagenation from "../components/common/pagenation";
// export default {
//     components: {
//         pagenation
//      },
//     data(){
//         return{
//             store:'',
//             orderlist:'',
//             total:'',
//             currentPage:1
//         }
//     },
//     methods:{
//        getMsg(data){ 
//            this.currentPage = data;
//            this.getorder();
//        },
//        getorder(){
//             this.$http.post("index/center/getOrder",{
//                currentPage:this.currentPage,
//                everynum:3
//             })
//             .then(res => {
//                 this.store=res.data.store;
//                 this.orderlist=res.data.order;
//             })
//             .catch(err => {
//                alert("数据接收失败");
//             });
//        },
//        lookorder(id){
//            console.log(id);
//        }
//     },

//     mounted(){
//         this.$http.post("index/center/getOrdernum")
//         .then(res => {
//             this.total=res.data.total;
//         });
//         this.getorder();
        
//     } 
// }
 </script>

<style lang="scss" scoped>
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
            text-align: left;
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
            a{
                  color: #2c3e50;
            }
            span{
                margin-left: 15px;
                font-size: 18px;
                font-weight: 600;
            }
            ul{
                margin-top:10px;
                width: 100%;
                padding:0;
                li{
                    height:30px;
                    line-height: 30px;
                    list-style: none;
                    text-align: left;
                    padding-left:40px;
                    color: #666;
                    font-size: 14px;
                    cursor: pointer;
                    a{
                         color: #666;
                    }
                }
            }
        }
    }
    .profile-panel{
        margin-left:170px;
        // .profile-info{
        //     margin-bottom: 20px;
        //     border: 1px solid #eee;
        //     background-color: #fff;
        //     display: flex;
        //     flex-wrap: wrap;
        //     padding: 30px 0;
        //     width: 100%;
        //     .profile-infoitem:first-child{
        //         display:flex;
        //         box-sizing: border-box;
        //         align-items: center;
        //         position: relative;
        //         padding-left: 30px;
        //         width: 398px;
        //         text-align: left; 
        //         .head-img{
        //             width: 80px;
        //             height:80px;
        //             position: relative;
        //             display: inline-block;
        //             img{
        //                     width: 80px;
        //                     height:80px;
        //                 }
        //             margin-right: 20px;
        //             cursor: pointer;
        //             border-radius: 50%;
        //             border: 1px solid #eee;
        //             overflow: hidden;
        //         }
        //         h3{
        //             max-width: 220px;
        //             font-size: 16px;
        //             overflow: hidden;
        //             text-overflow: ellipsis;
        //             white-space: nowrap;
        //         }
        //         p{
        //             margin: 6px 0 10px;
        //             color: #999;
        //             font-size: 12px;
        //         }
        //     }
        //     .profile-infoitem{
        //         display: inline-block;
        //         padding:0;
        //         border-right: 1px solid #eee;
        //         width: 185px;
        //         text-align: center;
        //         width: 203px;
        //         p:first-child{
        //             margin-top:10px;
        //         }
        //         .profile-infoitem-number{
        //             font-weight: 600;
        //             font-size: 12px;
        //             height: 60px;
        //             line-height: 60px;
        //             span{
        //                 font-size:30px;
        //             }
        //         }
        //     }
        //     div{
        //         display: inline-block;
        //     }
          
        // }
        // .profile-order{
        //      padding: 20px 20px 0;
        //     margin-bottom: 20px;
        //     border: 1px solid #eee;
        //     background-color: #fff;
        //     .tabnav{
        //         border-bottom: 2px solid #f4f4f4;
        //        text-align: left;
        //         a{
        //             text-decoration: none;
        //         }
        //         a:first-child{
        //             font-weight: 700;
        //             border-bottom: 3px solid #0089dc;
        //             display: inline-block;
        //             margin-bottom: -2px;
        //             padding: 0 10px;
        //             height: 27px;
        //             cursor: pointer;
        //             font-size: 16px;
        //             color: #666;
        //         }
        //         a:last-child{
        //             float:right;
        //             font-size: 12px;
        //             color: #666;
        //             &:hover{
        //                 color:#0089dc;
        //                 text-decoration: underline;
        //             }
        //         }
        //     }
        //     .profile-order-content{
        //         // padding: 20px 0 15px;
        //         width: 100%;
        //         display: flex;
        //         align-items: center;
        //         flex-wrap:wrap;
        //         border-top: 1px solid #eee;
        //         .orderblock{
        //             display: flex;
        //             align-items: center;
        //             border-top: 1px solid #eee;
        //             padding: 20px 0 15px;
        //             .orderblock-item:first-child{
        //                 width: 593px;
        //                 display: flex;
        //                 align-items: center;
        //                 font-size: 12px;
        //                 text-align: left;
        //                 img{
        //                     display: inline-block;
        //                     width: 80px;
        //                     height:80px;
        //                     margin-right: 20px;
        //                 }
        //                 .name{
        //                     display: inline-block;
        //                     width: 400px;
        //                     font-size: 16px;
        //                     font-weight: 700;
        //                 }
        //                 .product{
        //                     display: inline-block;
        //                     width: 400px;
        //                     margin: 6px 0;
        //                     color: #999;
        //                 }
        //                 a{
        //                     text-decoration: none;
        //                     display: inline-block;
        //                     width: 400px;
        //                     color: #999;
        //                 }
        //             }
        //             .orderblock-item{
        //                 display: inline-block;
        //                 text-align: center;
        //             }
        //             .time{
        //                 width: 85px;
        //                 color: #999;
        //                 font-size: 13px;
        //             }
        //             .price{
        //                 width: 190px;
        //             }
        //             .status{    
        //                 p{
        //                     color: #ff9c00;
        //                     font-size:16px;
        //                 }
        //                 a{
        //                     color: #0089dc;
        //                     font-size:12px;
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}
</style>