!function(d){d.fn.ckSlide=function(l){l=d.extend({},d.fn.ckSlide.opts,l),this.each(function(){var i=d(this).find(".ck-slide-wrapper"),t=i.find("li"),n=t.length,s=this,e=0,a=null;function c(i){l.autoPlay&&(a=setInterval(function(){var i=e;n-1<=e?e=0:e++,r.call(s,e,i)},i))}d(this).data("opts",l),d(this).find(".ck-next").on("click",function(){if(1!=l.isAnimate){var i=e;n-1<=e?e=0:e++,r.call(s,e,i)}}),d(this).find(".ck-prev").on("click",function(){if(1!=l.isAnimate){var i=e;e<=0?e=n-1:e--,r.call(s,e,i)}}),d(this).find(".ck-slidebox li").each(function(i){d(this).on("click.slidebox",function(){r.call(s,i,e),e=i})}),d(this).find(".ck-slidebox li").each(function(i){d(this).on("mouseover.slidebox",function(){r.call(s,i,e),e=i})}),d(this).on("mouseover",function(){l.autoPlay&&clearInterval(a),d(this).find(".ctrl-slide").css({opacity:.6})}),d(this).on("mouseleave",function(){l.autoPlay&&c(l.interval),d(this).find(".ctrl-slide").css({opacity:.1})}),c(l.interval);var o=d(this).find(".ck-slidebox");switch(o.css({"margin-left":-o.width()/2}),l.dir){case"x":l.width=d(this).width(),i.css({width:n*l.width}),t.css({float:"left",position:"relative","margin-left":"0px"}),i.wrap('<div class="ck-slide-dir"></div>'),t.show();break;case"y":l.height=d(this).height(),i.css({height:n*l.height}),t.css({float:"left",position:"relative","margin-top":"0px"}),i.wrap('<div class="ck-slide-dir"></div>'),t.show()}})};var a=function(i){/(iPhone|iPod|iOS|android)/i.test(navigator.userAgent)?d(".content").css("background-color","#3ab4fd"):0==i?d(".content").css("background-color","#eaeaea"):1==i?d(".content").css("background-color","#3ab4fd"):2==i?d(".content").css("background-color","#15789c"):3==i&&d(".content").css("background-color","#3b7884")};function r(i,t){a(i);var n=d(this).data("opts");if("x"==n.dir){var s=i*n.width;d(this).find(".ck-slide-wrapper").stop().animate({"margin-left":-s},function(){n.isAnimate=!1}),n.isAnimate=!0}else if("y"==n.dir){var e=i*n.height;d(this).find(".ck-slide-wrapper").stop().animate({"margin-top":-e},function(){n.isAnimate=!1}),n.isAnimate=!0}else d(this).find(".ck-slide-wrapper li").eq(t).stop().animate({opacity:0}),d(this).find(".ck-slide-wrapper li").eq(i).show().css({opacity:0}).stop().animate({opacity:1});d(this).find(".ck-slidebox li").removeClass("current"),d(this).find(".ck-slidebox li").eq(i).addClass("current")}d.fn.ckSlide.opts={autoPlay:!1,dir:null,isAnimate:!1,interval:1e3}}(jQuery);
//# sourceMappingURL=../../map/login/js/slide.js.map
