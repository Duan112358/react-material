var React = require('react');

module.exports = React.createClass({
    displayName: 'Dropdowns',
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container">
                        <h1 className="heading">Dropdowns</h1>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container">
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Dropdown!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Card Dropdown</span><span className="icon icon-more-vert"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Card Dropdown</span><span className="icon icon-more-vert"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tile-wrap">
                            <div className="tile">
                                <div className="tile-action">
                                    <ul className="nav nav-list pull-right">
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Tile Dropdown</span><span className="icon icon-more-vert"></span></a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="javascript:void(0)"><span className="icon icon-loop margin-right-half"></span>Lorem Ipsum</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)"><span className="icon icon-replay margin-right-half"></span>Consectetur Adipiscing</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)"><span className="icon icon-shuffle margin-right-half"></span>Sed Ornare</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tile-inner">
                                    <span>lorem ipsum dolor sit amet</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="content-sub-heading">Button Dropdown</h2>
                        <div className="dropdown-wrap">
                            <div className="dropdown dropdown-inline">
                                <a className="btn dropdown-toggle-btn" data-toggle="dropdown">Button Dropdown<span className="icon icon-keyboard-arrow-down margin-left-half"></span></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="javascript:void(0)">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Consectetur Adipiscing</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Sed Ornare</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
