import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { ValidInput, ValidInputText } from './validationHandler';

class ValidationExampleForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			productName: '',
			productDesription: '',
			email: '',
			formValid: false
		};

		this.changeEventHandler = this.changeEventHandler.bind(this);
	}

	componentDidMount() {
		/* after component mount */
	}

	changeEventHandler(key, value, validState) {
		this.setState({
			key: value,
			formValid: validState
		});
		console.log('=>', key, value, validState)
	}

	render() {
		const firstFieldRule = { require: true, min:2, max:6, pattern:/^[a-zA-Z\s]+$/ },
			emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return (
			<div>
				<Form horizontal>
					<ValidInput validationRule={ firstFieldRule } 
						stateKey="productName" 
						labelText="Product Name" 
						inputType="text"
						placeholder="Product Name"
						onChange={this.changeEventHandler} />
					<ValidInput 
						validationRule={ { require: true } } 
						stateKey="productDesription" 
						labelText="Product Description" 
						inputType="textarea"
						placeholder="Product Description"
						onChange={this.changeEventHandler} />
					<ValidInput 
						validationRule={ { require: true, pattern: emailPattern } } 
						stateKey="email" 
						labelText="Product Description" 
						inputType="email"
						placeholder="Email"
						onChange={this.changeEventHandler} />
				</Form>
			</div>
		);
	}
}

export default ValidationExampleForm;