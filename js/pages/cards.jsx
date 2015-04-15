var React = require('react');

module.exports = React.createClass({
    displayName: 'Cards',
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container">
                        <h1 className="heading">Cards</h1>
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
                                                <p className="card-heading">Default Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                        <h2 className="content-sub-heading">Cards with Rich Media Area</h2>
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card">
                                        <div className="card-main">
                                            <div className="card-img">
                                                <img alt="alt text" src="@@static/images/samples/landscape.jpg"/>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check text-blue"></span>&nbsp;<span className="text-blue">OK</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card">
                                        <div className="card-main">
                                            <div className="card-img">
                                                <img alt="alt text" src="@@static/images/samples/landscape.jpg"/>
                                                <p className="card-img-heading">Some Text!</p>
                                            </div>
                                            <div className="card-inner">
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check text-blue"></span>&nbsp;<span className="text-blue">OK</span></a>
                                                    </li>
                                                    <li>
                                                        <a data-dismiss="tile" href="javascript:void(0)"><span className="icon icon-close"></span>&nbsp;Cancel</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card">
                                        <div className="card-main">
                                            <div className="card-header">
                                                <div className="card-inner-side pull-left">
                                                    <div className="avatar avatar-sm">
                                                        <img alt="John Smith Avatar" src="@@static/images/users/avatar-001.jpg"/>
                                                    </div>
                                                </div>
                                                <div className="card-inner">
                                                    <span>Some Text!</span>
                                                </div>
                                            </div>
                                            <div className="card-img">
                                                <img alt="alt text" src="@@static/images/samples/landscape.jpg"/>
                                            </div>
                                            <div className="card-inner">
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check text-blue"></span>&nbsp;<span className="text-blue">OK</span></a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
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
                        <h2 className="content-sub-heading">Cards with Vertical Action Area</h2>
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card">
                                        <aside className="card-side card-side-right">
                                            <span className="card-heading icon icon-info-outline"></span>
                                        </aside>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check text-blue"></span>&nbsp;<span className="text-blue">OK</span></a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check text-blue"></span>&nbsp;<span className="text-blue">OK</span></a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card">
                                        <aside className="card-side card-side-img">
                                            <img alt="alt text" src="@@static/images/samples/portrait.jpg"/>
                                        </aside>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="content-sub-heading">Coloured Cards</h2>
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-alt">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-alt">Brand Colour!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-blue">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-blue">Blue Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-green">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-green">Green Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-purple">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-purple">Purple Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-red">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-red">Red Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-yellow">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading text-yellow">Yellow Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-alt card-alt-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Brand Colour!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-alt" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-blue card-blue-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Blue Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-blue" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-green card-green-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Green Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-green" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-purple card-purple-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Purple Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-purple" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-red card-red-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Red Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-red" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="card card-yellow card-yellow-bg">
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Yellow Card!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Add</span><span className="icon icon-add"></span></a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="access-hide">Delete</span><span className="icon icon-delete"></span></a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-yellow" data-toggle="dropdown"><span className="access-hide">Edit</span><span className="icon icon-settings"></span></a>
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
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-alt">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-blue">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-green">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-purple">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-red">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-yellow">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
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
                        <div className="card-wrap">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-alt card-alt-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-alt" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-blue card-blue-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-blue" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-green card-green-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-green" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-purple card-purple-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-purple" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-red card-red-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-red" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card card-yellow card-yellow-bg">
                                        <a className="card-side" href="javascript:void(0)"><span className="card-heading">Action</span></a>
                                        <div className="card-main">
                                            <div className="card-inner">
                                                <p className="card-heading">Primary Area!</p>
                                                <p>
                                                    Lorem ipsum dolor sit amet.<br/>
                                                    Consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="card-action">
                                                <ul className="nav nav-list pull-left">
                                                    <li>
                                                        <a href="javascript:void(0)"><span className="icon icon-check"></span>&nbsp;OK</a>
                                                    </li>
                                                </ul>
                                                <ul className="nav nav-list pull-right">
                                                    <li className="dropdown">
                                                        <a className="dropdown-toggle dropdown-toggle-yellow" data-toggle="dropdown"><span className="access-hide">More</span><span className="icon icon-keyboard-arrow-down"></span></a>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-1 margin-right-half"></span>&nbsp;Lorem Ipsum</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-2 margin-right-half"></span>&nbsp;Consectetur Adipiscing</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)"><span className="icon icon-filter-3 margin-right-half"></span>&nbsp;Sed Ornare</a>
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
                    </div>
                </div>
            </div>
        );
    }
});
