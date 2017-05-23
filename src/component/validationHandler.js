import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import {requireHandler, minHandler, maxHandler, patternHandler} from '../utilities/validationMethods'

export class ValidInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textInputError: null,
			textInput: ''
		}
	}

	changeEventHandler(e) {
		const {require, min, max, pattern} = this.props.validationRule,
			self = this,
			value = e.target.value;

		let isRequire = (require) ? requireHandler(value) : true,
			isMin = (min) ? minHandler(value, min) : true,
			isMax = (max) ? maxHandler(value, max) : true,
			isPattern = (pattern) ? patternHandler(value, pattern) : true;

		if (!isRequire || !isMin || !isMax || !isPattern) {
			this.setState({
				textInputError: 'error',
				textInput: value
			}, function() {
				this.props.onChange(self.props.stateKey, value, false)
			});
		} else {
			this.setState({
				textInputError: 'success',
				textInput: e.target.value
			}, function() {
				this.props.onChange(self.props.stateKey, value, true)
			});
		}
	}

	render() {
		let inputField = (<FormControl type="text" placeholder={this.props.placeholder}
		      	value={this.state.textInput}
		      	onChange={this.changeEventHandler.bind(this)}
		      	onBlur={this.changeEventHandler.bind(this)} />);

		if (this.props.inputType === 'textarea') {
			inputField = (<FormControl type="text" placeholder={this.props.placeholder}
				componentClass="textarea"
		      	value={this.state.textInput}
		      	onChange={this.changeEventHandler.bind(this)}
		      	onBlur={this.changeEventHandler.bind(this)} />);
		} else if (this.props.inputType === 'email') {
			inputField = (<FormControl type="email" placeholder={this.props.placeholder}
		      	value={this.state.textInput}
		      	onChange={this.changeEventHandler.bind(this)}
		      	onBlur={this.changeEventHandler.bind(this)} />);
		}

		return (
			<FormGroup controlId="formValidationWarning1" validationState={this.state.textInputError}>
			    {inputField}
			    <FormControl.Feedback />
		    </FormGroup>
		);
	}
}

export class ValidTextArea extends React.Component {
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