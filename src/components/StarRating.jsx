// StarRating.js

import PropTypes from 'prop-types';

const StarRating = ({ rating, totalStars }) => {
    const stars = Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;

        if (starValue <= rating) {
            return <span key={index} className="star-filled">★</span>;
        } else if (starValue - 0.5 <= rating) {
            return <span key={index} className="star-half">☆</span>;
        } else {
            return <span key={index} className="star-outline">☆</span>;
        }
    });

    return <div className="star-rating-container">{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    totalStars: PropTypes.number.isRequired,
};

export default StarRating;

