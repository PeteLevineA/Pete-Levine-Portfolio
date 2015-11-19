"use strict";

var React = require('react');
var ProjectTech = require('./projectTech.jsx');
var ProjectTitle = require('./projectTitle.jsx');

var ProjectNodeMirror = React.createClass({
	render: function() {
		var tech = [ 
			"NodeJS", "Browserify",
			"ReactJS", "Less", "Gulp",
			"Mocha"			
			];
		return <div className="projectProjRekt">
					<ProjectTitle title="Proj[Rekt]" />
					<ProjectTech technologies={tech} />
				</div>;
	}
});

module.exports = ProjectNodeMirror;