<template>
    <div class="pagenation">
        <ul>
            <li>共{{total}}条</li>
            <li @click="lastPage(currentPage,$event)"  class="lastPage disabled" >上一页</li>
            <li >
                 <a href="javascript:" 
                 v-for="(page,index) of (Math.floor(this.total/this.everypage+1)+1)" 
                 :key="index"  
                 v-if="index==currentPage" 
                 @click="jumpPage(index,$event)" 
                 class="pagebtn">
                {{index}}
                </a>
            </li>
            <li @click="nextPage(currentPage,$event)" class="nextPage">下一页</li>
            <li>
                跳到
                <input type="number" autocomplete="off" min="1"  :max="Math.floor(total/everypage+1)" v-model="inputval">
                页
            </li> 
        </ul>
    </div>
</template>
<script> 
export default {
    props:['total','everypage'],
    data(){
        return{
            currentPage:1,
            inputval:1
        }
    },
    methods:{
        lastPage(key,e){
            if(key>1){
                this.currentPage--;
                this.$emit('sendCurrentPage',this.currentPage);  
            }
           
        },
        nextPage(key,e){
            if(key<(this.total/this.everypage)){
                this.currentPage++;
                this.$emit('sendCurrentPage',this.currentPage);
            }
         
        },
        jumpPage(key,e){
            this.currentPage=key;
            this.$emit('sendCurrentPage',this.currentPage);
        }
    },
    mounted(){

    },
    watch:{
        currentPage:{
            handler(newVal, oldVal) {
               switch(newVal){     
                   case 1:$(".lastPage").addClass("disabled");
                   break;
                   case this.total/this.everypage:$(".nextPage").addClass("disabled"); 
                   break;
                   default:$(".lastPage").removeClass("disabled");
                   $(".nextPage").removeClass("disabled"); 
               }
            },
            deep: true
        },
        inputval:{
            handler(newVal, oldVal) {
                if(newVal<=((this.total/this.everypage+1))){
                    this.currentPage=newVal;
                    this.$emit('sendCurrentPage',this.currentPage);
                }  
            },
            deep: true
        }

    },

}
</script>
<style lang="scss">
.pagenation{
    li{
    list-style: none;
    float: left;
    //border: 1px solid #eeeeee;
    margin-right:40px;
    cursor: pointer;
    }
    .active{
        background-color: rebeccapurple !important;
    }
    .disabled{
        cursor:not-allowed;
    }
    .pagebtn{
        color:black;
        text-align: center;
        line-height: 25px;
        outline: none;
        display: inline-block;
        width: 30px;
        height:25px;
        border-radius: 10px;
        background-color: #eeeeee;
        border: 1px solid #eeeeee;
        cursor: pointer;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input{
        height:25px;
        width: 30px;
        font-size: 16px;
        border: 1px solid #e0e0e0;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
}

</style>