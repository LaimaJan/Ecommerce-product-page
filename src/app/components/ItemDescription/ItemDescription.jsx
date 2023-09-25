import './ItemDescription.css';
import AddToCart from '../AddToCart/AddToCart';

export default function ItemDescription() {
	return (
		<div className="sneakers-description-container">
			<div className="sneakers-description">
				<div className="sneakers-description-text">
					<p className="company-name">SNEAKER COMPANY</p>
					<p className="sneaker-edition">Fall Limited Edition Sneakers</p>

					<p className="sneaker-description">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they&apos;ll withstand
						everything the weather can offer.
					</p>
				</div>
				<div className="sneakers-price">
					<div className="sale-price-container">
						<p className="sale-price">$125.00</p>

						<p className="sale-amount">50%</p>
					</div>
					<p className="price">$250.00</p>
				</div>
			</div>
			<AddToCart />
		</div>
	);
}
