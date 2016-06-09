
$(function(){

    /// servicios

    var wi = $(window).width();
    if(wi >= 769){ var z = 180; }
    if(wi >= 481 && wi <= 768 ){ var z = 140; }
    if(wi <= 480){ var z = 100; }

    /// StickNav
    var stickyNavTop = $('.navbar-nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $('.navbar-nav').addClass('scrollMenu');
            $('.navbar-brand').addClass('scrollBrand');
            $('.icon-bar').addClass('scrollIconbar');
        } else {
            $('.navbar-nav').removeClass('scrollMenu');
            $('.navbar-brand').removeClass('scrollBrand');
            $('.icon-bar').removeClass('scrollIconbar');
        }
    };

    stickyNav();

    var modalServ = function(div){
        var scrollT = $(window).scrollTop(),
            skrollServ = $('#servicios #lst_servicios').offset().top,
            scrollServ = $('#servicios').offset().top,
            scrollProy = $('#proyectos').offset().top;
            if(scrollT >= skrollServ && scrollT <= scrollProy){
                var y = scrollT - skrollServ;
                if(y >= 0){ $(div).css('top', y + z); }
            }
    }

    var fixedServ = function(){
        var scrollT = $(window).scrollTop(),
            skrollServ = $('#servicios #lst_servicios').offset().top,
            scrollProy = $('#proyectos').offset().top;
            if(scrollT >= skrollServ && scrollT <= scrollProy){
                var y = scrollT - skrollServ;
                if(y > 0){ $('.info-item-active').css('top', y+z); }
                else{ $('.info-item-active').css('top', 0); }
                console.log(y);
            }
    }

    $(window).scroll(function(){
        stickyNav();
        fixedServ();
    });

    $('.item .hover').bind("click",function(){
        $('.item').delay(900).css('opacity',0);
        var id = "."+$(this).attr('data-ser'),
            tipovideo = $(this).attr('data-tipov'),
            video = $(this).attr('data-video');
        $(id).addClass("info-item-active");
        modalServ(id);
        if(tipovideo == 1){ src = "https://www.youtube.com/embed/"+video+"?rel=0"; }
        if(tipovideo == 2){ src = "https://player.vimeo.com/video/"+video; }
        $(id).find('#video').attr('src', src);
    });

    $('.info-item button').bind("click", function(){
        $('.item').delay(600).css('opacity',100);
        var id = '.'+$(this).attr('data-ser');
        $(id).removeClass('info-item-active');
        $(id).find("#video").attr('src', '');
        $(id).css('top', '');
    });

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
        $('#navbar').removeClass('in');
        },{ offset: '40%'
    });

});

jQuery(window).load(function(){

    $('a#back-to-top').click(function() {
        $('html, body').animate({scrollTop:0},'slow');
        return false;
    });

    var stickyNavTop = $('.navbar-nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $('.navbar-nav').addClass('scrollMenu');
            $('.navbar-brand').addClass('scrollBrand');
            $('.icon-bar').addClass('scrollIconbar');
        } else {
            $('.navbar-nav').removeClass('scrollMenu');
            $('.navbar-brand').removeClass('scrollBrand');
            $('.icon-bar').removeClass('scrollIconbar');
        }
    };

    stickyNav();

    var w = $(window).width();

    /**
     * SLIDER PRINCIPAL
     * @type {MasterSlider}
     */
    if(w > 960){ var s = skrollr.init({forceHeight: true}); }
    if(w >= 769){
        var slider = new MasterSlider();
        slider.setup('masterslider' , {
            width:1583,    // slider standard width
            height:900,   // slider standard height
            view:"fade",
            space:1,
            layout:'fullscreen',
            loop:true,
            preload:0,
            autoplay:true
        });
    }
    if(w >= 481 && w <= 768 ){
        var slider = new MasterSlider();
        slider.setup('masterslider' , {
            width:1583,    // slider standard width
            height:1024,   // slider standard height
            view:"fade",
            space:1,
            layout:'fullscreen',
            loop:true,
            preload:0,
            autoplay:true
        });
    }
    if(w <= 480){
        var slider = new MasterSlider();
        slider.setup('masterslider' , {
            width:1583,    // slider standard width
            height:1024,   // slider standard height
            view:"fade",
            space:1,
            layout:'fullscreen',
            loop:true,
            preload:0,
            autoplay:true
        });
    }


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


