import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class FavoriteDrink extends Component {
	render() {
		return (

			<div>
				{

					this.props.dataOfDrinks.map((obj, index) => {
						return(
							<div key={index}>
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src={obj.strDrinkThumb}/>
									<Card.Body>
										<Card.Title>{obj.strDrink}</Card.Title>
										<Button variant="primary" onclick={()=>{this.props.deleteDrink(obj.idDrink)}}>Delete</Button>
										<Button variant="primary" onclick={()=>{this.props.showModal(obj)}}>Update</Button>
									</Card.Body>
								</Card>
							</div>						
						)
					})}
			</div>
		)
	}
}

export default FavoriteDrink
