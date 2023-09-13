import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import PopUpNavbar from './components/PopUpNavbar/PopUpNavbar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	const [appWidth, setAppWidth] = useState(0);
	const elementRef = useRef(null);
	console.log(appWidth);

	useEffect(() => {
		const handleResize = () => {
			setAppWidth(elementRef.current.offsetWidth);
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="App" ref={elementRef}>
			{/* menu button before logo, when width is 1440px the menu button doesnt show up. 
      When width is < 375px the button shows up before the logo, on click the nav bar from left appears. */}
			<PopUpNavbar />
			<Navbar />
			<ShoppingCart />
		</div>
	);
}

export default App;
