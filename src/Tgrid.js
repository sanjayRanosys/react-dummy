import React, { Component } from 'react';
import DataService from './dataService';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid, Row, Col } from 'react-bootstrap';
import './header.css';
import './react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap-theme.css';
//import products from './products'

const url = 'https://accedo-video-app-api.herokuapp.com/getProducts';

class Tgrid extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Product Data", products: [] };
        this.priceFormatter = this.priceFormatter.bind(this);
    }

    componentDidMount() {
        const _this = this;
        DataService.fetchData(url ,function (res) {
            res.then(function(json) {
                //console.log('Json', json)
                _this.setState({
                    products: json
                })
            })
        });
    }

    priceFormatter(cell, row){
      return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    dateFormatter(date) {
        return new Date(date.toString()).toLocaleTimeString();
    }

    render() {
    	return(
    		/*<div>
    			<Grid>
                    <Row className="show-grid">
                      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                    </Row>

                    <Row className="show-grid">
                      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                    </Row>
                  </Grid>
    		</div>*/
            <div>
                <label> { this.state.title } </label>
                <BootstrapTable data={this.state.products} striped={true} hover={true}>
                    <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="desc" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="created_date" dataFormat={this.dateFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
    	);
    }
}

class TableRow extends Component {
	render() {
		return (
			<tr>
				<td>{ this.props.data.id }</td>
				<td>{ this.props.data.name }</td>
				<td>{ this.props.data.age }</td>
			</tr>
		);
	}
}

export default Tgrid;
