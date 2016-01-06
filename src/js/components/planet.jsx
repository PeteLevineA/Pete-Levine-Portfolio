"use strict";

var React = require('react');
var ScrollContainer = require('./scrollContainer.jsx');

var Planet = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        subTitle: React.PropTypes.string,
        jobTitle: React.PropTypes.string,
        iconImg: React.PropTypes.string
    },
    render: function() {
        return <ScrollContainer scrollClass="planet">
                <div className="dateTitle">{this.props.subTitle}</div>
                <div className="icon"><img src={this.props.iconImg} title={this.props.title} /></div>
                <div className="titleDesc">
                    <div className="companyTitle">{this.props.title}</div>
                    <div className="jobTitle">{this.props.jobTitle}</div>
                    <div className="description">
                        {this.props.children}
                    </div>
                </div>
            </ScrollContainer>;
    }
});

module.exports = Planet;