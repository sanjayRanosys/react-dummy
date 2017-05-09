import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css';// Put any other imports below so that CSS from your
import 'bootstrap/dist/css/bootstrap-theme.css';// components takes precedence over default styles.

class Head extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="/about">About</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
        <div className="redMe">I am in red.</div>
      </div>
    );
  }
}

export default Head;