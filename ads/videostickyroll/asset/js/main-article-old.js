$(document).ready(function() {

    // sticky terpopuler
    $(".js-tower-sticky").stick_in_parent({
        parent: ".js-tower-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });

    // sticky live
    $(".js-live-keynote").stick_in_parent({
        parent: ".js-giant-live-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });
    // sticky button live
    $(".js-live-notif").stick_in_parent({
        parent: ".js-giant-live-sticky-parent",
        inner_scrolling: false,
        spacer: false,
        offset_top: 60,
    }).on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    }).on('sticky_kit:unbottom', function(e) {
    });

    $(window).scroll(function () {
        if($(".js-live-notif").hasClass('is_stuck')) {
            $('.js-live-notif-wrap').css({
                'padding-top': '50px',
            });
        } else {
            $('.js-live-notif-wrap').removeAttr('style');
        }  
    });

    // override style asset article (photo/video)
    if($('.photo').length>0 || $('.video').length>0 || $('.photo-infographic').length>0){
        $( ".photo, .js-read-article .video, .photo-infographic" ).each(function( index ) {
            var im =$(this).children('img');
            var tt = $(this).find('.author').text();
            if(tt.length>0)
                tt = '('+tt+')';

            // wrap photo
            var iw = im.wrap('<div class="photo__wrap"></div>');
            var iws = $( ".photo__wrap" );
            if($(this).is(".photo-infographic")) {
                $(this).find( ".photo__wrap" ).append('<div class="photo__icon photo__icon__expand"><svg class="icon icon-expand"><use xlink:href="./asset/images/symbol-defs.svg#icon-expand"/></svg></div>');
            }

            $(this).find( ".author" ).remove();
            var ss = $(this).text();

            $(this).contents().filter(function () {
                return this.nodeType===3;
            }).remove();
            $('<div class="photo__caption"></div>').appendTo(this).append(''+ss+'<span class="photo__author author">'+tt+'</span>');
        });
    }

    if($('.lensa__photo').length>0) {
        $('.lensa__photo').each(function( index ) {
            $(this).find( ".lensa__photo__asset" ).append('<div class="photo__icon photo__icon__expand"><svg class="icon icon-expand"><use xlink:href="./asset/images/symbol-defs.svg#icon-expand"/></svg></div>');
        });
    }
    if($('.gallery__item').length>0) {
        $('.gallery__item').each(function( index ) {
            $(this).find( ".gallery__photo__asset" ).append('<div class="photo__icon photo__icon__expand"><svg class="icon icon-expand"><use xlink:href="./asset/images/symbol-defs.svg#icon-expand"/></svg></div>');
        });
    }

 
    // datepicker indeks
    $('#datepicker .form__input').datepicker({
        maxDate: new Date(),
        format: "dd M yyyy",
        leftArrow: '<<',
        rightArrow: '>>',
        endDate: '+dd',
        container: '#datepicker',
        todayHighlight: true,
        "autoclose": true
    }).on('changeDate', function(e){ 

        var chosenDate = e.format('yyyy-mm-dd');
        var path = $('#pathurl').val();

        window.location = path+"/"+chosenDate;
    });

     // zoom infographic 
    var $pswp = $('.pswp')[0];
    $('.js-read-article, .js-gallery').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('.photo-infographic, .js-gallery-item').each(function() {
                    var ii = $(this).find('.author').text();
                    var im = $(this).find('img');
                    var sd = '';
                    if(ii.length>0) {
                        console.log(ii);
                        sd = ' '+ii+'';
                    }
                    var $href   = im.data('link'),
                        $title  = im.data('title') + sd,
                        $size   = im.data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];
     
                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height,
                        title: $title
                    }
     
                    items.push(item);
                });
                return items;
            }
     
        var items = getItems();
        console.log(items);
        $pic.on('click', '.photo-infographic, .js-gallery-asset', function(event) {
            // event.preventDefault();
            var $index = $(this).index();
            var idx = $(this).closest('.js-read-article, .js-gallery').find('.photo-infographic, .js-gallery-asset').index(this);
            console.log(idx);
            var options = {
                index: idx,
                bgOpacity: 0.9,
                captionEl: true,
                showHideOpacity: true,
                counterEl: true,
                zoomEl: false,
                arrowEl: true,
                fullscreenEl: false,
                closeOnScroll: false, 
                shareButtons: [
                    {id:'facebook', label:'Facebook', url:'https://www.facebook.com/dialog/share?app_id=175782456137534&amp;href={{url}}&amp;picture={{raw_image_url}}'},
                    {id:'twitter', label:'Twitter', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                    {id:'google', label:'Google+', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
                ],
                getThumbBoundsFn: function(index) {

                    // find thumbnail element
                    var thumbnail = document.querySelectorAll('.photo-infographic .photo__wrap, .js-gallery-item .js-gallery-asset')[index];

                    // get window scroll Y
                    var pageYScroll = window.pageYOffset || document.documentElement.scrollTop; 
                    // optionally get horizontal scroll

                    // get position of element relative to viewport
                    var rect = thumbnail.getBoundingClientRect(); 

                    // w = width
                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};


                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
             
            // Initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });

    // otomotif
    $('.js-manufaktur-gallery').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        slidesToShow: 1,
        dots: false,
        // arrows: false,
        pauseOnFocus: true,
        prevArrow: "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='./asset/images/symbol-defs.svg#icon-angle-left'/></svg></a>",
        nextArrow: "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='./asset/images/symbol-defs.svg#icon-angle-right'/></svg></a>"
    });


});
