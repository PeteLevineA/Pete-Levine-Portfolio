"use strict";

var React = require('react');

var Footer = React.createClass({
    render: function() {
        return <footer>
            © Copyright 2016 Pete Levine
            <div className="attribution">
                Icons made by 
                <a href="http://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a>,
                <a href="http://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a>, 
                <a href="http://www.freepik.com" title="Freepik">Freepik</a> 
                from 
                <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>
                is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>
            </div>
        </footer>;
    }
});

module.exports = Footer;