var React = require('react');
var Classable = require('./classable');

module.exports = React.createClass({
    displayName: 'Input',
    mixins: [Classable],
    propTypes: {
        error: React.PropTypes.any,
        desc: React.PropTypes.any
    },
    getInitialState: function(){
        return {
            focus: false,
            hightlight: false
        };
    },
    onFocus: function(evt){
        this.setState({
            focus: true
        }); 
    },
    onBlur: function(evt){
        if(!evt.target.value){
            this.setState({
                focus: false
            }); 
        }
    },
    onChange: function(evt){
        if(evt.target.value){
            this.setState({
                focus: true
            });
        }else{
            this.setState({
                focus: false
            });
        }
        this.props.onChange(evt); 
    },
    render: function(){
        var that = this;
        return <div className={that.getClasses('form-group form-group-label', {'control-focus': that.state.focus || that.props.value, 'control-label-error': that.props.error, 'error': that.props.error})}>
            <label className="floating-label" htmlFor={that.props.id} ref="label">
                {that.props.label}&nbsp;&nbsp;&nbsp;{that.props.desc ? <span className="info-desc desc">({that.props.desc})</span> : false}
            </label>
            <input className="form-control" id={that.props.id} type={that.props.type || 'text'} name={that.props.name} ref="input" 
                onChange={that.onChange} 
                onBlur={that.onBlur}
                value={that.props.value}
                onFocus={that.onFocus}/>
            {that.props.error ? <div className="input-error error">{that.props.error}</div> : false}
        </div>;
    }
})
