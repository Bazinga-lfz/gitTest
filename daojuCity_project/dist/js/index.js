define(["jquery","jquery-cookie"],function($){
    function index(){
        $(function(){
            //通过ajax请求数据，将英雄联盟专区信息动态加载
            $.ajax({
                type:"get",
                url:"../data/lol_items.json",
                success:function(arr){
                    // console.log(arr);
                    for(var i = 0; i < 4; i++){
                        var node8 = $(`<li>
                                        <a href="">
                                        <span class="name">
                                                <strong>${arr[i].name}</strong>
                                        </span>
                                        <span class="red">
                                                微信价：
                                                <b>${arr[i].vx}</b>
                                        </span>
                                        <span>${arr[i].qq}</span>
                                        <img src="${arr[i].src}" alt="">
                                        </a>
                                    </li>`);
                        node8.appendTo(".zone4_box .lol_bg .list_top");
                    }
                    for(var i = 0; i < 4; i++){
                        for(var j = 4; j < arr.length; j++){
                            var node9 = $(`<li>
                                            <a href="">
                                                <img src="${arr[j].src}" alt="">
                                            </a>
                                            <div class="txt">
                                                <p>
                                                    <a href="">${arr[j].name}</a>
                                                </p>
                                                <p class="red">
                                                    微信价:
                                                    <b>${arr[j].vx}</b>
                                                </p>
                                                <p>${arr[j].qq}</p>
                                            </div>
                                        </li>`);
                            node9.appendTo(".zone4_box .lol_bg .list_bot");
                        }
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //通过ajax请求数据，将精彩活动信息动态加载在精彩活动下
            $.ajax({
                type:"get",
                url:"../data/event.json",
                success:function(arr){
                    for(var i = 0; i < arr.length; i++){
                        var node7 = $(`<li>
                                        <a href="">
                                            <img src="${arr[i].src}" alt="">
                                        </a>
                                    </li>`);
                        node7.appendTo(".zone3_box .event_list ul");
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //通过ajax请求数据，将所有猜你喜欢信息动态加载在猜你喜欢下
            $.ajax({
                type:"get",
                url:"../data/fav_sell.json",
                success:function(arr){
                    // console.log(arr);
                    for(var i = 0; i < arr.length; i++){
                        var node6 = $(`<dl>
                                        <dt>
                                            <a href="">
                                                <img src="${arr[i].src}" alt="">
                                            </a>
                                        </dt>
                                        <dd>
                                            <p class="item_info">
                                                <a href="">
                                                    <b>[英雄联盟]</b>
                                                    ${arr[i].name}
                                                </a>
                                            </p>
                                            <p class="red">
                                                商城价：
                                                <b>${arr[i].price}</b>
                                            </p>
                                        </dd>
                                    </dl>`);
                        node6.appendTo(".zone2_box .favorite .favorite_bg .item_bg");
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //通过ajax请求数据，将所有热卖信息动态加载在热卖推荐
            $.ajax({
                type:"get",
                url:"../data/hot_sell.json",
                success:function(arr){
                    // console.log(arr);
                    for(var i = 0; i < arr.length; i++){
                        var node5 = $(` <dl>
                                            <dt>
                                                <a href="">
                                                    <img src="${arr[i].src}" alt="">
                                                </a> 
                                            </dt>
                                            <dd>
                                                <p>
                                                <b>[英雄联盟]</b>
                                                <a class="click" href="">${arr[i].name}</a>
                                                </p>
                                                <p>
                                                    QB价：
                                                    <i>${arr[i].price}</i>
                                                </p>
                                                <p>热卖推荐</p>
                                                <a class="btn_stream" href="">立即抢购</a>
                                            </dd>
                                        </dl>`);
                        node5.appendTo(".zone1_box .hot_sell .items_bg");
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //通过ajax请求数据，将所有游戏信息动态加载在侧拉列表
            $.ajax({
                type:"get",
                url:"../data/banner_navGame.json",
                success:function(arr){
                    // console.log(arr);
                    for(var i = 0; i < arr.length; i++){
                        var node3 = $(`<dl>
                                        <dt>
                                            <b></b>
                                            ${arr[i].type}
                                            <i></i>
                                        </dt>
                                        <dd>
                                            <div class="inner">
                                                <div class="dev"></div>
                                            </div>
                                        </dd>
                                    </dl>`);
                        node3.appendTo(".banner_box .banner_nav");
                        for(var j = 0; j < arr[i].games.length; j++){
                            var node4 = $(`<a href="">${arr[i].games[j].name}</a>`);
                            node4.appendTo(node3.find(".dev"));
                        }
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //通过ajax请求数据，将所有游戏信息动态加载在搜索框下=>选择游戏下拉列表
            $.ajax({
                type:"get",
                url:"../data/allgame.json",
                success:function(arr){
                    // console.log(arr);
                    for(var i = 0; i < arr.length; i++){
                        var node = $(`<dl>
                                        <dt>${arr[i].typeName}</dt>
                                        <dd class="clearfn"></dd>
                                    </dl>`);
                        node.appendTo(".search_box #choose_sub");
                        for(var j = 0; j < arr[i].games.length; j++){
                            var node2 = $(`<a href="">${arr[i].games[j].name}</a>
                                            <i>|</i>`);
                            node2.appendTo(node.find("dd"));
                        }
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            //搜索框下  选择游戏    下拉列表
            $(".search_box .s_menu").mouseover(function(){
                $("#choose_sub").css({
                    display:"block"
                })
                $("#all_game b").css({
                    backgroundPosition: "-20px -25px"
                })
            })
            $(".search_box .s_menu").mouseout(function(){
                $("#choose_sub").css({
                    display:"none"
                })
                $("#all_game b").css({
                    backgroundPosition: "0px -25px"
                })
            })
            $("#choose_sub").on("mouseover","a",function(){
                $(this).css({
                    color:"red",
                    textDecoration:"underline"
                });
            })
            $("#choose_sub").on("mouseout","a",function(){
                $(this).css({
                    color:"#3a3f4a",
                    textDecoration:"none"
                });
            })

            //侧边导航，鼠标移入移出
            $(".banner_box .banner_nav").on("mouseenter","dl",function(){
                $(this).find("dt").addClass("active");
                $(this).find("dt").next().stop().fadeIn();
            })
            $(".banner_box .banner_nav").on("mouseleave","dl",function(){
                $(this).find("dt").removeClass("active");
                $(this).find("dt").next().stop().fadeOut();
            })
            $(".banner_box .banner_nav").on("mouseenter","a",function(){
                $(this).css({
                    color:"red",
                    textDecoration:"underline"
                });
            })
            $(".banner_box .banner_nav").on("mouseout","a",function(){
                $(this).css({
                    color:"#3a3f4a",
                    textDecoration:"none"
                });
            })
            //每日签到 移入移出
            $(".zone2_box .sign_up .sign_title").hover(function(){
                $(this).siblings(".app_box").css("display","block");
            },function(){
                $(this).siblings(".app_box").css("display","none");
            })
            
        })
    }
    return {
        index : index
    }
})