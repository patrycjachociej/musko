

$(document).ready(function(){
    
	if (window.innerHeight > window.innerWidth){
		$(".logo-href img").attr("src","img/logo1-01.svg");

		$(".menu-mobile").click(function() {
			$('.menu').fadeIn();
			$('.menu').css('display', 'flex');
		});
		$(".menu-close").click(function() {
			$('.menu').fadeOut();
		});

	}
	
	
    $(".uslugi").click(function() {
        $('html, body').animate({
            scrollTop: $("#tms").offset().top
        }, 500);       
    });
       
    
});


/* MAIN BANNER ANIMATIONS */

var count = 1;

/*function detectswipe(el, func) {
      swipe_det = new Object();
      swipe_det.sX = 0;
      swipe_det.sY = 0;
      swipe_det.eX = 0;
      swipe_det.eY = 0;
      var min_x = 120;  //min x swipe for horizontal swipe
      var max_x = 140;  //max x difference for vertical swipe
      var min_y = 40;  //min y swipe for vertical swipe
      var max_y = 50;  //max y difference for horizontal swipe
      var direc = "";
      ele = document.getElementById('transport');
    
      ele.addEventListener('touchstart',function(e){
        var t = e.touches[0];
        swipe_det.sX = t.screenX; 
        swipe_det.sY = t.screenY;   
      },false);
      ele.addEventListener('touchmove',function(e){
        e.preventDefault();
        var t = e.touches[0];
        swipe_det.eX = t.screenX; 
        swipe_det.eY = t.screenY;    
      },false);
      ele.addEventListener('touchend',function(e){
        //horizontal detection
        if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
          if(swipe_det.eX > swipe_det.sX) direc = "r";
          else direc = "l";
        }
    
        if (direc != "") {
          if(typeof func == 'function') func(el,direc);
        }
        direc = "";
      },false);
    }

    function myfunction(el, d) {
      //alert("you swiped on element with id '"+el+"' to "+d+" direction");
        if ((d=='r') || (d=='u')){
			clearInterval(myVar);
			
			count--;
			if (count == -1) count = 3;
			transition2();
			
			myVar = setInterval(function(){ transition() }, 7000);

            return false;
        }
        if ((d=='l') || (d=='d')) {
			clearInterval(myVar);
			
			count++;
			if (count == 4) count = 0;
			transition2();
			
			myVar = setInterval(function(){ transition() }, 7000);

            return false;
        }
    }

//if(window.innerHeight > window.innerWidth) {
    detectswipe('#transport', myfunction);
//}*/

