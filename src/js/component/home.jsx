import React from "react";
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Footer from './Footer.jsx';
import DivCard from "./DivCard.jsx";

const Home = () => {
	return (
		<div>
			<div><Navbar /></div>
			<div style={{ margin: 20 }}>
				<Jumbotron />
				<div className="container">
					<DivCard />
				</div>
			</div>
			<div><Footer /></div>
		</div>
	);
};

export default Home;
