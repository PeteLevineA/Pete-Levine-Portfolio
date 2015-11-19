"use strict";

var React = require('react');

var Project = React.createClass({
	render: function () {
		return <div className="project">
				{this.props.children}
				</div>;
	}
});

module.exports = Project;