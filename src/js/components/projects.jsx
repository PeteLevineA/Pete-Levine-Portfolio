"use strict";

var React = require('react');
var Project = require('./project.jsx');

var Projects = React.createClass({
    
	render: function () {
        var techNodeMirror = [ 
			"NodeJS", "Browserify",
			"ReactJS", "Less", "Gulp",
			"Mocha"
			];
        var techProjRekt = [ 
			"NodeJS", "Express", "MongoDB", 
			"Mongoose", "Browserify",
			"ReactJS", "Less", "Gulp",
			"Mocha"
			];
		return <section className="projects">
				    <Project title="Proj[Rekt]" tech={techProjRekt}
                        videoSrc="video/projRekt.mp4" videoType="video/mp4"
                        projectLink="https://github.com/PeteLevineA/projrekt"
                        posterLink="./images/projRektSS.jpg" />
                    <Project title="Node Mirror Pi" tech={techNodeMirror}
                        videoSrc="video/NodePiMirror.mp4" videoType="video/mp4"
                        projectLink="https://github.com/PeteLevineA/Node-RaspberryPi-Mirror"
                        posterLink="./images/piMirrorSS.jpg" />
				</section>;
	}
});

module.exports = Projects;