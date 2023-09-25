import './ThumbnailComponent.css';
import PropTypes from 'prop-types';

export default function Thumbnail({ thumbImage, thumbImageAlt, className }) {
	return (
		<>
			<img
				className={`thumb ${className}`}
				src={thumbImage}
				alt={thumbImageAlt}
			/>
		</>
	);
}

Thumbnail.propTypes = {
	thumbImage: PropTypes.string.isRequired,
	thumbImageAlt: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};
