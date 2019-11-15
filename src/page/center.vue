<template>
    <div class="center">
        <placeHead class="head"></placeHead>
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
import pagenation from "../components/common/pagenation";
import placeHead from "../components/common/placeHead";
export default {
    components: {
        pagenation,
        placeHead
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
    }
}
</style>
