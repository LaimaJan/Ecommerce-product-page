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
	const [selected, setSelected] = useState(thumbnails[0]);

	useEffect(() => {}, [openGallery]);

	const closeImageGallery = () => {
		setSelected(thumbnails[0]);
		onCloseGallery();
	};

	return (
		<div className={openGallery ? 'image-gallery-container' : 'close-gallery'}>
			<div className="close-btn-container" onClick={closeImageGallery}>
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
					{thumbnails.map((thumb) => {
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
