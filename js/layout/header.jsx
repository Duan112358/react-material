var React = require('react/addons');
var {Link, Navigation} = require('react-router');

module.exports = React.createClass({
    displayName: 'Header',
    mixins: [Navigation],
    render: function(){
        return (
            <header className="header">
                <div className="clearfix pull-left">
                    <ul className="nav nav-list pull-left">
                        <li>
                            <a href="javascript:void(0)" className="menu-toggle" data-target="#menu">
                                <span className="access-hide">Menu</span>
                                <span className="icon icon-menu"></span>
                                <span className="header-close icon icon-close"></span>
                            </a>
                        </li>
                    </ul>
                    <a className="header-logo" href="#/">Material</a>
                </div>
                <div className="clearfix pull-right">
                    <ul className="nav nav-list pull-right">
                        <li>
                            <a className="menu-toggle" href="javascript:void(0)" data-target="#search">
                                <span className="access-hide">Search</span>
                                <span className="icon icon-search"></span>
                                <span className="header-close icon icon-close"></span>
                            </a>
                        </li>
                        <li>
                            <a className="menu-toggle" href="javascript:void(0)" data-target="#profile">
                                <span className="access-hide">Profile</span>
                                <span className="avatar avatar-sm">
                                    <img alt="alt text for John Smith avatar" src="/static/images/users/avatar-001.jpg"/> 
                                </span>
                                <span className="header-close icon icon-close"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
})
