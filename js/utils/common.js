module.exports = {
    onResize: function(callback){
        window.onresize = function(){
            clearTimeout(window.__timer);
            window.__timer = setTimeout(callback, 100);
        };
    },
    contentFixPushCal: function(){
        window.htmlHeight = $('body').height();

        $('.content-fix-scroll').each(function(index) {
            $(this).css('width', $(this).closest('.content-fix').outerWidth());
            $('.content-fix-inner', $(this)).css('width', $(this).closest('.content-fix').width());
        });

        if ($('.footer').length) {
            window.footerHeight = $('.footer').outerHeight();
        }
    },
    contentFix: function(content){
        var scrolled = window.innerHeight + window.pageYOffset;

        if (window.pageYOffset >= (content.offset().top - window.headerHeight)) {
            if ((content.is('[class*="col-xx"]')) || (content.is('[class*="col-xs"]') && $(window).width() >= 480) || (content.is('[class*="col-sm"]') && $(window).width() >= 768) || (content.is('[class*="col-md"]') && $(window).width() >= 992) || (content.is('[class*="col-lg"]') && $(window).width() >= 1440)) {
                if (!content.hasClass('fixed')) {
                    content.addClass('fixed');
                    $('.content-fix-wrap', content).scrollTop(0);
                };
                if (htmlHeight <= scrolled) {
                    $('.content-fix-inner', content).css('padding-bottom', scrolled - htmlHeight);
                };
            };
        } else {
            content.removeClass('fixed');
            $('.content-fix-inner', content).css('padding-bottom', '');
        }
    },
    footerPush: function(){
        $('body').css('margin-bottom', $('.footer').outerHeight());
    },
    tabSwitch: function(newTab, oldTab){
        var $nav = newTab.closest('.tab-nav'),
            $navIndicator = $('.tab-nav-indicator', $nav),
            navOffset = $nav.offset().left,
            navWidth = $nav.width(),
            newTabOffset = newTab.offset().left,
            newTabWidth = newTab.outerWidth();

        if (oldTab != null && oldTab.offset().left > newTabOffset) {
            $navIndicator.addClass('reverse');
            setTimeout(function() {
                $navIndicator.removeClass('reverse');
            }, 450);
        };

        $navIndicator.css({
            left: (newTabOffset - navOffset),
            right: navOffset + navWidth - newTabOffset - newTabWidth
        });
    },
    toggleMenuCollapse: function(){
        if($('.menu-collapse').length){
            $(".menu-collapse").each(function(index){
                var $this = $(this);
                var $thisLi = $this.closest('li');
                if($this.hasClass('in')){
                    $thisLi.attr('data-height', $thisLi.height());
                }
            });
        }
    },
    toggleMenu: function(){
        var $this = this;

        $(document).on('click', '.menu-toggle', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var $this = $(this),
                $thisLi = $this.closest('li'),
                $thisMenu = $($this.attr('data-target'));

            if ($thisLi.hasClass('active')) {
                $('body').removeClass('menu-open');
                $thisLi.removeClass('active');
                $thisMenu.removeClass('open');
            } else {
                $('body').addClass('menu-open');
                $('.menu-toggle').closest('li.active').removeClass('active');
                $('.menu.open').removeClass('open');
                $thisLi.addClass('active');
                $thisMenu.addClass('open');
                if ($thisMenu.hasClass('menu-search')) {
                    $('.menu-search-focus').focus();
                };
            }
        });

        $(document).on('click', function(e){
            var $target = $(e.target);
            
            if($('body').hasClass('menu-open') && !$target.hasClass('icon')){
                $this.resetMenu();
            }
        });
    },
    resetMenu: function(){
        $('body').removeClass('menu-open');
        $('.menu-toggle').closest('li.active').removeClass('active');
        $('.menu.open').removeClass('open');
    }
};
