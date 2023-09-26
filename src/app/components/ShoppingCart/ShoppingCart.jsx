import PropTypes from 'prop-types';
import './ShoppingCart.css';
import SneakerImg from '../../../images/image-product-1.jpg';
import { useState, useEffect } from 'react';

export default function ShoppingCart({
	toggleCartOpen,
	items,
	removeItemsFromCart,
}) {
	const [itemsInCart, setItemsInCart] = useState(0);

	useEffect(() => {
		setItemsInCart(items);
	}, [items]);

	const sneakerEndPrice = 125 * itemsInCart;

	const cart = {
		sneakersPriceOnSale: 125,
		sneakersAmount: itemsInCart,
		sneakersEndPrice: sneakerEndPrice.toFixed(2),
	};

	// const removeItemsFromCart = () => {
	// 	setItemsInCart(0);
	// };

	return (
		<>
			<div
				className={`shopping-cart-container ${toggleCartOpen ? 'show' : ''}`}
			>
				<div className="cart-naming">
					<p>Cart</p>
				</div>
				{itemsInCart ? (
					<>
						<div className="cart-items">
							<div className="item">
								<img src={SneakerImg} alt="sneakers-image" />
								<div className="item-description">
									<p>Fall Limited Edition Sneakers</p>
									<div className="item-price">
										<p className="item-cost">${cart.sneakersPriceOnSale}</p>
										<p>x</p>
										<p className="item-amount">{cart.sneakersAmount}</p>
										<p className="item-end-price">${cart.sneakersEndPrice}</p>
									</div>
								</div>
								<div className="delete-icon" onClick={removeItemsFromCart}>
									<svg
										width="14"
										height="16"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
									>
										<defs>
											<path
												d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
												id="a"
											/>
										</defs>
										<use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
									</svg>
								</div>
							</div>
						</div>
						<div className="checkout-button-container">
							<button>Checkout</button>
						</div>
					</>
				) : (
					<div className="cart-empty-naming">
						<p>Your cart is empty</p>
					</div>
				)}
			</div>
		</>
	);
}

ShoppingCart.propTypes = {
	toggleCartOpen: PropTypes.bool.isRequired,
	items: PropTypes.number.isRequired,
	removeItemsFromCart: PropTypes.func.isRequired,
};