function transition2() {

    if (count == 0) {
        $('.text-4').stop(true, true).fadeOut(1000);
        $('.text-3').stop(true, true).fadeOut(1000);
        $('.text-2').stop(true, true).fadeOut(1000);
        $('.text-1').stop(true, true).delay(1000).fadeIn(1000);
        
        $(".blue-4").stop(true, true).delay(0).animate({left: '-50%'});
        $(".blue-3").stop(true, true).delay(0).animate({left: '-50%'});
        $(".blue-2").stop(true, true).delay(100).animate({left: '-50%'});
        $(".blue-1").stop(true, true).delay(200).animate({left: '-50%'});
        
        $(".transport-bg-4").stop(true, true).delay(0).fadeOut(500);
        $(".transport-bg-3").stop(true, true).delay(0).fadeOut(500);
        $(".transport-bg-2").stop(true, true).delay(0).fadeOut(500);
        $(".transport-bg-1").stop(true, true).delay(500).fadeIn(500);
        
        $(".blue-1").stop(true, true).delay(0).animate({left: '0'});
        $(".blue-2").stop(true, true).delay(200).animate({left: '0'});
        $(".blue-3").stop(true, true).delay(400).animate({left: '0'});
        $(".blue-4").stop(true, true).delay(400).animate({left: '0'});
        
        //count = 1;
    }
    
    else if(count == 1) {
        $('.text-1').stop(true, true).stop(true, true).fadeOut(500);
        $('.text-3').stop(true, true).stop(true, true).fadeOut(500);
        $('.text-4').stop(true, true).stop(true, true).fadeOut(500);
        $('.text-2').stop(true, true).stop(true, true).delay(1000).fadeIn(500);
        
        
        if( $(window).width() < 680)
        {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-80%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-60%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-50%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-1").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-3").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-4").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-2").stop(true, true).delay(500).fadeIn(1000);
        
        $(".blue-1").stop(true, true).delay(0).animate({left: '0'});
        $(".blue-2").stop(true, true).delay(200).animate({left: '0'});
        $(".blue-3").stop(true, true).delay(400).animate({left: '0'});
        $(".blue-4").stop(true, true).delay(400).animate({left: '0'});
        
        //count = 2;

    } else if(count == 2) {
        $('.text-2').stop(true, true).fadeOut(500);
        $('.text-1').stop(true, true).fadeOut(500);
        $('.text-4').stop(true, true).fadeOut(500);
        $('.text-3').stop(true, true).delay(1000).fadeIn(500);
        
        
        if( $(window).width() < 680)
        {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-80%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-60%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-50%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-2").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-1").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-4").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-3").stop(true, true).delay(500).fadeIn(1000);
        
        $(".blue-1").stop(true, true).delay(0).animate({left: '0'});
        $(".blue-2").stop(true, true).delay(200).animate({left: '0'});
        $(".blue-3").stop(true, true).delay(400).animate({left: '0'});
        $(".blue-4").stop(true, true).delay(400).animate({left: '0'});
        
        //count = 3;

    } else if(count == 3) {
        $('.text-3').stop(true, true).fadeOut(500);
        $('.text-1').stop(true, true).fadeOut(500);
        $('.text-2').stop(true, true).fadeOut(500);
        $('.text-4').stop(true, true).delay(1000).fadeIn(500);
        
        if( $(window).width() < 680)
        {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-80%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-80%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-60%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-60%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-3").stop(true, true).delay(0).animate({left: '-50%'});
            $(".blue-2").stop(true, true).delay(100).animate({left: '-50%'});
            $(".blue-1").stop(true, true).delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-3").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-1").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-2").stop(true, true).delay(0).fadeOut(1000);
        $(".transport-bg-4").stop(true, true).delay(500).fadeIn(1000);
        
        $(".blue-1").stop(true, true).delay(0).animate({left: '0'});
        $(".blue-2").stop(true, true).delay(200).animate({left: '0'});
        $(".blue-3").stop(true, true).delay(400).animate({left: '0'});
        $(".blue-4").stop(true, true).delay(400).animate({left: '0'});
        
        //count = 0;
    } 
}



