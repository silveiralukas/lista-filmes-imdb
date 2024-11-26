import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import "./index.scss";

export interface Props {
    rating: number,
}

export default function StarRating(props: Props) {
    const numStars = Math.round(props.rating / 2); 

    const fullStars = []; // [0, 1, 2];
    const emptyStars = []; // [3, 4];

    for (let i = 0; i < 5; i++) {
        if(i < numStars) {
            fullStars.push(i);
        } else {
            emptyStars.push(i);
        }
    } // adiciona estrelas se o numero for menor que 5, caso
    // caso contrário adiciona estrelas vazias

    return(
        <div className="movie-rate">
            {fullStars.map(index => 
                <FaStar key={index}/>
            )}
            {emptyStars.map(index => 
                <FaRegStar key={index}/>
            )}
        </div>
    );
}