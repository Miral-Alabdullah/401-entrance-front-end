import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';

export class Header extends Component {
	render() {
		return (
			<>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">Drinks</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/Favorite">Favorite</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		)
	}
}

export default Header
