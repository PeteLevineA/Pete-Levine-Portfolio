"use strict";

var React = require('react');
var ProjectTech = require('./projectTech.jsx');
var ProjectTitle = require('./projectTitle.jsx');
var ScrollContainer = require('./scrollContainer.jsx');

var ProjectProjRekt = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        tech: React.PropTypes.array,
        videoSrc: React.PropTypes.string,
        videoType: React.PropTypes.string,
        projectLink: React.PropTypes.string,
        posterLink: React.PropTypes.string
    },
	render: function() {
		
		return <ScrollContainer scrollClass="project">
                    <div className="projectDetails">
                        <ProjectTitle title={this.props.title} />
                        <ProjectTech tech={this.props.tech} />
                    </div>
                    <div className="projectVideo">
                        <video autoPlay="autoplay" loop="loop" muted="muted" poster={this.props.posterLink}>
                            <source src={this.props.videoSrc} type={this.props.videoType} />
                        </video>
                        <div className="patternOverlay"></div>
                        <div className="colorOverlay"></div>
                        <div className="dataOverlay">
                            <div className="githubLink">
                                <a href={this.props.projectLink} className="github" 
                                    title="Project on Github">
                                    <img title="Project on Github" src='./images/github.svg' />
                                </a>
                            </div>
                            <div className="gitTitle">
                                View my source on Github!
                            </div>
                        </div>
                    </div>
				</ScrollContainer>;
	}
});

module.exports = ProjectProjRekt;