var React = require('react');

var Input = require('../components/Input');
var Checkbox = require('../components/Checkbox');

module.exports = React.createClass({
    displayName: 'Login',
    getInitialState: function(){
        return {
            rememberMe: false
        }
    },
    componentDidMount: function(){
    },
    onCheckboxChange: function(e){
        this.setState({
            rememberMe: e.target.checked
        });
    },
    render: function(){
        return (
            <div className="content">
                <div className="content-heading">
                </div>
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-lg-push-4 col-sm-6 col-sm-push-3 col-xs-10 col-xs-push-1">
                                <div className="card-wrap">
                                    <div className="card">
                                        <div className="card-main">
                                            <div className="card-header">
                                                <div className="card-inner">
                                                    <h1 className="card-heading">Login</h1>
                                                </div>
                                            </div>
                                            <div className="card-inner">
                                                <p className="text-center">
                                                    <span className="avatar avatar-inline avatar-lg">
                                                        <img alt="Login" src="@@static/images/users/avatar-001.jpg"/>
                                                    </span>
                                                </p>
                                                <form className="form" action="#/">
                                                    <Input type="text" name="username" id="login-username" label="Username" className="col-md-10 col-md-push-1"/>
                                                    <Input type="password" name="password" id="login-password" label="Password" className="col-md-10 col-md-push-1"/>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-md-10 col-md-push-1">
                                                                <button className="btn btn-block btn-blue waves-button waves-effect waves-light">Sign In</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Checkbox id="login-remember" name="login-remember" label="Stay signed in" className="col-md-10 col-md-push-1" onChange={this.onCheckboxChange} checked={this.state.rememberMe}/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <p className="margin-no-top pull-left"><a href="javascript:void(0)">Need help?</a></p>
                                    <p className="margin-no-top pull-right"><a href="javascript:void(0)">Create an account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
