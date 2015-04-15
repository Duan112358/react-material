var React = require('react');
var Router = require('react-router');

var routes = require('./route');

Router.run(routes, function (Handler) {
  React.initializeTouchEvents(true);
  React.render(<Handler/>, document.body);
});
