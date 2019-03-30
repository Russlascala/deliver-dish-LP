


/* Script to change the column stacking for mobile to get list on bottom of form */
$(window).resize(function () {
   /*  console.log('resize called'); */
    var width = $(window).width();
   /*  console.log(width); */
    /*  log the width to find out what what pixel to change the order at.
        The dev tools in browser might be different */
    //console.log(width); 
    if (width <= 976) { //991 752
        $('.topMobile').addClass('order-first');
        $('.bottomMobile').addClass('order-last');
    } else {
        $('.topMobile').removeClass('order-first');
        $('.bottomMobile').removeClass('order-last');
    }
})
    .resize();//trigger the resize event on page load.


// Script to animate the Text Sections and button under form
$(window).resize(function () {
    var width = $(window).width();
    var height1 = $(".view").height();
    if (width > 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > (height1 / 2)) {
                //changes bounce in on desktop
                $('.bounceTrigger').addClass(' animated bounceIn');
            } 
        });
    } else if (width <= 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > height1 ) {
                //changes bounce in on mobile
                $('.bounceTrigger').addClass(' animated bounceIn');
            }
        });
    }
})
    .resize();//trigger the resize event on page load.

    
// Script to animate the three over on the image
$(window).resize(function () {
    var width = $(window).width();
    var height2 = $(".sectionScroll").height();
    if (width > 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > height2) {
                //changes slide in's on desktop
                $('.slideRight1').addClass(' animated slideInRight ');
                $('.slideRight2').addClass(' animated slideInRight ');
                $('.slideLeft').addClass(' animated slideInLeft ');
            }
        });
    } else if (width < 752) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > (height2 * 2 )) {
                //changes slide in's on desktop
                $('.slideRight1').addClass(' animated slideInRight ');
                $('.slideRight2').addClass(' animated slideInRight ');
                $('.slideLeft').addClass(' animated slideInLeft ');
            }
        });
    }
})
    .resize();//trigger the resize event on page load.



// When the user clicks on the button, scroll to the top of the document
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
        }, 15);
}

/* Submit page makes div clickable to link */
$(".border-blocks").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
});