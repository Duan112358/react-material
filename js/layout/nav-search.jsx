var React = require('react');
var Link = require('react-router');

module.exports = React.createClass({
    displayName: 'NavSearch',
    render: function(){
        return (
            <div className="menu menu-right menu-search" id="search">
                <div className="menu-scroll">
                    <div className="menu-wrap">
                        <div className="menu-top">
                            <div className="menu-top-info">
                                <form className="menu-top-form">
                                    <label className="access-hide" htmlFor="menu-search">Search</label>
                                    <input className="form-control form-control-inverse menu-search-focus" id="menu-search" placeholder="Search" type="search"/>
                                    <button className="access-hide" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="menu-content">
                            <div className="menu-content-inner">
                                <p><strong>Saved Search Queries:</strong></p>
                                <ul>
                                    <li><a href="javascript:void(0)">lorem ipsum dolor sit amet</a></li>
                                    <li><a href="javascript:void(0)">consectetur adipiscing elit</a></li>
                                    <li><a href="javascript:void(0)">sed ornare orci lorem</a></li>
                                    <li><a href="javascript:void(0)">vel eleifend elit tempor eleifend</a></li>
                                    <li><a href="javascript:void(0)">morbi feugiat aliquet justo</a></li>
                                </ul>
                                <hr/>
                                <p><strong>Popular Search Queries:</strong></p>
                                <ul>
                                    <li><a href="javascript:void(0)">id ullamcorper tortor lobortis eu</a></li>
                                    <li><a href="javascript:void(0)">aliquam ut tellus arcu</a></li>
                                    <li><a href="javascript:void(0)">cestibulum tortor purus</a></li>
                                    <li><a href="javascript:void(0)">pretium ac dolor id</a></li>
                                    <li><a href="javascript:void(0)">gravida molestie libero</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
