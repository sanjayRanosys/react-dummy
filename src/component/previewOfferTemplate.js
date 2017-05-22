import React, {PropTypes} from "react";
import {Grid, Row, Col, Button, Glyphicon} from "react-bootstrap";

class PreviewOfferTemplate extends React.Component {
	constructor(...args) {
		super(...args);

        this.state = {
            promotionId: '123456'
        }
	}

    backToForm() {
        this.props.backToFormCallback(false);
    }

	render() {
		const style = {
            center: {
               textAlign: 'center'
            },
            templateImage: {
            	width: '100%',
            	height: '100%'
            },
            borderDotted: {
                border: '4px dotted #c3c3c3'
            }
        },
        large = 12,
        mid = 6;

		return (
			<div className="previewTemplate">
				<Grid>
    				<Row className="show-grid text-center">
    					<Col md={large}>
                            <div><h3>{this.props.previewData.emailTitle}</h3></div>
                            <div>{this.props.previewData.emailText}</div>
                        </Col>
    				</Row>
                    { this.props.previewData.promotionImageAsCoupon ? (
                        <Row className="show-grid">
                            <Col md={large}>
                                <Row className="show-grid">
                                    <Col md={large}>
                                        <img src={this.props.previewData.promotionImage.url} style={style.templateImage} />
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col md={large}>
                                        <div>Valid From: Feb 12th, 2017 12:11pm</div>
                                        <div>Redeem by: Sep 15th, 2020 11:59pm</div>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col md={large}>
                                        {this.props.previewData.promotionTerms}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="show-grid">
                            <Col md={large}>
                                <Row className="show-grid" style={style.borderDotted}>
                                    <Col md={large}>
                                        <Row className="show-grid">
                                            <Col md={mid}><img src={this.props.previewData.supportingImage.url} style={style.templateImage} /></Col>
                                            <Col md={mid}>
                                                <div><h3>{this.props.previewData.promotionTitle}</h3></div>
                                                <div>{this.props.previewData.promotionSubTitle}</div>
                                                <div>
                                                    <div>Valid From: Feb 12th, 2017 12:11pm</div>
                                                    <div>Redeem by: Sep 15th, 2020 11:59pm</div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col md={mid}><img src={this.props.previewData.logoImage.url} style={style.templateImage} /></Col>
                                            <Col md={mid}>
                                                <div>{this.props.previewData.promotionTerms}</div>
                                                <div>Promotion ID: {this.state.promotionId}</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="show-grid text-center">
                                    <Col md={large}>Valid at Bob's Bugers Northside</Col>
                                </Row>
                            </Col>
                        </Row>
                    )}
    				<Row className="show-grid" style={style.center}>
                        <Col md={large}>
                            <div>
                                <Button bsStyle="primary" bsSize="large">Redeem</Button>
                            </div>
                            { this.props.previewData.promotionImageAsCoupon &&
                                <div>Promotion ID: {this.state.promotionId}</div>
                            }
                        </Col>
    				</Row>
                    <hr />
                    <Row className="show-grid text-center">
                        <Col md={large}>
                            <div>POWERED BY</div>
                            <div>BLOOM <small>WI-FI</small></div>
                            <div><a href="#" target="_blank">View in browser</a></div>
                        </Col>
                    </Row>
    			</Grid>

                <div className="text-center">
                    <Button bsStyle="primary" onClick={this.backToForm.bind(this)}><Glyphicon glyph="arrow-left" /> Back to Form</Button>
                </div>
			</div>
		);
	}
}

export default PreviewOfferTemplate;