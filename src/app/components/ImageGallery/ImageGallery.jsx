import { useState } from 'react';
import Thumbnail from '../ThumbnailComponent/ThumbnailComponent';
import './ImageGallery.css';
import Image1 from '../../../images/image-product-1.jpg';
import Thumbnail1 from '../../../images/image-product-1-thumbnail.jpg';
import Image2 from '../../../images/image-product-2.jpg';
import Thumbnail2 from '../../../images/image-product-2-thumbnail.jpg';
import Image3 from '../../../images/image-product-3.jpg';
import Thumbnail3 from '../../../images/image-product-3-thumbnail.jpg';
import Image4 from '../../../images/image-product-4.jpg';
import Thumbnail4 from '../../../images/image-product-4-thumbnail.jpg';
import CloseIcon from '../../../images/icon-close.svg';

export default function ImageGallery() {
	const thumbnailImages = [
		{ id: 1, thumbImage: Thumbnail1, image: Image1 },
		{ id: 2, thumbImage: Thumbnail2, image: Image2 },
		{ id: 3, thumbImage: Thumbnail3, image: Image3 },
		{ id: 4, thumbImage: Thumbnail4, image: Image4 },
	];

	const [selected, setSelected] = useState(thumbnailImages[0]);
	const [imageGalleryVisible, setImageGalleryVisible] = useState(false);

	return (
		<div
			className={
				imageGalleryVisible ? 'close-gallery' : 'image-gallery-container'
			}
		>
			<div
				className="close-btn-container"
				onClick={() => setImageGalleryVisible(!imageGalleryVisible)}
			>
				<img src={CloseIcon} alt={CloseIcon} />
			</div>
			<div className="arrows">
				<div className="next-arrow arrow-left">
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</div>
				<div className="next-arrow arrow-right">
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</div>
			</div>
			<div className="image-gallery">
				<img src={selected.image} alt={selected.image} />
				<nav className="thumbnails">
					{thumbnailImages.map((thumb) => {
						return (
							<button
								key={thumb.id}
								onClick={() => setSelected(thumb)}
								className={selected.id === thumb.id ? 'selected' : ''}
							>
								<Thumbnail
									thumbImage={thumb.thumbImage}
									thumbImageAlt={thumb.image}
									className={selected.id === thumb.id ? 'selected' : ''}
								/>
							</button>
						);
					})}
				</nav>
			</div>
		</div>
	);
}
