import React from 'react';
import DataService from './dataService';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap-theme.css';

const url = "https://accedo-video-app-api.herokuapp.com/addProduct";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {productName: '', price: '20', desc: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const val = event.target.value;
		const name = event.target.name;
		this.setState({ 
			[name]: val 
		});

		//console.log(this.state)
	}

	handleSubmit(event) {
		alert('Name submitted : '+ this.state.productName + ' Description ' + this.state.desc + ' and Drop Down is ' + this.state.price);
		const data = {
			'name': this.state.productName,
			'desc': this.state.desc,
			'price': this.state.price
		};

		DataService.saveData(url, data ,function (res) {
            res
            .then(function(json) {
                console.log('Json', json)
                /*_this.setState({
                    products: json
                })*/
                alert('Data saved successfully');
            })
            .then(function(err) {
            	console.log('err',err);
            });
        });
		event.preventDefault();
	}

	render() {
		return (
			<Form horizontal onSubmit={this.handleSubmit}>
				<FieldGroup
			      id="formControlsText"
			      type="text"
			      label="Product Name"
			      placeholder="Enter Name"
			      name="productName"
			      value={this.state.productName} 
			      onChange={this.handleChange}
			    />

			    <FormGroup controlId="formControlsTextarea">
			      <ControlLabel>Product Description</ControlLabel>
			      <FormControl componentClass="textarea" placeholder="Description here.." name="desc" value={this.state.desc} onChange={this.handleChange} />
			    </FormGroup>

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Product Price</ControlLabel>
			      <FormControl componentClass="select" placeholder="Select Price" name="price" value={this.state.price} onChange={this.handleChange}>
			        <option value="10">$10</option>
		            <option value="20">$20</option>
		            <option value="30">$30</option>
		            <option value="40">$40</option>
		            <option value="50">$50</option>
		            <option value="60">$60</option>
		            <option value="70">$70</option>
		            <option value="80">$80</option>
		            <option value="90">$90</option>
		            <option value="100">$100</option>
			      </FormControl>
			    </FormGroup>
				
				<FormGroup>
					<Button type="submit">
				      Submit
				    </Button>
			    </FormGroup>
			</Form>
		);
	}
}

export default NameForm;