import React, { Component } from 'react';
import axios from 'axios';
import FavoriteDrink from './FavoriteDrink';
import UpdateFormModal from './UpdateFormModal';

export class Favorite  extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: process.env.REACT_APP_SERVER_URL,
			dataOfFavDrinks: [],
			showFavDataOfDrinks: false,
			idDrink: '',
			showTheModal: false,
			drinkName:'',
			drinkImage:'',
		};
	};

	componentDidMount = () => {
		axios.get(`${this.state.url}/drink`).then((res)=>{
			this.setState({
				dataOfFavDrinks: res.data,
				showFavDataOfDrinks: true
			})
		})
	}

	deleteDrink = (idDrink) => {
		axios.delete(`${this.state.url}/drink/${idDrink}`).then((res)=>{
			this.setState({
				dataOfFavDrinks: res.data,
				showFavDataOfDrinks: true
			})
		})
	}

	updatedName = (drinkName) => {this.setState({drinkName: drinkName})}
	updatedImage = (drinkImage) => {this.setState({drinkImage: drinkImage})}

	showModal = (obj) => {
		this.setState({
			showTheModal: true,

		})
	}


	formsubmitting = (e) =>{
		e.preventDefault();
		const data = {
			drinkName: this.state.drinkName,
			drinkImage: this.state.drinkImage
		}
		axios.put(`${this.state.url}/drink/${this.state.idDrink}`).then((res)=>{
			this.setState({
				dataOfFavDrinks: res.data,
				showFavDataOfDrinks: true
			})
		})
	}

	render() {
		return (
			<>
			{
				this.state.showFavDataOfDrinks && 
				<FavoriteDrink
				dataOfFavDrinks={this.state.dataOfFavDrinks}
				deleteDrink={this.deleteDrink}
				showModal={this.showModal}
				/>
			}

			{
				this.state.showTheModal && 
				<UpdateFormModal
				formsubmitting={this.formsubmitting}
				drinkName={this.state.drinkName}
				drinkImage={this.state.drinkImage}
				/>
			}
				
			</>
		)
	}
}

export default Favorite 
