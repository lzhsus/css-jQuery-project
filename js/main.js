/**
 * Created by admin on 17-7-26.
 */
$(document).ready(function () {
    $(".nav>ul>li").hover(
        function () {
            $(this).css("background", "#363c4b")
            $(this).find("a").css({"color": "green"})
            $(this).find("div").show()
            $(this).find("ul>li").hover(
                function () {
                    $(this).css({"color": "#009965"})
                }, function () {
                    $(this).css({"color": "#fff"})
                })
        }, function () {
            $(this).css("background", "")
            $(this).find("a").css({"color": "#fff"})
            $(this).find("div").hide()
        }
    )
    $(".nav_find .photo").hover(
        function () {
            $(this).find(".photoImage").css("margin-top", "-65px")
            $(this).next().show()
        }, function () {
            $(this).find(".photoImage").css("margin-top", "6px")
            $(this).next().hide()
        }
    )
    $(".minPhotoImg>div").hover(
        function () {
            $(this).find("span").hide()
            $(this).find(".xiangxi_neirong").show()
            $(this).find(".bg_bleak").show()
        }, function () {
            $(this).find("span").show()
            $(this).find(".xiangxi_neirong").hide()
            $(this).find(".bg_bleak").hide()
        }
    )
    $(".imgxinxi").hover(
        function () {
            $(this).find("p:first").stop().css("margin-top", "6px")
            $(this).find("p:last").stop().css("margin-top", "50px")
            $(this).find("p:first").stop().animate({"margin-top": "30px"}, 1000)
            $(this).find("p:last").stop().animate({"margin-top": "10px"}, 1000)
        }, function () {

        }
    )
    $(".but").hover(
        function () {
            $(this).parent().find("div:eq(0)").css({borderColor: "green", color: "green"})
        }, function () {
            $(this).parent().find("div:eq(0)").css({borderColor: "#999", color: "#666"})
        }
    )
    $(".but").click(function () {
        if ($(this).parents("li").index()==4) {
            var $fla=$(this).parent().next().hasClass("newxiaoneirong")
            if ($fla) {
                $(this).parent().css({background: "url(\"images/jieduan1.png\") left -112px no-repeat"})
                $(this).parent().next().toggleClass("newxiaoneirong")
            } else {
                $(this).parent().css({background: "url(\"images/jieduan1副本.png\") left -112px no-repeat"})
                $(this).parent().next().toggleClass("newxiaoneirong")
            }
        }else {
            $(this).parent().next().toggleClass("newxiaoneirong")
        }
    })
    $(".borde div").hover(
        function () {
            $(this).css({borderColor: "green", color: "green"})
        }, function () {
            $(this).css({borderColor: "#999", color: "#666"})
        }
    )
})