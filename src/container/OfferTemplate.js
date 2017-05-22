import React, {PropTypes} from "react";
import OfferTemplateForm from './../component/offerTemplateForm';

class OfferTemplate extends React.Component {
	constructor(...args) {
		super(...args);
	}

	render() {
		return (
			<OfferTemplateForm />
		);
	}
}

export default OfferTemplate;