function transition() {

    if (count == 0) {
        $('.text-4').fadeOut(1000);
        $('.text-3').fadeOut(1000);
        $('.text-2').fadeOut(1000);
        $('.text-1').delay(1000).fadeIn(1000);
        
        $(".blue-4").delay(0).animate({left: '-50%'});
        $(".blue-3").delay(0).animate({left: '-50%'});
        $(".blue-2").delay(100).animate({left: '-50%'});
        $(".blue-1").delay(200).animate({left: '-50%'});
        
        $(".transport-bg-4").delay(0).fadeOut(500);
        $(".transport-bg-3").delay(0).fadeOut(500);
        $(".transport-bg-2").delay(0).fadeOut(500);
        $(".transport-bg-1").delay(500).fadeIn(500);
        
        $(".blue-1").delay(0).animate({left: '0'});
        $(".blue-2").delay(200).animate({left: '0'});
        $(".blue-3").delay(400).animate({left: '0'});
        $(".blue-4").delay(400).animate({left: '0'});
        
        count = 1;
    }
    
    else if(count == 1) {
        $('.text-1').fadeOut(500);
        $('.text-3').fadeOut(500);
        $('.text-4').fadeOut(500);
        $('.text-2').delay(1000).fadeIn(500);
        
        
        if( $(window).width() < 680)
        {
            $(".blue-4").delay(0).animate({left: '-80%'});
            $(".blue-3").delay(0).animate({left: '-80%'});
            $(".blue-2").delay(100).animate({left: '-80%'});
            $(".blue-1").delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").delay(0).animate({left: '-60%'});
            $(".blue-3").delay(0).animate({left: '-60%'});
            $(".blue-2").delay(100).animate({left: '-60%'});
            $(".blue-1").delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").delay(0).animate({left: '-50%'});
            $(".blue-3").delay(0).animate({left: '-50%'});
            $(".blue-2").delay(100).animate({left: '-50%'});
            $(".blue-1").delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-1").delay(0).fadeOut(1000);
        $(".transport-bg-3").delay(0).fadeOut(1000);
        $(".transport-bg-4").delay(0).fadeOut(1000);
        $(".transport-bg-2").delay(500).fadeIn(1000);
        
        $(".blue-1").delay(0).animate({left: '0'});
        $(".blue-2").delay(200).animate({left: '0'});
        $(".blue-3").delay(400).animate({left: '0'});
        $(".blue-4").delay(400).animate({left: '0'});
        
        count = 2;

    } else if(count == 2) {
        $('.text-2').fadeOut(500);
        $('.text-1').fadeOut(500);
        $('.text-4').fadeOut(500);
        $('.text-3').delay(1000).fadeIn(500);
        
        
        if( $(window).width() < 680)
        {
            $(".blue-4").delay(0).animate({left: '-80%'});
            $(".blue-3").delay(0).animate({left: '-80%'});
            $(".blue-2").delay(100).animate({left: '-80%'});
            $(".blue-1").delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").delay(0).animate({left: '-60%'});
            $(".blue-3").delay(0).animate({left: '-60%'});
            $(".blue-2").delay(100).animate({left: '-60%'});
            $(".blue-1").delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").delay(0).animate({left: '-50%'});
            $(".blue-3").delay(0).animate({left: '-50%'});
            $(".blue-2").delay(100).animate({left: '-50%'});
            $(".blue-1").delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-2").delay(0).fadeOut(1000);
        $(".transport-bg-1").delay(0).fadeOut(1000);
        $(".transport-bg-4").delay(0).fadeOut(1000);
        $(".transport-bg-3").delay(500).fadeIn(1000);
        
        $(".blue-1").delay(0).animate({left: '0'});
        $(".blue-2").delay(200).animate({left: '0'});
        $(".blue-3").delay(400).animate({left: '0'});
        $(".blue-4").delay(400).animate({left: '0'});
        
        count = 3;

    } else if(count == 3) {
        $('.text-3').fadeOut(500);
        $('.text-1').fadeOut(500);
        $('.text-2').fadeOut(500);
        $('.text-4').delay(1000).fadeIn(500);
        
        if( $(window).width() < 680)
        {
            $(".blue-4").delay(0).animate({left: '-80%'});
            $(".blue-3").delay(0).animate({left: '-80%'});
            $(".blue-2").delay(100).animate({left: '-80%'});
            $(".blue-1").delay(200).animate({left: '-80%'});
        }
        else if( $(window).width() < 1030) {
            $(".blue-4").delay(0).animate({left: '-60%'});
            $(".blue-3").delay(0).animate({left: '-60%'});
            $(".blue-2").delay(100).animate({left: '-60%'});
            $(".blue-1").delay(200).animate({left: '-60%'});
        }  
        else {
            $(".blue-4").delay(0).animate({left: '-50%'});
            $(".blue-3").delay(0).animate({left: '-50%'});
            $(".blue-2").delay(100).animate({left: '-50%'});
            $(".blue-1").delay(200).animate({left: '-50%'});
        }
        
        $(".transport-bg-3").delay(0).fadeOut(1000);
        $(".transport-bg-1").delay(0).fadeOut(1000);
        $(".transport-bg-2").delay(0).fadeOut(1000);
        $(".transport-bg-4").delay(500).fadeIn(1000);
        
        $(".blue-1").delay(0).animate({left: '0'});
        $(".blue-2").delay(200).animate({left: '0'});
        $(".blue-3").delay(400).animate({left: '0'});
        $(".blue-4").delay(400).animate({left: '0'});
        
        count = 0;
    } 
}

var myVar = setInterval(function(){ transition() }, 7000);


$(".sq1").click(function() {
    clearInterval(myVar);
    
    count = 0;
    
    transition();
    
    myVar = setInterval(function(){ transition() }, 7000);
});

$(".sq2").click(function() {
    clearInterval(myVar);
    
    count = 1;
    
    transition();
    myVar = setInterval(function(){ transition() }, 7000);
});

$(".sq3").click(function() {
    clearInterval(myVar);
    
    count = 2;
    
    transition();
    myVar = setInterval(function(){ transition() }, 7000);
});

$(".sq4").click(function() {
    clearInterval(myVar);
    
    count = 3;
    
    transition();
    myVar = setInterval(function(){ transition() }, 7000);
});

/* MAIN BANNER ANIMATIONS END */


/* slider problem  */

// main visibility API function 
// use visibility API to check if current tab is active or not
var vis = (function(){
    var stateKey, 
        eventKey, 
        keys = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();


// check if current tab is active or not
vis(function(){
					
    if(vis()){
	
        // tween resume() code goes here	
	setTimeout(function(){            
            console.log("tab is visible - has focus");
        },300);	
		setTimeout(function(){            
            /*console.log("focus");*/
            
            myVar = setInterval(function(){ transition() }, 6000);
            
        },300);
												
    } else {
	
        // tween pause() code goes here
        console.log("tab is invisible - has blur");	
		clearInterval(myVar);
    }
});




// check if browser window has focus		
var notIE = (document.documentMode === undefined),
    isChromium = window.chrome;
      
if (notIE && !isChromium) {

    // checks for Firefox and other  NON IE Chrome versions
    $(window).on("focusin", function () { 

        // tween resume() code goes here
        setTimeout(function(){            
            /*console.log("focus");*/
            
            myVar = setInterval(function(){ transition() }, 6000);
            
        },300);

    }).on("focusout", function () {

        // tween pause() code goes here
        /*console.log("blur");*/

        clearInterval(myVar);
        
    });

} else {
    
    // checks for IE and Chromium versions
    if (window.addEventListener) {

        // bind focus event
        window.addEventListener("focus", function (event) {

            // tween resume() code goes here
            setTimeout(function(){                 
                 /*console.log("focus");*/
                
                myVar = setInterval(function(){ transition() }, 6000);
                
            },300);

        }, false);

        // bind blur event
        window.addEventListener("blur", function (event) {

            // tween pause() code goes here
             /*console.log("blur");*/
            
            clearInterval(myVar);

        }, false);

    } else {

        // bind focus event
        window.attachEvent("focus", function (event) {

            // tween resume() code goes here
            setTimeout(function(){                 
                 /*console.log("focus");*/
                
                myVar = setInterval(function(){ transition() }, 6000);
                
            },300);

        });

        // bind focus event
        window.attachEvent("blur", function (event) {

            // tween pause() code goes here
            console.log("blur");
            
            clearInterval(myVar);

        });
    }
}

/* slider problem end */



/* SECOND SLIDER ANIMATIONS */

var count2 = 1;

$(".sqb1").click(function() {
    count2 = 1;

    $(".section-photo").hide();
    $(".section-photo1").show();
    $(".sqb2, .sqb3, .sqb4").removeClass('active');
    $(".sqb1").addClass('active');
});
$(".sqb2").click(function() {
    count2 = 2;

    $(".section-photo").hide();
    $(".section-photo2").show();
    $(".sqb1, .sqb3, .sqb4").removeClass('active');
    $(".sqb2").addClass('active');
});
$(".sqb3").click(function() {
    count2 = 3;

    $(".section-photo").hide();
    $(".section-photo3").show();
    $(".sqb2, .sqb1, .sqb4").removeClass('active');
    $(".sqb3").addClass('active');
});
$(".sqb4").click(function() {
    count2 = 4;

    $(".section-photo").hide();
    $(".section-photo4").show();
    $(".sqb2, .sqb3, .sqb1").removeClass('active');
    $(".sqb4").addClass('active');
});

function slider2 () {
    if (count2 == 1) {
        $(".section-photo").hide();
        $(".section-photo1").show();
        $(".sqb2, .sqb3, .sqb4").removeClass('active');
        $(".sqb1").addClass('active');
    }
    else if (count2 == 2) {
        $(".section-photo").hide();
        $(".section-photo2").show();
        $(".sqb1, .sqb3, .sqb4").removeClass('active');
        $(".sqb2").addClass('active');
    }
    else if (count2 == 3) {
        $(".section-photo").hide();
        $(".section-photo3").show();
        $(".sqb2, .sqb1, .sqb4").removeClass('active');
        $(".sqb3").addClass('active');
    }
    else if (count2 == 4) {
        $(".section-photo").hide();
        $(".section-photo4").show();
        $(".sqb2, .sqb3, .sqb1").removeClass('active');
        $(".sqb4").addClass('active');
    }
}
    
$(".photo-arrow").click(function() {
    count2++;
    if (count2 == 5) count2 = 1;
    slider2();
});
    

$(window).scroll(startCounter);

function startCounter() {
    if ($(window).scrollTop() > $('#s-map').offset().top - 600) {
        $(window).off("scroll", startCounter);
        $('.animate-number').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 1200,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

/* button arrow color change */

$(document).ready(function() {
    $('.btn-crazy-blue').hover(function() {
        $(".btn-crazy-blue img").attr("src","img/right-arrow-white.svg");
    }, function() {
        $(".btn-crazy-blue img").attr("src","img/right-arrow.svg");
    });
});



/* SECOND SLIDER ANIMATIONS END */


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
      center:true,
    margin:0,
    nav:true,
    dots:false,
      navText: ["<img src='img/button_strzalka_click.svg'>","<img src='img/button_strzalka_click.svg'>"],
    smartSpeed: 600,
    autoplay:true,
    autoplayTimeout: 2200,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1190:{
            items:2
        },
		1700: {
			items: 3
		},
		2300: {
			items: 4
		}
    }
  })
});



// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 5,

        center: new google.maps.LatLng(53.1321141, 23.24589), // Grabówka

        styles: [
   {
       "featureType": "administrative",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "color": "#444444"
           }
       ]
   },
   {
       "featureType": "administrative.country",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "on"
           }
       ]
   },
   {
       "featureType": "administrative.province",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative.locality",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative.neighborhood",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "all",
       "stylers": [
           {
               "color": "#f2f2f2"
           },
           {
               "visibility": "on"
           }
       ]
   },
   {
       "featureType": "landscape.natural",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "visibility": "on"
           },
           {
               "saturation": "17"
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road",
       "elementType": "all",
       "stylers": [
           {
               "saturation": -100
           },
           {
               "lightness": 45
           },
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "simplified"
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "labels",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "all",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "all",
       "stylers": [
           {
               "color": "#00aded"
           },
           {
               "visibility": "on"
           }
       ]
   }
]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new MarkerWithLabel({
       position: new google.maps.LatLng(53.1307189, 23.2353271),
       draggable: false,
       map: map,
        icon: { 
            url: 'img/logo1-01.svg', 
            scaledSize: new google.maps.Size(40, 40)
        },
        labelContent: "Białystok",
        labelAnchor: new google.maps.Point(84.36, 80),
        labelClass: "labels", // the CSS class for the label
        labelStyle: {opacity: 1.0},
        labelClass: "map-label", // your desired CSS class
        labelInBackground: true
     });
    
}