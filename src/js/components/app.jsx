"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var footer = require('./footer.jsx');

var App = React.createClass({
	render: function() {
	   return <div className="app">
                <Header />
                <div className="fullscreenBlue"></div>
                <div className="fullscreenYellow"></div>
                <Footer />
            </div>;
	}
});

function render() {
	ReactDOM.render(
		<App />, document.getElementsByTagName('body')[0]);
}

render();