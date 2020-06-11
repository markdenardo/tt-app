import React from 'react'
import ReactPlayer from 'react-player'
import useState from 'react'
import useEffect from 'react'
import { getMovies } from '../actions/movieActions'


function Carousel(props) {

    const [active, setActive] = React.useState(0);
    let scrollInterval = null;
    const style = {
        carousel: {
            position: "relative"
        },
        carouselItem: {
            position: "absolute",
            visibility: "hidden"
        },
        visible: {
            visibility: "visible"
        }
    };
    React.useEffect(() => {
        scrollInterval = setTimeout(() => {
            const { carouselItems } = props;
            setActive((active + 1) % getMovies().length);
        }, 2000);
    });
    const { carouselItems, ...rest } = props;
    return (
        <div style={style.carousel}>
            
                  <ReactPlayer url="https://www.youtube.com/watch?v=CR1TMGYhCoE" />
               
        </div>
    );
}

// // function Carousel(){
    
// //     return(
// //         <div>
// //             Trailer 1
// //             <Player />
// //             Trailer 2
// //             <Player />
// //             Trailer 3
// //             <Player />
// //         </div>
// //     )
// // }

export default Carousel;