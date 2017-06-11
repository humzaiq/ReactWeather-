var React = require('react');

var About = (props) => {
	return (
			<div className="columns medium6 large4 small-centered">
			<h1 className="text-center page-title">About</h1>
			<p>Weather App built with React</p>
			<ul>
				<li>
					<a href="http://humzaiqbal.com">View other Projects</a>
				</li>
				<li>
					<a href="https://github.com/humzaiq/ReactWeather-">View Sourcecode</a>
				</li>
				<li>
					<a href="http://openweathermap.com">Open Weather Map</a>
				</li>
			</ul>
		</div>
	)
};

module.exports = About;