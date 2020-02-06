import React ,{Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav'
import Home_Cover from "./Home_Cover"
import Categories from './Categories';


class Home extends Component {


	render(){
		document.body.className = "app-back"
		return(
			<div className="home">
				<Nav />
				<Home_Cover />
				<Categories />
			</div>
		)

	}
}
export default Home;
