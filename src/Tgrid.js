import React, { Component } from 'react';
import DataService from './dataService';
import Constant from './constant';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Grid, Row, Col } from 'react-bootstrap';
import './header.css';
import './react-bootstrap-table.css';
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap-theme.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//import products from './products'

class Tgrid extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Product Data", products: [] };
        this.priceFormatter = this.priceFormatter.bind(this);
    }

    componentDidMount() {
        const _this = this;
        DataService.fetchData(Constant.getProductsUrl ,function (res) {
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

    cellButton(cell, row, enumObject, rowIndex) {
        console.log('cell',row._id)
        return (
           <Link to={ "/edit/" + row._id }>Edit</Link>
        )
     }

    render() {
    	return(
            <div>
                <label> { this.state.title } </label>
                <BootstrapTable data={this.state.products} striped={true} hover={true}>
                    <TableHeaderColumn dataField="_id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="desc" dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField="created_date" dataFormat={this.dateFormatter}>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)}/>
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
