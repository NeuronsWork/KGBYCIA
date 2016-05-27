
$(function(){
    $('a.smoothScroll').smoothScroll({
        offset: 0,
        scrollTarget: $(this).val()
    });

    // Waypoints
    $('section').waypoint(
        function(direction) {
        if (direction ==='down') {
            var wayID = $(this).attr('id');
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');
        }
        $('.current').removeClass('current');
        $('#navbar .navbar-nav a[href=#'+wayID+']').addClass('current');
        },{ offset: '40%'
    });


    /// StickNav
    var stickyNavTop = $('.navbar-nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.navbar-nav').addClass('scrollMenu');
        } else {
            $('.navbar-nav').removeClass('scrollMenu');
        }
    };

    stickyNav();

    $(window).scroll(function(){ stickyNav(); });
});

jQuery(window).load(function(){

    /**
     * SLIDER PRINCIPAL
     * @type {MasterSlider}
     */
    var slider = new MasterSlider();
    slider.setup('masterslider' , {
        width:1583,    // slider standard width
        height:591,   // slider standard height
        view:"fade",
        space:1,
        layout:'fullwidth',
        loop:true,
        preload:0,
        autoplay:true
    });

    /**
     * SLIDER PROYECTOS
     * @type {MasterSlider}
     */
    var slider1 = new MasterSlider();
    slider1.setup('masterslider1' , {
        width:645,
        height:350,
        space:40,
        loop:true,
        view:'fadeWave',
        layout:'partialview',
        autoplay:true
    });
});


