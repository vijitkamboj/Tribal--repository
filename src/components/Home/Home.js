import React ,{Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav'
import Home_Cover from "./Home_Cover"
import Categories from './Categories';
import Photos from './Photos';
import Documents from './Documents';
import Videos from "./Videos";
import Audio from "./Audio"


class Home extends Component {


	render(){
		document.body.className = "app-back"
		return(
			<div className="home">
				<Nav />
				<Home_Cover />
				<Categories />
				<Photos />
				<Videos />
				<Documents />
				<Audio />
			</div>
		)

	}
}
export default Home;
