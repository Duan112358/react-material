var React = require('react');
var classNames = require('classnames');

var REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(value) {
	return REGEXP_EMAIL.test(value);
}

module.exports = React.createClass({
	displayName: 'EmailInputGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		required: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		requiredMessage: React.PropTypes.string,
		invalidMessage: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			requiredMessage: 'Email address is required',
			invalidMessage: 'Please enter a valid email address'
		};
	},
	getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e);
	},
	handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput(value) {
		var newState = {
			isValid: true
		};
		if ((value.length && !validateEmail(value)) || (!value.length && this.props.required)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = (
				<div className="form-validation is-invalid">
					{this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage}
				</div>
			);
		}
		var formGroupClass = classNames('form-group', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? <label className="form-label" htmlFor="inputEmail">{this.props.label}</label> : null;

		return (
			<div className={formGroupClass}>
				{componentLabel}
				<input onChange={this.handleChange} onBlur={this.handleBlur} value={this.props.value} type="email" className="form-input" placeholder="Enter email" id="inputEmail" />
				{validationMessage}
			</div>
		);
	}
});
