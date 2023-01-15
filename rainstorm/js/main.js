//Wrap JQuery so $ is is usable in Drupal
jQuery(function($) {

    var $window = $(window); //Set the Window
    var menustate="seethrough";
    var readmoreintrostate="closed";
    var readmoreonestate="closed";
    var readmoretwostate="closed";
    var servicestate="closed";

    // ScrollTo

    $("#topbutton").click(function(event) {
        event.preventDefault();
//         mypos = $('#drintro').offset().top-100+"px";
    mypos = "0px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });


$("#navintro").click(function(event) {
        event.preventDefault();
//         mypos = $('#drintro').offset().top-100+"px";
//     mypos = "0px";
         mypos = $('#intro').offset().top-200+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });

    $("#navtwo").click(function(event) {
        event.preventDefault();
        mypos = $('#navtwotarget').offset().top-100+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });

    $("#navthree").click(function(event) {
        event.preventDefault();
        mypos = $('#navthreetarget').offset().top-80+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });
    
        $("#navfour").click(function(event) {
        event.preventDefault();
        mypos = $('#navfourtarget').offset().top-180+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });

    // there are mulitple contact buttons so a class was used instead of an ID
    $(".contactbutton").click(function(event) {
        event.preventDefault();
        mypos = $('#contact').offset().top-80+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });


    // Service Clicks
/*
    $("a.service").click(function(event) {
        event.preventDefault();
        mypos = $('#navthreetarget').offset().top-80+"px";
        $('html, body').animate({ scrollTop: mypos }, 750);
    });
*/

/*
    service-menu-one
    $('a.service-menu-one').click(function(event) {
            event.preventDefault();
*/

     $('a.service').click(function(event) {


        event.preventDefault();
        mypos = $('#servicestargetbottom').offset().top-80+"px";
        $('html, body').animate({ scrollTop: mypos }, 250);

        var serviceactive = $(this).attr('class').split(' ');
        var serviceactiveclass = serviceactive[1];

        switch (serviceactiveclass)
        {
            case "service-menu-one":
            $(".servicecontent").css("display", "none");
            $(".serviceone").css("display", "block");
            break;

            case "service-menu-two":
            $(".servicecontent").css("display", "none");
            $(".servicetwo").css("display", "block");
            break;

            case "service-menu-three":
            $(".servicecontent").css("display", "none");
            $(".servicethree").css("display", "block");
            break;

            case "service-menu-four":
            $(".servicecontent").css("display", "none");
            $(".servicefour").css("display", "block");
            break;

            case "service-menu-five":
            $(".servicecontent").css("display", "none");
            $(".servicefive").css("display", "block");
            break;

            case "service-menu-six":
            $(".servicecontent").css("display", "none");
            $(".servicesix").css("display", "block");
            break;

            case "service-menu-seven":
            $(".servicecontent").css("display", "none");
            $(".serviceseven").css("display", "block");
            break;

            case "service-menu-eight":
            $(".servicecontent").css("display", "none");
            $(".serviceeight").css("display", "block");
            break;

            case "service-menu-nine":
            $(".servicecontent").css("display", "none");
            $(".servicenine").css("display", "block");
            break;

            case "service-menu-ten":
            $(".servicecontent").css("display", "none");
            $(".serviceten").css("display", "block");
            break;

            case "service-menu-eleven":
            $(".servicecontent").css("display", "none");
            $(".serviceeleven").css("display", "block");
            break;

            case "service-menu-twelve":
            $(".servicecontent").css("display", "none");
            $(".servicetwelve").css("display", "block");
            break;

            case "service-menu-thirteen":
            $(".servicecontent").css("display", "none");
            $(".servicethirteen").css("display", "block");
            break;

            case "service-menu-fourteen":
            $(".servicecontent").css("display", "none");
            $(".servicefourteen").css("display", "block");
            break;

            case "service-menu-fifteen":
            $(".servicecontent").css("display", "none");
            $(".servicefifteen").css("display", "block");
            break;

        }

        if (servicestate=="closed") {
            serviceheight=$('.servicefull-inside').height();
            servicepadded=serviceheight+180;
            $('.servicefull').animate({height:servicepadded},100, function() {
              $(this).css('height', 'auto');
            });
        } else {
        servicestate="closed";
        }
    });

    $('.close-x').click(function(event) {
         $('.servicefull').animate({height:0},100);
        });







    // Equal Heights Function

    equalheight = function(container){

        var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

        $(container).each(function() {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    // Equal Heights Call Function
    jQuery(window).on('load', function() {
        equalheight('.no-flexbox .fifty');
    });

    jQuery(window).resize(function(){
        equalheight('.no-flexbox .fifty');
    });

    // Google Map
    $('.google-maps').click(function () {
        $('.google-maps iframe').css("pointer-events", "auto");
    });

    // Read More

    $('#introclick').click(function() {
        if (readmoreintrostate=="closed") {
            heightone=$('.moreintro .inner-wrap').height();
            heightonepadded=heightone+40;
            $('.moreintro').animate({height:heightonepadded},100);
            readmoreintrostate="open";
        } else {
                            $('.moreintro').animate({height:0},100);
        readmoreintrostate="closed";
        }
    });

    $('#welcomeclick-one').click(function() {
        if (readmoreonestate=="closed") {
            heightone=$('.moreone .inner-wrap').height();
            heightonepadded=heightone+120;
            $('.moreone').animate({height:heightonepadded},100);
            readmoreonestate="open";
        } else {
                            $('.moreone').animate({height:0},100);
        readmoreonestate="closed";
        }
    });

    $('#squareclick-two').click(function() {
        if (readmoretwostate=="closed") {
            heightone=$('.moretwo .inner-wrap').height();
            heightonepadded=heightone+120;
            $('.moretwo').animate({height:heightonepadded},100);
            readmoretwostate="open";
        } else {
                            $('.moretwo').animate({height:0},100);
        readmoretwostate="closed";
        }
    });



    // Menu Bar

    $window.scroll(function (event) {
        var scroll = $window.scrollTop();
        $(".header").toggleClass("headerchange", scroll > 45);
    });

});
