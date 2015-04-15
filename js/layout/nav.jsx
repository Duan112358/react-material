var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
    displayName: 'Nav',
    render: function(){
        return (
            <nav className="menu" id="menu">
                <div className="menu-scroll">
                    <div className="menu-wrap">
                        <div className="menu-content">
                            <ul className="nav">
                                <li>
                                    <Link to="cards">Cards</Link>
                                </li>
                                <li>
                                    <Link to="collapse">Collapsible Regions</Link>
                                </li>
                                <li>
                                    <Link to="dropdowns">Dropdowns</Link>
                                </li>
                                <li>
                                    <Link to="modals">Modals &amp; Toasts</Link>
                                </li>
                                <li>
                                    <a href="#/tabs">Tabs</a>
                                </li>
                                <li>
                                    <a href="#/tiles">Tiles</a>
                                </li>
                            </ul>
                            <hr/>
                            <ul className="nav">
                                <li>
                                    <a href="#/buttons">Buttons</a>
                                </li>
                                <li>
                                    <a data-target="form-elements" href="javascript:void(0)">Form Elements</a>
                                    <span className="menu-collapse-toggle collapsed" data-target="#form-elements" data-toggle="collapse">
                                        <i className="icon icon-close menu-collapse-toggle-close"></i>
                                        <i className="icon icon-add menu-collapse-toggle-default"></i>
                                    </span>
                                    <ul className="menu-collapse collapse" id="form-elements">
                                        <li>
                                            <a href="#/form-material">Materialised Form Elements</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/icons">Icons</a>
                                </li>
                            </ul>
                            <hr/>
                            <ul className="nav">
                                <li>
                                    <a href="#/affix">Fixed LHC/RHC Page</a>
                                </li>
                                <li>
                                    <Link to="affix-full">Fixed Width Page</Link>
                                </li>
                                <li>
                                    <Link to="login">Login Page</Link>
                                </li>
                                <li>
                                    <a data-target="palettes" href="javascript:void(0)">Page Palettes</a>
                                    <span className="menu-collapse-toggle collapsed" data-target="#palettes" data-toggle="collapse">
                                        <i className="icon icon-close menu-collapse-toggle-close"></i>
                                        <i className="icon icon-add menu-collapse-toggle-default"></i>
                                    </span>
                                    <ul className="menu-collapse collapse" id="palettes">
                                        <li>
                                            <a href="#/palette-blue">Blue Palette</a>
                                        </li>
                                        <li>
                                            <a href="#/palette-green">Green Palette</a>
                                        </li>
                                        <li>
                                            <a href="#/palette-purple">Purple Palette</a>
                                        </li>
                                        <li>
                                            <a href="#/palette-red">Red Palette</a>
                                        </li>
                                        <li>
                                            <a href="#/palette-yellow">Yellow Palette</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/icons">Icons</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
})
