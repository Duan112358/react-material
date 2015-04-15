var React = require('react');
var Classable = require('./classable');

module.exports = React.createClass({
    displayName: 'Checkbox',
    getDefaultProps: function(){
        return {
            onChange: function(){}
        };
    },
    renderInner: function(){
        var that = this;
        return <div className={that.props.className}>
            <div className="checkbox checkbox-adv">
                <label htmlFor={that.props.id}>
                    <input className="access-hide" checked={that.props.checked ? 'checked':false} id={that.props.id} name="input-checkout" type="checkbox" onChange={that.props.onChange}/>
                    {that.props.children || that.props.label}
                    <span className="circle"></span>
                    <span className="circle-check"></span>
                    <span className="circle-icon icon icon-done"></span>
                </label>
            </div>
        </div>;
    },
    render: function(){
        var that = this;
    
        return (
            <div className="form-group">
                {!that.props.group ? <div className="row">
                    {that.renderInner()}
                </div> : that.renderInner()}
            </div>
        )
    }
});
