import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './header';

import AppRoute from './route';
import logo from './logo.svg';
import './index.css';


function formatName(user) {
	if (user) {
		return user.firstName +' '+ user.lastName;
	}
	return 'Stranger';
}

//simple functional example of component creation
/*function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}*/

//class example of component creation
class Welcome extends Component {
	render() {
		return <h1>Hello, {this.props.name}.</h1>;
	}
}

const welMessage = <Welcome name="Sara" />;

class Wel extends Component {
	render() {
		return (
			<div>
				<Welcome name="a1" />
				<Welcome name="a2" />
				<Welcome name="a3" />
				<Welcome name="a4" />
			</div>
		);
	}
};

const user = {
	firstName: 'Sanjay',
	lastName: 'Verma'
};

//example for create element by react createElement function
const footerStyle = { textAlign: 'center' };
const element = (
	<footer style={footerStyle}>
		<img className="App-logo fullWidth" src={logo}></img>
		<span className="fullWidth">Hello, {formatName(user)}!</span>
	</footer>
);

ReactDOM.render(
	<AppRoute />,
	document.getElementById('root')
);

/*ReactDOM.render(
	<Wel />,
	document.getElementById('subhead')
);*/

ReactDOM.render(
	element,
	document.getElementById('footer')
);