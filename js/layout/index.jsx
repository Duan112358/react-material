var React = require('react');
var Router = require('react-router');

var Header = require('./header');
var Nav = require('./nav');
var NavProfile = require('./nav-profile');
var NavSearch = require('./nav-search');
var Footer = require('./footer');
var Common = require('../utils/common');

module.exports = React.createClass({
    mixins: [Common],
    displayName: 'App',
    init: function(){
        var $this = this;
        $this.onResize(function(){
            if($('.content-fix').length){
                $this.contentFixPushCal(); 
            } 

            $this.footerPush();

            $('.tab-nav').each(function(item, index){
                $this.tabSwitch($('.nav > li.active', $(item)), null);
            });
        });    

        var $header = $('.header');

        $(window).on('scroll', function(){
            if(window.pageYOffset > $header.height()){
                $header.addClass('fixed');
            }else{
                $header.removeClass('fixed');
            } 

            window.headerHeight = $header.height();

            $('.content-fix').each(function(index, item) {
                if ($(this).outerHeight() < $(this).closest('.row-fix').outerHeight()) {
                    $this.contentFix($(item));
                }
            });
        });

        $this.contentFixPushCal(); 
        $this.toggleMenuCollapse();
        $this.toggleMenu();
    },
    componentDidMount: function(){
        this.init();
    },
	render: function() {
		return (
			<div className="page-wrapper">
                <Header/>
                <Nav/>
                <NavProfile/>
                <NavSearch/>
                <Router.RouteHandler/>
                <Footer/>
			</div>
		);
	}
});
