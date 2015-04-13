var React = require('react');
var Classable = require('./classable');

module.exports = React.createClass({
    displayName: 'Checkbox',
    getDefaultProps: function(){
        return {
            onChange: function(){}
        };
    },
    render: function(){
        var that = this;
        return <div className="checkbox">
            <label htmlFor={that.props.id}>
                <input className="access-hide" checked={that.props.checked ? 'checked':false} id={that.props.id} name="input-checkout" type="checkbox" onChange={that.props.onChange}/>
                {that.props.children}
                <span className="circle"></span>
                <span className="circle-icon icon icon-done"></span>
            </label>
        </div>;
    }
});
