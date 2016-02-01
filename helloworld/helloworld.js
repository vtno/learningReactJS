var component = React.createClass({
	render: function(){
		return(
			<h2>Hi my name is Tino</h2>
			<h2>Hi my name is Tony</h2>
			<h2>Hi my name is Teemo</h2>
			<h2>Hi my name is Tommy</h2>
		);
	}
});
ReactDOM.render(<component />, document.getElementById('example'));

/*ReactDOM.render(
	<h1>Hello world!</h1>,
	document.getElementById('example')
);*/