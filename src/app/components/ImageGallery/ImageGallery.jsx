import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../ThumbnailComponent/ThumbnailComponent';
import './ImageGallery.css';
import CloseIcon from '../../../images/icon-close.svg';

export default function ImageGallery({
	openGallery,
	onCloseGallery,
	thumbnailImages,
}) {
	const thumbnails = thumbnailImages;
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {}, [openGallery]);

	const closeImageGallery = () => {
		setSelectedIndex(0);
		onCloseGallery();
	};

	const handleThumbnailClick = (index) => {
		setSelectedIndex(index);
	};

	const handleArrowClick = (direction) => {
		if (direction === 'left') {
			setSelectedIndex((prevIndex) =>
				prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
			);
		} else if (direction === 'right') {
			setSelectedIndex((prevIndex) =>
				prevIndex === thumbnails.length - 1 ? 0 : prevIndex + 1
			);
		}
	};

	return (
		<div className={openGallery ? 'image-gallery-container' : 'close-gallery'}>
			<div className="close-btn-container" onClick={closeImageGallery}>
				<img src={CloseIcon} alt={CloseIcon} />
			</div>
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
			<div className="image-gallery">
				<img
					src={thumbnails[selectedIndex].image}
					alt={thumbnails[selectedIndex].image}
				/>
				<nav className="thumbnails">
					{thumbnails.map((thumb, index) => {
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
			</div>
		</div>
	);
}

ImageGallery.propTypes = {
	openGallery: PropTypes.bool.isRequired,
	onCloseGallery: PropTypes.func.isRequired,
	thumbnailImages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			thumbImage: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
};
