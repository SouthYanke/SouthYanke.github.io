//三级导航溢出
$("#thirdLeft").perfectScrollbar();
suppressScrollX: true;
$("#thirdRight").perfectScrollbar();
suppressScrollX: true;
//头部二维码
$(".forPhone").hover(function () {
    $(".erweimaImgs", $(this)).show();
}, function () {
    $(".erweimaImgs", $(this)).hide();
});
//左侧导航公用样式切换js
$(".leftNav ul li a").click(function () {
    $(this).addClass("on").parents("li").siblings().find("a").removeClass("on");
});
//二级导航触发样式
$(function () {
    //级联导航显示
    $("#allCategoryNav").hover(function () {
        $(this).find(".subNavWrap").show();
    }, function () {
        $(this).find(".subNavWrap").hide();
    });
    $(".subNavWrap .subNav > li").hover(function () {
        $(".subNavWrap .subNav > li").each(function () {
            resetNav($(this));
        });
        activeNav($(this));
        return false;
    }, function () {
        resetNav($(this));
        activeNav($(".subNavWrap .subNav > li").eq(0));
    });
    function resetNav($li){
        var oriSrc = $li.attr("orisrc");
        $(">a img", $li).attr("src", oriSrc);
        $(".subNavWrap .subNav > li").removeClass("default");
    }
    function activeNav($li){
        $li.addClass("default");
        var bgSrc = $li.attr("bgsrc");
        $(">a img", $li).attr("src", bgSrc);
        $(".thirdNav ", $li).show().parents("li").siblings().find(".thirdNav").hide();
    }
});
//商品分类图片添加js
$(".leftLinks.brandKind a").first().addClass("first");
//头部条触发效果
$(".head .headBar .headLinks a").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
});
//个人中心去除第一个和最后一个表格样式
$(".personCenterSameTable").each(function () {
    $(this).find("tr").last().find("td").css("padding-bottom", "0");
});
