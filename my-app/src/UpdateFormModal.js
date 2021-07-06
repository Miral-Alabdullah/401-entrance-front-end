import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export class UpdateFormModal extends Component {

	constuctor(props){
		super(props);
		this.state = {
			show: false
		}
	}

	closingTheModal = () => {
		this.setState({
			show: false,
		})
	}

	render() {
		return (
			<div>

				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>Update The Drink Information</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form onSubmit={this.props.formsubmitting}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Enter The Name</Form.Label>
								<Form.Control type="text" placeholder="name" defaultValue={this.props.drinkImage} onChange={(e)=>{this.props.updatedName(e.target.value)}}/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Insert The Image URL</Form.Label>
								<Form.Control type="text" placeholder="image" defaultValue={this.props.drinkName} onChange={(e)=>{this.props.updatedImage(e.target.value)}}/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onHide={this.closingTheModal}>Close</Button>
					</Modal.Footer>
				</Modal.Dialog>

			</div>
		)
	}
}

export default UpdateFormModal
