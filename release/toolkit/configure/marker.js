define(["d3"],function(f){return{init:function(t,r){var a=f.select(t),x=a.select("defs"),b=r.title,e=a.selectAll(".viewport").append("g"),k=e.append("path"),u=e.append("path"),h=e.append("path"),g=e.append("text"),m=e.append("rect"),w={};function o(){var t,r,a,e,o,f,n,s,l,c,p,i,d,y;t="markerGradient",a=(r={type:"radialGradient",color1:"rgba(0,0,0,0)",color2:"rgba(0,0,0,.7)",x1:"50%",x2:"0%",r:"100%",fx:"50%",fy:"100%"}).color1||"#000",e=r.color2||"#fff",o=r.type||"linearGradient",f=r.x1||"0%",n=r.y1||"0%",s=r.x2||"100%",r.y2,l=r.r,c=r.fx,p=r.fy,i=r.offset1||"0%",d=r.offset2||"100%",(y=x.append(o).attr("id",t).attr("x1",f).attr("y1",n).attr("x2",s).attr("r",l).attr("fx",c).attr("fy",p)).append("stop").attr("offset",i).style("stop-color",a),y.append("stop").attr("offset",d).style("stop-color",e),k.attr("d","M99.8,0C59.4,0,26.7,33.5,26.7,74.8c0,41.3,73.2,124.7,73.2,124.7S173,116.2,173,74.8C173,33.5,140.2,0,99.8,0z M99.8,106c-20.2,0-36.6-16.7-36.6-37.4c0-20.7,16.4-37.4,36.6-37.4s36.6,16.8,36.6,37.4C136.4,89.3,120,106,99.8,106z"),k.attr("transform","scale(.2.2)"),k.attr("stroke-width","10px"),k.attr("stroke","#fff"),u.attr("d","M99.8,0C59.4,0,26.7,33.5,26.7,74.8c0,41.3,73.2,124.7,73.2,124.7S173,116.2,173,74.8C173,33.5,140.2,0,99.8,0z M99.8,106c-20.2,0-36.6-16.7-36.6-37.4c0-20.7,16.4-37.4,36.6-37.4s36.6,16.8,36.6,37.4C136.4,89.3,120,106,99.8,106z"),u.attr("transform","scale(.2.2)"),u.attr("stroke-width","10px"),u.attr("fill","url(#markerGradient)"),h.attr("d","M0,0L100,0L100,30L60,30L50,40L40,30L0,30L0,0"),h.attr("transform","translate(-30, -45)"),h.style("fill","rgba(8,24,97,.7)"),h.attr("stroke-width","2px"),h.attr("stroke","#fff"),g.attr("transform","translate(20, -26)"),g.attr("font-weight","bold"),g.text(b),g.style("fill","#fff"),g.attr("text-anchor","middle"),m.attr("width","100px"),m.attr("height","100px"),m.attr("opacity",0),m.attr("transform","translate(-30, -50)"),m.style("cursor","pointer"),m.on("click",function(t){w.click&&w.click(t)})}return o.prototype.setAlarmStatus=function(t){var r="",a="";switch(t){case 4:r="#e74e53",a="rgba(72,13,8,.7)";break;case 3:r="#ee6b1c",a="rgba(72,13,8,.7)";break;case 2:r="#ece417",a="rgba(94,86,6,.7)";break;case 1:default:r="#00bc79",a="rgba(11,86,64,.7)"}k.attr("fill",r),h.style("fill",a)},o.prototype.on=function(t,r){w[t]=r},o.prototype.setPos=function(t){e.attr("transform","translate("+t.x+","+t.y+")")},new o(t)}}});
//# sourceMappingURL=../../map/toolkit/configure/marker.js.map