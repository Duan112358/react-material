var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
    displayName: 'Index',
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container">
                        <h1 className="heading">Material</h1>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <h2 className="content-sub-heading">Introduction</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in massa vitae nisl hendrerit sollicitudin at vel purus. Quisque leo est, posuere a dignissim id, posuere non quam. Nulla dapibus quis leo eu pulvinar. Phasellus ultrices condimentum dolor, non condimentum nibh. Curabitur tempor sollicitudin eros vitae posuere.
                                </p>
                                <h2 className="content-sub-heading">Components</h2>
                                <ul>
                                    <li><Link to="cards">Cards</Link></li>
                                    <li><Link to="collapse">Collapsible Regions</Link></li>
                                    <li><Link to="dropdowns">Dropdowns</Link></li>
                                    <li><a href="#/modal">Modal &amp; Toasts</a></li>
                                    <li><a href="#/tab">Tabs</a></li>
                                    <li><a href="#/tile">Tiles</a></li>
                                </ul>
                                <h2 className="content-sub-heading">Elements</h2>
                                <ul>
                                    <li><a href="#/button">Buttons</a></li>
                                    <li>
                                        <a href="#/form">Form Elements</a>
                                        <ul>
                                            <li><a href="#/form-material">Materialised Form Elements</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#/icons">Icons</a></li>
                                </ul>
                                <h2 className="content-sub-heading">Examples</h2>
                                <ul>
                                    <li><Link to="404">404 Page</Link></li>
                                    <li><Link to="500">500 Page</Link></li>
                                    <li><a href="page-affix.html">Fixed Left/Right Hand Side Column</a></li>
                                    <li><Link to="affix-full">Full-Width Page <small>(with fixed LHC/RHC)</small></Link></li>
                                    <li><Link to="login">Login Page</Link></li>
                                    <li>
                                        <a href="page-palette.html">Page Palettes</a>
                                        <ul>
                                            <li><a href="page-palette-blue.html">Blue Palette</a></li>
                                            <li><a href="page-palette-green.html">Green Palette</a></li>
                                            <li><a href="page-palette-purple.html">Purple Palette</a></li>
                                            <li><a href="page-palette-red.html">Red Palette</a></li>
                                            <li><a href="page-palette-yellow.html">Yellow Palette</a></li>
                                        </ul>
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
