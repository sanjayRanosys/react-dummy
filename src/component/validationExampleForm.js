import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { ValidInput, ValidInputText } from './validationHandler';

class ValidationExampleForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			formValid: false,
			validationRule: {
				require: true,
				min: true,
				max: true
			}
		};
	}

	componentDidMount() {
		/* after component mount */
	}

	changeEventHandler(key, value, validState) {
		this.setState({
			key: value,
			formValid: validState
		});
	}

	render() {
		return (
			<div>
				<Form horizontal>
					<ValidInput validationRule={this.state.validationRule} />
					<ValidInputText validationRule={this.state.validationRule} />
				</Form>
			</div>
		);
	}
}

export default ValidationExampleForm;