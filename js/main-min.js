history.scrollRestoration="manual",$("#start").click((function(){$("html, body").animate({scrollTop:$("html, body").get(0).scrollHeight},1e5,"linear"),$("#stop").show(),$("#start").hide(),$("body").css("overflow","hidden")})),$("#stop").click((function(){var o=$("html, body");o.clearQueue(),o.stop(),$("#stop").hide(),$("#start").show(),$("body").css("overflow","auto")}));var lastPos=document.body.scrollTop||document.documentElement.scrollTop,perspective=500,zSpacing=-2e3;zVals=[],$frames=$(".frame"),frames=$frames.toArray(),numFrames=$frames.length;for(var i=0;i<numFrames;i++)zVals.push((numFrames-i)*zSpacing);$(window).scroll((function(o,e){var s=document.body.scrollTop||document.documentElement.scrollTop,t=lastPos-s;lastPos=s;for(var r=0;r<numFrames;r++){var a=zVals[r]+=-1.5*t,l=frames[r],n="translateZ("+a+"px)",c=a<200?1:1-parseInt((a-200)/(perspective-200)*10)/10,m=a>perspective?"none":"block";l.setAttribute("style","-webkit-transform:"+n+";-moz-transform:"+n+";display:"+m+";opacity:"+c)}}));