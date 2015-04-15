var React = require('react');
var Classable = require('../classable');

module.exports = React.createClass({
    displayName: 'Card',
    mixins: [Classable],
    render: function(){
        var that = this;

        return (
            <div className={that.getClasses('card', that.props.className)} >
                <div className="card-main">
                </div>
            </div>
        );
    }
})
