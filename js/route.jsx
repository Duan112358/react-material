var React = require('react');
var Router = require('react-router');

var App = require('./layout/index');

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.DefaultRoute  handler={require('./pages/index')} />
		<Router.Route name="404"  handler={require('./pages/404')} />
		<Router.Route name="500"  handler={require('./pages/500')} />
		<Router.Route name="affix-full"  handler={require('./pages/affix-full')} />
		<Router.Route name="cards"  handler={require('./pages/cards')} />
		<Router.Route name="dropdowns"  handler={require('./pages/dropdowns')} />
		<Router.Route name="login"  handler={require('./pages/login')} />
		<Router.Route name="collapse"  handler={require('./pages/collapse')} />
		<Router.Route name="modals"  handler={require('./pages/modals')} />
	</Router.Route>
);

module.exports = routes;
