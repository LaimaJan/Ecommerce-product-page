// import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import PopUpNavbar from './components/PopUpNavbar/PopUpNavbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	return (
		<div className="App">
			{/* menu button before logo, when width is 1440px the menu button doesnt show up. 
      When width is < 375px the button shows up before the logo, on click the nav bar from left appears. */}
			<PopUpNavbar />
			<Navbar />
			<ShoppingCart />
		</div>
	);
}

export default App;
