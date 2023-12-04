import React, {useState} from "react";
import Star from "./Star";

const createArray = (length) => {
    return [...Array(length)]
}

const StarRating = ({totalStars}) => {
  const [starCount, setstarCount] = useState(2)

    return (
        <>
            {createArray(totalStars).map((n, i) => 
                <Star key={i} selected={starCount > i} onSelect={() => setstarCount(i + 1)} />)}
            <p>{starCount} of {totalStars} stars</p>
        </>
)}

export default StarRating;