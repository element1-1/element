import Vue from 'vue'
Vue.directive('outside',{
    // inserted(el,binding){
    //     el.style.color = "red"
    // }
    //监听绑定元素，bind是触发一次，el是元素
    bind(el,binding){
        //监听点击事件      
        document.addEventListener('click', clickHandler);
        //e是点击元素，el是绑定元素，如果点击元素不是绑定元素，则触发 $(el).children("ul").slideUp();
        function clickHandler(e){
            if (!el.contains(e.target)) {
                $(el).children("ul").slideUp();
              }
        }  
    }
});
Vue.directive('locationside',{
    //监听绑定元素，bind是触发一次，el是元素
    bind(el,binding){
        //监听点击事件
        document.addEventListener('click', clickHandler);  
        //e是点击元素，el是绑定元素，如果点击元素不是绑定元素，则触发 $(el).children("ul").slideUp();
        function clickHandler(e){
            if(binding.value){
                if(e.target==$(".closebutton")[0]){
                    $(el).parents(".newlocation").css("display","none");
                    binding.value=false;
                    //$(el).find("p").css("display","none");
                }
                if(e.target==$(".center").find(".carticon")[0]){
                    $(el).parents(".newlocation").css("display","none");
                    binding.value=false;
                }
                if (!el.contains(e.target)) {
                    $(el).parents(".newlocation").css("display","none");
                    binding.value=false;
                }
            }else{
               binding.value=true;
            } 
        } 
    },

});


  