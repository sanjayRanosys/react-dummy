import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

export class ValidInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productNameError: 'error'
		}
	}

	changeEventHandler(e) {
		const validationFor = this.props.validationRule;

		validationFor.map((rule) => {
			console.log('=>', rule)
		});
		//switch
	}

	render() {
		return (
			<FormGroup controlId="formValidationWarning1" validationState={this.state.productNameError}>
		      <ControlLabel>Product Name</ControlLabel>
		      <FormControl type="text" placeholder="Enter Name" 
		      	name="productName" 
		      	value="" 
		      	onChange={this.changeEventHandler.bind(this)}
		      	onBlur={this.changeEventHandler.bind(this)} />
		    </FormGroup>
		);
	}
}

export class ValidInputText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productNameError: 'error'
		}
	}

	changeEventHandler(e) {
		const validationFor = this.props.validationRule;

		validationFor.map((rule) => {
			console.log('=>', rule)
		});
		//switch
	}

	render() {
		return (
			<FormGroup controlId="formValidationWarning1" validationState={this.state.productNameError}>
		      <ControlLabel>Product Name</ControlLabel>
		      <FormControl type="text" placeholder="Enter Name" 
		      	name="productName" 
		      	value="" 
		      	onChange={this.changeEventHandler.bind(this)}
		      	onBlur={this.changeEventHandler.bind(this)} />
		    </FormGroup>
		);
	}
}