"use strict";

var React = require('react');
var ProjectTech = require('./projectTech.jsx');
var ProjectTitle = require('./projectTitle.jsx');

var ProjectProjRekt = React.createClass({
	render: function() {
		var tech = [ 
			"NodeJS", "Express", "MongoDB", 
			"Mongoose", "Browserify",
			"ReactJS", "Less", "Gulp",
			"Mocha"
			];
		return <div className="projectProjRekt">
					<ProjectTitle title="Proj[Rekt]" />
					<ProjectTech technologies={tech} />
				</div>;
	}
});

module.exports = ProjectProjRekt;