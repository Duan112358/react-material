var React = require('react');

module.exports = React.createClass({
    displayName: 'Collapse',
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                    <div className="container">
                        <h1 className="heading">Collapse Regions</h1>
                    </div>
                </div>
                <div className="content-inner">
                    <div className="container">
                        <p>
                            <a className="btn collapsed waves-button waves-effect" data-toggle="collapse" data-target="#collapsible-region" href="javascript:void(0)">
                                <span className="collapsed-hide">Collapse</span>
                                <span className="collapsed-show">Expand</span>
                            </a>
                        </p>
                        <div className="collapsible-region collapse" id="collapsible-region">
                            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
