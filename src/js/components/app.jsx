"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Experience = require('./experience.jsx');
var TextMask = require('./textMask.jsx');
var ScrollContainer = require('./scrollContainer.jsx');

var App = React.createClass({
	render: function() {
	   return <div className="app">
                <Header />
                <TextMask idName="Journey" displayText="My Journey" />
                <ScrollContainer scrollClass="blueImg"
                    scrolledIntoViewCallback={this.handleYellowScrolledOutOfView} />
                <Experience />
                <ScrollContainer scrollClass="yellowImg" 
                    scrolledIntoViewCallback={this.handleYellowScrolledIntoView} />
                <TextMask idName="Projects" displayText="Projects" />
                <div className="fullscreenImg blue"></div>
                <div ref="yellowImg" className="fullscreenImg yellow hidden"></div>
                <Footer />
            </div>;
	},
    handleYellowScrolledIntoView: function() {
        console.log('am I here?');
        var yellowImg = ReactDOM.findDOMNode(this.refs.yellowImg);
        yellowImg.className = "fullscreenImg yellow";
    },
    handleYellowScrolledOutOfView: function() {
        console.log('am I here?');
        var yellowImg = ReactDOM.findDOMNode(this.refs.yellowImg);
        yellowImg.className = "fullscreenImg yellow hidden";
    }
});

function render() {
	ReactDOM.render(
		<App />, document.getElementById('app'));
}

render();