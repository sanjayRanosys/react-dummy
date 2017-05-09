import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid, Row, Col } from 'react-bootstrap';
import './header.css';
import './react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap-theme.css';
import products from './products'

/*const products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];*/

class Tgrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },

                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },

                {
                    "id": 3,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        };

        this.priceFormatter = this.priceFormatter.bind(this);
    }

    priceFormatter(cell, row){
      return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
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

            <BootstrapTable data={products} striped={true} hover={true}>
                  <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
              </BootstrapTable>
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
