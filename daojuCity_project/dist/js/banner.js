define(["jquery"],function($){
    function move(){
        var oBtns = $(".banner_box .slide .dot").find("span");
        var oPic = $(".slide").find(".pic");
        var iNow = 0;
        var timer = null;

        //切换到对应的图片
        oBtns.mouseenter(function(){
            iNow = $(this).index();
            tab();
        })
        function tab(){
            oBtns.attr("class","").eq(iNow).attr("class","active");

            if(iNow == oBtns.size()){
                oBtns.eq(0).attr("class","active");
            }

            oPic.animate({
                left: -iNow * 770
            },500,function(){
                if(iNow == oBtns.size()){
                    iNow = 0;
                    oPic.css({
                        left:0
                    });
                }
            })
        }

        //自动轮播
        timer = setInterval(function(){
            iNow++;
            tab();
        },2000)

        //鼠标移入时取消轮播定时器
        $(".slide").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            //鼠标移出时重新开启定时器
            timer = setInterval(function(){
                iNow++;
                tab();
            },2000);
        })
    }
    return {
        move : move
    }
})