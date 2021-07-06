import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class DrinkCard extends Component {
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
										<Button variant="primary" onclick={()=>{this.props.addToFavorite(obj)}}>Add-to-favorite</Button>
									</Card.Body>
								</Card>
							</div>						
						)
					})}
			</div>

		)
	}
}

export default DrinkCard
