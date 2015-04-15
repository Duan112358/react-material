var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
    displayName: 'NavProfile',
    render: function(){
        return (
            <nav className="menu menu-right" id="profile">
                <div className="menu-scroll">
                    <div className="menu-wrap">
                        <div className="menu-top">
                            <div className="menu-top-img">
                                <img alt="John Smith" src="@@static/images/samples/landscape.jpg"/>
                            </div>
                            <div className="menu-top-info">
                                <a className="menu-top-user" href="javascript:void(0)">
                                    <span className="avatar pull-left">
                                        <img alt="alt text for John Smith avatar" src="@@static/images/users/avatar-001.jpg"/>
                                    </span>
                                    John Smith
                                </a>
                            </div>
                        </div>
                        <div className="menu-content">
                            <ul className="nav">
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="icon icon-account-box"></span>
                                        Profile Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span className="icon icon-add-to-photos"></span>
                                        Upload Photo
                                    </a>
                                </li>
                                <li>
                                    <a href="page-login.html">
                                        <span className="icon icon-exit-to-app"></span>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </nav>
        );
    }
});
