"use strict";

var React = require('react');

var ProjectTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string
	},
	render: function() {
		return <span className="projectTitle">{this.props.title}</span>;
	}
});

module.exports = ProjectTitle;