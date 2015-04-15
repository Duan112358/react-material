var React = require('react');

module.exports = React.createClass({
    displayName: 'Switch',
    render: function(){
        var that = this;
        return (
            <div className="form-group">
                <div className="checkbox switch">
                    <label htmlFor={that.props.id}>
                        <input className="access-hide" id={that.props.id} name={that.prop.name} type="checkbox" onChange={that.props.onChange} checked={that.props.checked}/>
                        <span clasName="switch-toggle"></span>
                        {that.props.label}
                    </label>
                </div>
            </div>
        )
    }
})
