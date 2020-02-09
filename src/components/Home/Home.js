import React ,{Component} from 'react';
import './Home.css';
import Nav from '../Nav/Nav'
import HomeCover from "./HomeCover"
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
				<HomeCover/>
				<Categories  />
				<Photos />
				<Videos  />
				<Documents />
				<Audio  />
			</div>
		)

	}
}
export default Home;
