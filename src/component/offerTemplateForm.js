import React, {PropTypes} from "react";
import Preview from './previewOfferTemplate';
import {Grid, Form, FormControl, FormGroup, ControlLabel, Button, ButtonToolbar, Checkbox, Col, Row, Radio, HelpBlock} from "react-bootstrap";

class OfferTemplateForm extends React.Component {
	constructor(...args) {
		super(...args);

		/*this.state = {
			emailSubject: '',
			isPreviewEnable: false,
			previewData : {
				emailTitle: '',
				emailText: '',
				promotionImageAsCoupon: false,
				promotion: {
					promotionTitle: '',
					promotionSubTitle: '',
					promotionImage: {
						file: '',
						url: ''
					},
					supportingImage: {
						file: '',
						url: ''
					},
					promotionTerms: ''
				},
				logoImage: {
					file: '',
					url: ''
				},
				location: []
			}
		};*/

		this.state = {
			emailSubject: '',
			isPreviewEnable: false,
			emailTitle: '',
			emailText: '',
			promotionImageAsCoupon: true,
			promotionTitle: '',
			promotionSubTitle: '',
			promotionImage: {
				file: '',
				url: ''
			},
			supportingImage: {
				file: '',
				url: ''
			},
			promotionTerms: '',
			logoImage: {
				file: '',
				url: ''
			},
			location: ''
		};

		this.handleChangeEvent = this.handleChangeEvent.bind(this);
		this.previewTemplate = this.previewTemplate.bind(this);
	}

	handleSubmit() {
		console.log('I will handle submit');
	}

	promotionToggle() {
		const self = this;
		this.setState({
			promotionImageAsCoupon : !self.state.promotionImageAsCoupon
		});
	}

	previewTemplate(templatePreviewState) {
		if (templatePreviewState === null || templatePreviewState === "") {
			templatePreviewState = false;
		}

		this.setState({
			isPreviewEnable: templatePreviewState
		});
	}

//user is proper way
	handleChangeEvent(e, key, type) {
		let value = e.target.value;

		//get multis-select element selected values 
		if (type && type === 'multiselect') {
			value = [].filter.call(e.target.options, function (o) {
		      return o.selected;
		    }).map(function (o) {
		      return o.value;
		    });
	    }

	    this.setState({
			[key]: value
		});
	}

	handleImageChangeEvent(e, key) {
		e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
  			[key]: {
		        file: file,
		        url: reader.result
	        }
	      });
	    }

	    reader.readAsDataURL(file)
	}

	render() {
		const small = 2,
			mid = 8,
			large = 12;

		return (

			<div>
				{this.state.isPreviewEnable ? (
					<Preview backToFormCallback={this.previewTemplate} previewData={this.state} /> 
				) : (
					<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
						<FormGroup>
	                    	<ControlLabel>Email Subject:</ControlLabel>	                            
	                        <FormControl
	                            type="text"
	                            placeholder="A gift for you"
	                            value={this.state.emailSubject}
	                            onChange={(e)=>this.handleChangeEvent(e, 'emailSubject')}
	                        />	                           
	                    </FormGroup>
	                    <hr />
	                    <FormGroup>
	                    	<ControlLabel>Email Title:</ControlLabel>
	                        <FormControl
	                            type="text"
	                            placeholder="We Miss You!"
	                            value={this.state.emailTitle}
	                            onChange={(e)=>this.handleChangeEvent(e, 'emailTitle')}
	                        />
	                    </FormGroup>
	                    <FormGroup>
	                    	<ControlLabel>Email Text:</ControlLabel>
	                        <FormControl 
	                        	componentClass="textarea"
	                        	value={this.state.emailText}
	                        	placeholder="We notic that you haven't be back in a while. We wanted to send you this deal so we can see you again!" 
	                        	onChange={(e)=>this.handleChangeEvent(e, 'emailText')} />
	                    </FormGroup>
	                    <hr />
	                    <FormGroup>
		                    <Checkbox onClick={this.promotionToggle.bind(this)} checked={this.state.promotionImageAsCoupon ? true : false}>
						      <strong>Us Image as Coupon</strong>
						    </Checkbox>
						    <HelpBlock><small>Allows you to customize the look and text of your promotion. Email will still contain experation and terms.</small></HelpBlock>
					    </FormGroup>
					    <FormGroup>
							<ControlLabel>Promotion Image (max-width: 600px):</ControlLabel>
							<FormControl
								disabled={ !this.state.promotionImageAsCoupon }
	                            type="file"
	                            onChange={(e)=>this.handleImageChangeEvent(e, 'promotionImage')} 
	                        />
						</FormGroup>
						<hr />
					    <FormGroup>
	                    	<ControlLabel>Promotion Title:</ControlLabel>	                            
	                        <FormControl
	                        	disabled={ this.state.promotionImageAsCoupon }
	                            type="text"
	                            placeholder="Free Appetizer"
	                            value={this.state.promotionTitle}
	                            onChange={(e)=>this.handleChangeEvent(e, 'promotionTitle')}
	                        />
	                    </FormGroup>
	                    <FormGroup>
	                    	<ControlLabel>Promotion Sub Title (optional):</ControlLabel>	                            
	                        <FormControl
	                        	disabled={ this.state.promotionImageAsCoupon }
	                            type="text"
	                            placeholder="Will purhcase of Entree"
	                            value={this.state.promotionSubTitle}
	                            onChange={(e)=>this.handleChangeEvent(e, 'promotionSubTitle')}
	                        />	                            
	                    </FormGroup>
	                    <FormGroup>
							<ControlLabel>Supporting Image (max-width: 200px):</ControlLabel>
							<FormControl
								disabled={ this.state.promotionImageAsCoupon }
	                            type="file"
	                            onChange={(e)=>this.handleImageChangeEvent(e, 'supportingImage')} />
						</FormGroup>
						<FormGroup>
	                    	<ControlLabel>Promotion Terms:</ControlLabel>
	                        <FormControl 
	                        componentClass="textarea"
	                        value={this.state.promotionTerms}
	                        placeholder="Limit one per customer. Must present this deal or coupon code to staff member prior to redemption."
	                        onChange={(e)=>this.handleChangeEvent(e, 'promotionTerms')}
	                    />
	                    </FormGroup>
	                    <FormGroup>
							<ControlLabel>Logo Image (max-width: 150px):</ControlLabel>
							<FormControl
								disabled={ this.state.promotionImageAsCoupon }
	                            type="file"
	                            onChange={(e)=>this.handleImageChangeEvent(e, 'logoImage')} />
						</FormGroup>
						<FormGroup>
	                    	<ControlLabel>Location:</ControlLabel>	                            
	                        <FormControl componentClass="select" multiple value={this.state.location} onChange={(e)=>this.handleChangeEvent(e, 'location', 'multiselect')}>
								<option value="location1">Location 1</option>
								<option value="location2">Location 2</option>
								<option value="location3">Location 3</option>
								<option value="location4">Location 4</option>
								<option value="location5">Location 5</option>
								<option value="location6">Location 6</option>
							</FormControl>
	                    </FormGroup>
	                    <FormGroup>
	                    	<ButtonToolbar>
		                		<Button type="button" bsStyle="primary" onClick={(e)=>this.previewTemplate(true)}>
							      Preview
							    </Button>
			                    <Button bsStyle="success" type="submit">
							      Submit
							    </Button>
						    </ButtonToolbar>
					    </FormGroup>
					</Form>
				)}
			</div>
		);
	}
}

export default OfferTemplateForm;
