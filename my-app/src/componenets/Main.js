import React, { Component } from 'react'
import axios from 'axios';
import DrinkCard from './DrinkCard';

export class Main extends Component {

	constructor(props){
		super(props);
		this.state = {
			url: process.env.REACT_APP_SERVER_URL,
			dataOfDrinks: [],
			showDataOfDrinks: false,
		};
	};

	componentDidMount = () => {
		axios.get(`${this.state.url}/drinks`).then((res)=>{
			this.setState({
				dataOfDrinks: res.data,
				showDataOfDrinks: true
			})
		})
	}

	addToFavorite = (obj) => {
		axios.post(`${this.state.url}/drink`, obj);
	}
	
	render() {
		return (
			<>
			{
				this.state.showDataOfDrinks &&
				<DrinkCard
				dataOfDrinks={this.state.dataOfDrinks}
				/>
			}
				
			</>
		)
	}
}

export default Main
