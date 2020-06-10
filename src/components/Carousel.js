// import React from 'react'
// import Player from '../containers/Player'
// import useState from 'react'
// import useEffect from 'react'

// function Carousel(props) {
//     const [active, setActive] = React.useState(0);
//     let scrollInterval = null;
//     const style = {
//         carousel: {
//             position: "relative"
//         },
//         carouselItem: {
//             position: "absolute",
//             visibility: "hidden"
//         },
//         visible: {
//             visibility: "visible"
//         }
//     };
//     React.useEffect(() => {
//         scrollInterval = setTimeout(() => {
//             const { carouselItems } = props;
//             setActive((active + 1) % carouselItems.length);
//         }, 2000);
//     });
//     const { carouselItems, ...rest } = props;
//     return (
//         <div style={style.carousel}>
//             {carouselItems.map((item, index) => {
//                 const activeStyle = active === index ? style.visible : {};
//                 return React.cloneElement(item, {
//                     ...rest,
//                     style: {
//                         ...style.carouselItem,
//                         ...activeStyle
//                     }
//                 });
//             })}
//         </div>
//     );
// }

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

// export default Carousel;