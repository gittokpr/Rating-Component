import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect }) => {
    return (
        <FaStar
            color={selected ? "red" : "grey"}
            onClick={onSelect}
        />
    )
}
const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
        <>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
        </>
    )
}

export default StarRating;