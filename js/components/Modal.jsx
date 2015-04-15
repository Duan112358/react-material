var React = require('react');
var Classable = require('../components/classable');

module.exports = React.createClass({
    displayName: 'Modal',
    mixins: [Classable],
    propTypes: {
        hideConfirmButton: React.PropTypes.bool,
        closeButtonText: React.PropTypes.any,
        confirmButtonText: React.PropTypes.any,
        onClose: React.PropTypes.func,
        onConfirm: React.PropTypes.func,
        fullwidth: React.PropTypes.bool
    },
    render: function(){
        var that = this;
        return (
            <div className={that.getClasses('modal fade', that.props.className)} aria-hidden="true" id={that.props.id} role="dialog" tabindex="-1">
                <div className={that.getClassString({'modal-dialog':true, 'modal-xs': !that.props.fullwidth})}>
                    <div className="modal-content">
                        <div className="modal-heading">
                            <a className="modal-close" data-dismiss="modal">&times;</a>
                            <h2 className="modal-title">{that.props.title || 'Modal Title'}</h2>
                        </div>
                        <div className="modal-inner">
                            {that.props.children}
                        </div>
                        <div className="modal-footer">
                            <p className="text-right">
                                <button className="btn btn-flat btn-alt" data-dismiss="modal" type="button">{that.props.closeButtonText || 'Close'}</button>
                                {that.props.hideConfirmButton ? false : 
                                    <button className="btn btn-flat btn-primary" data-dismiss="modal" type="button">{that.props.confirmButtonText || 'OK'}</button>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
