history.scrollRestoration = 'manual';

$( "#en-toggle" ).click(function() {

    $(".en-content").show();
    $(".fr-content").hide();
    

    $("#fr-toggle").show();
    $("#en-toggle").hide();
});

$( "#fr-toggle" ).click(function() {

    $(".fr-content").show();
    $(".en-content").hide();
    
    
    $("#en-toggle").show();
    $("#fr-toggle").hide();
});



$( "#start" ).click(function() {
    $("html, body").animate({
        scrollTop: $('html, body').get(0).scrollHeight
    }, 400000, 'linear');

    window.scrollBy({
        top: 0,
        left: 270,
        behavior: 'smooth'
    });

    $("#stop").show();
    $("#start").hide();
    $("body").css("overflow", "hidden");

    
});

$( "#stop" ).click(function() {
    var myDiv = $( "html, body" );
    myDiv.clearQueue();
    myDiv.stop();
    $("#stop").hide();
    $("#start").show();
    $("body").css("overflow", "auto");
});



//
var lastPos = document.body.scrollTop || document.documentElement.scrollTop,
    perspective = 500,
    zSpacing = -2000;
zVals = [],
    $frames = $(".frame"), 
    frames = $frames.toArray(), 
    numFrames = $frames.length;
for (var i = 0; i < numFrames; i++) { zVals.push((numFrames - i) * zSpacing); }

$(window).scroll(function (d, e) {
    var top = document.body.scrollTop || document.documentElement.scrollTop,
        delta = lastPos - top;
        lastPos = top;
    for (var i = 0; i < numFrames; i++) {
        var newZVal = (zVals[i] += (delta * -1.5)),
            frame = frames[i], 
            transform = "translateZ(" + newZVal + "px)", 
            opacity = newZVal < 200 ? 1 : 1 - parseInt((newZVal - 200) / (perspective - 200) * 10) / 10, 
            display = newZVal > perspective ? "none" : "block";
            frame.setAttribute("style","-webkit-transform:" + transform + ";-moz-transform:" + transform + ";display:" + display + ";opacity:" + opacity);
    }
});