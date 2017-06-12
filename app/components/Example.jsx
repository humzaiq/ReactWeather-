var React = require('react');
var {Link} = require('react-router');	

var Example = (props) => {
	return (
		<div>
		<h1 className="text-center page-title">Examples</h1>
		<p> Here are a few locations to try out!</p>
		<ul>	
		    <li>
		    	<Link to='/?location=Houston'>Houston, TX</Link>
		    </li>
		    <li>
		    	<Link to='/?location=Ventura'>Ventura, CA</Link>
		    </li>
		</ul>
		</div>
	)
};

module.exports = Example;