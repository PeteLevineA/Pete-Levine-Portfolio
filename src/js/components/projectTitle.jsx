"use strict";

var React = require('react');

var ProjectTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},
	render: function() {
		return <div className="projectTitle">{this.props.title}</div>;
	}
});

module.exports = ProjectTitle;