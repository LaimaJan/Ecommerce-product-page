import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

function App() {
	const [appWidth, setAppWidth] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [sideNavOpen, setSideNavOpen] = useState(false);

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

	const toggleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	const toggleSideNav = () => {
		setSideNavOpen(!sideNavOpen);
	};

	return (
		<div className="App" ref={elementRef}>
			<SideNavBar toggleSideNav={sideNavOpen} closeSideNav={toggleSideNav} />
			<Navbar toggleCartOpen={toggleCartOpen} toggleSideNav={toggleSideNav} />
			<ShoppingCart toggleCartOpen={isCartOpen} />
			<div className="app-content"></div>
		</div>
	);
}

export default App;
