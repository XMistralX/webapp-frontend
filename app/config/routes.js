var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../containers/Main');
var SearchContainer = require('../containers/SearchContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component = {SearchContainer} />

    </Route>
  </Router>
);

module.exports = routes;
