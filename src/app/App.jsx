import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ItemDescription from './components/ItemDescription/ItemDescription';
import ItemPictures from './components/ItemPictures/ItemPictures';

import './App.css';

function App() {
	const [appWidth, setAppWidth] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [sideNavOpen, setSideNavOpen] = useState(false);
	const [amountOfItemsInCart, setAmountOfItemsInCart] = useState(0);

	const itemToShoppingCart = (amount) => {
		setAmountOfItemsInCart(amount);
	};

	const removeItemsFromCart = () => {
		setAmountOfItemsInCart(0);
	};

	const elementRef = useRef(null);

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
			<Navbar
				toggleCartOpen={toggleCartOpen}
				toggleSideNav={toggleSideNav}
				items={amountOfItemsInCart}
			/>
			<ShoppingCart
				toggleCartOpen={isCartOpen}
				items={amountOfItemsInCart}
				removeItemsFromCart={removeItemsFromCart}
			/>

			<div className="app-content">
				<ItemPictures />
				<ItemDescription getAmountOfItems={itemToShoppingCart} />
			</div>
		</div>
	);
}

export default App;
