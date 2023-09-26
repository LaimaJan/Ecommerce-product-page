import { useState } from 'react';
import Thumbnail from '../ThumbnailComponent/ThumbnailComponent';
import './ItemPictures.css';
import Image1 from '../../../images/image-product-1.jpg';
import Thumbnail1 from '../../../images/image-product-1-thumbnail.jpg';
import Image2 from '../../../images/image-product-2.jpg';
import Thumbnail2 from '../../../images/image-product-2-thumbnail.jpg';
import Image3 from '../../../images/image-product-3.jpg';
import Thumbnail3 from '../../../images/image-product-3-thumbnail.jpg';
import Image4 from '../../../images/image-product-4.jpg';
import Thumbnail4 from '../../../images/image-product-4-thumbnail.jpg';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function ItemPictures() {
	const thumbnailImages = [
		{ id: 1, thumbImage: Thumbnail1, image: Image1 },
		{ id: 2, thumbImage: Thumbnail2, image: Image2 },
		{ id: 3, thumbImage: Thumbnail3, image: Image3 },
		{ id: 4, thumbImage: Thumbnail4, image: Image4 },
	];

	const [imageGalleryOpen, setImageGalleryOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const closeImageGallery = () => {
		setImageGalleryOpen(false);
	};

	const handleThumbnailClick = (index) => {
		setSelectedIndex(index);
	};

	const handleArrowClick = (direction) => {
		if (direction === 'left') {
			setSelectedIndex((prevIndex) =>
				prevIndex === 0 ? thumbnailImages.length - 1 : prevIndex - 1
			);
		} else if (direction === 'right') {
			setSelectedIndex((prevIndex) =>
				prevIndex === thumbnailImages.length - 1 ? 0 : prevIndex + 1
			);
		}
	};

	return (
		<div className="gallery">
			<div className="arrows">
				<div
					className="next-arrow arrow-left"
					onClick={() => handleArrowClick('left')}
				>
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
				<div
					className="next-arrow arrow-right"
					onClick={() => handleArrowClick('right')}
				>
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

			<img
				src={thumbnailImages[selectedIndex].image}
				alt={thumbnailImages[selectedIndex].image}
				onClick={() => setImageGalleryOpen(true)}
			/>

			<nav className="thumbnails">
				{thumbnailImages.map((thumb, index) => {
					return (
						<button
							key={thumb.id}
							onClick={() => handleThumbnailClick(index)}
							className={index === selectedIndex ? 'selected' : ''}
						>
							<Thumbnail
								thumbImage={thumb.thumbImage}
								thumbImageAlt={thumb.image}
								className={index === selectedIndex ? 'selected' : ''}
							/>
						</button>
					);
				})}
			</nav>
			<ImageGallery
				openGallery={imageGalleryOpen}
				onCloseGallery={closeImageGallery}
				thumbnailImages={thumbnailImages}
			/>
		</div>
	);
}
