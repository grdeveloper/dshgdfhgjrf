(function ($) {

    $(document).ready(function(){
        var ppWaypoint = $('.animated').waypoint(function(direction) {
            if(direction === 'down') {
                $(this.element).addClass('show');
                this.destroy();
            }
        }, {
            offset: '80%'
        });
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 200,
        loop:true,
        margin:10,
        nav:false,
        items:1,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
                stagePadding: 60
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 200
            },
            1200:{
                items:1,
                stagePadding: 250
            },
            1400:{
                items:1,
                stagePadding: 300
            },
            1600:{
                items:1,
                stagePadding: 350
            },
            1800:{
                items:1,
                stagePadding: 400
            }
        }
    })

})(jQuery);
