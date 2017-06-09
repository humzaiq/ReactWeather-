var React = require('react');
var {link} = require('react-router');	

var Example = (props) => {
	return (
		<div>
		<h1 className="text-center">Examples</h1>
		<p> Here are a few locations to try out!</p>
		<ol>	
		    <li>
		    	<link to='/?location=Houston'>Houston, TX</link>
		    </li>
		    <li>
		    	<link to='/?location=Ventura'>Ventura, CA</link>
		    </li>
		</ol>
		</div>
	)
};

module.exports = Example;