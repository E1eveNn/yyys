/**
 * Created by shijiayi on 2016/7/25.
 */
$(function(){
    $("body a").attr("target","_blank");
    var oNav=document.getElementById("navbar");
    var oNavLi=oNav.getElementsByTagName("li");
    var oDoc=document.getElementById("mydoc");
    var oRZ=document.getElementById("ruzhu");
    var oQR=document.getElementById("QRcode");
    oNavLi[0].onmouseover=oDoc.onmouseover= function () {
        oDoc.style.display="block";
        oNavLi[0].style.backgroundColor="#fff";
    };
    oNavLi[0].onmouseout=oDoc.onmouseout=function () {
        oDoc.style.display="none";
        oNavLi[0].style.backgroundColor="#f2f2f2";
    };
    oNavLi[2].onmouseover=oRZ.onmouseover= function () {
        oRZ.style.display="block";
        oNavLi[2].style.backgroundColor="#fff";
    };
    oNavLi[2].onmouseout= oRZ.onmouseout=function () {
        oRZ.style.display="none";
        oNavLi[2].style.backgroundColor="#f2f2f2";
    };
    oNavLi[3].onmouseover=oQR.onmouseover= function () {
        oQR.style.display="block";
        oNavLi[3].style.backgroundColor="#fff";
    };
    oNavLi[3].onmouseout=oQR.onmouseout=function () {
        oQR.style.display="none";
        oNavLi[3].style.backgroundColor="#f2f2f2";
    };
    var iNow = 0;
    var iMinzIndex = 1;
    var bckCl=["#4bd18a","#fdc800"];
    var oBig = document.getElementById("big_pics");
    var banner=document.getElementById("banner-bg");
    oBigLi = oBig.getElementsByTagName("li");
    timer = setInterval(function () {
        iNow++;
        if (iNow >= oBigLi.length) {
            iNow = 0;
        }
        tab();
    }, 3000);
    oBig.onmouseover = function () {
        clearInterval(timer)
    };
    oBig.onmouseout=function(){
        setTimeout(function () {
            timer = setInterval(function () {
                iNow++;
                if (iNow >= oBigLi.length) {
                    iNow = 0;
                }
                tab();
            }, 3000)
        })
    };
    function tab() {
        oBigLi[iNow].style.zIndex = iMinzIndex++;
        banner.style.backgroundColor=''+bckCl[iNow]+'';
    }
   $(".hide_nav i").mouseover(function () {
       $(".hide_nav .nav_list").show();
   });
    $(".hide_nav .nav_list").mouseover(function () {
        $(this).show();
    });
    $(".hide_nav i").mouseout(function () {
        $(".hide_nav .nav_list").hide();
    });
    $(".hide_nav .nav_list").mouseout(function () {
        $(this).hide();
    });
    var oGuide = document.getElementById("guide");
    var oList = oGuide.getElementsByTagName("li");
    for(i = 0; i < oList.length; i++) {
        oList[i].index = i;
        oList[i].onmouseover = function () {
            oList[this.index].className = "demo";
        };
        oList[i].onmouseout = function () {
            oList[this.index].className = "";
        }
    }
    $("#baojian").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#bj").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#yiyong").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#yy").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#jianfei").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#jf").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#yunying").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#baby").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#man").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#nx").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#women").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#ns").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#manbing").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#ill").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#children").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#et").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#equipment").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#qc").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#books").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#sj").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $("#express").find("li").mouseover(function () {
        $(".item-head li").removeClass("on");
        $(this).attr("class","on");
        var i=$(this).attr("data-value");
        var divs=$("#hw").find(".item-cont");
        divs.hide();
        divs.eq(i).show();
    });
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var items = $(".item");
        var hideTop=items[11].offsetTop+450;
        //var menu=document.getElementById("menu-tab");
        var currentId = "";
        var menu = $("#menu-tab");
        if(top>$(window).height()){
            $(".hide_nav").slideDown(1000);
        }else{
            $(".hide_nav").slideUp(1000);
        }
        if (top > 750&&top<hideTop) {
            menu[0].style.display = "block";
        } else {
            menu[0].style.display = "none";
        }
        items.each(function () {
            var m = $(this);
            var itemTop = m.offset().top;
            if (top > itemTop - 280) {
                currentId = m.attr("id");
            } else {
                return false;
            }
        });
        $(".item-head>span").removeClass("active");
        $("#" + currentId).find(".item-head>span").addClass("active");
        var currentLink = menu.find(".current");
        if (currentId && currentLink.attr("name") != currentId) {
            currentLink.removeClass("current");
            menu.find("[name=" + currentId + "]").addClass("current");
        }
    });
    var menuList=$("#menu-tab li");
    menuList.click(function () {
        clearInterval(timer);
        var m=$(this).attr("data-id");
        var items=$(".item");
        var newTop=Math.ceil(items.eq(m).offset().top);
        timer=setInterval(function () {
            var speed = (newTop - $(document).scrollTop() ) / 5;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if( Math.ceil($(document).scrollTop()) == newTop ){
                clearInterval( timer );
            }else{
                var NowTop = Math.ceil($(document).scrollTop());
                $(document).scrollTop( NowTop + speed );
            }
        },30)
    });
    });
function backTop(){
    timer=setInterval(function () {
        var pagescroll=document.body.scrollTop;
        var scrollspeed=pagescroll/5;
        document.body.scrollTop=pagescroll-scrollspeed;
        if(pagescroll==0){
            clearInterval(timer)
        }
    },30)
}