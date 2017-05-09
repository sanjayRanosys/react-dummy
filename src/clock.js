import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//function component that use Clock state 
function FormatDate(props) {
	return(
		<div> Current time is... {props.date.toLocaleTimeString()}</div>
	);
}

class Clock extends Component {
	//this constructor function will call first after class load
	constructor(props) {
		console.log('In constructor');
		super(props);
		this.state = {date: new Date()};
	}

	//this componentDidMount function will call after after element render (after render function call)
	componentDidMount() {
		console.log('In componentDidMount');
		const _this = this;
		//setInterval function using Arrow function
		/*this.timerID = setInterval(
			() => this.tick(),
			1000
		);*/

		//setInter function using normal callbakc function
		this.timerID = setInterval(function() {
			_this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	//this render function call after constructor call for render elements
	render() {
		console.log('In render')
		return (
			<div>
				<FormatDate date={this.state.date} />
			</div>
		);
	}
}

//function tick() {
/*ReactDOM.render(
	<Clock />,
	document.getElementById('clock')
);*/
//}

//setInterval(tick, 1000)

export default Clock;