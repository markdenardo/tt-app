import React from 'react';

class MovieNamesNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = { // set new state for bind key movies
            movies: [1,2,3]
        }
    }

    onMoveUp = (key) => {
        if (key === 0) return; // disable method when the key its equal to 0 
        const { movies } = this.props; // assign props to items for don't repeat my self 
        const index = key - 1;  // save in memory index value less than one
        const movieAbove = movies[index]; // save in memory items index  
        movies[key - 1] = movies[key]; // match id value with the key object
        movies[key] = movieAbove;
        this.setState({ movies }); // set new state 
    }

    onMoveDown = (key) => {
        const { movies } = this.props;
        if (key === movies.length - 1) return;
        const index = key + 1;
        const movieBelow = movies[index];
        movies[key + 1] = movies[key];
        movies[key] = movieBelow;
        this.setState({ movies });
    }

    render() {
        const { movies } = this.state;

        return (
            <ul>{console.log("this.props.movies", this.props)}
                {movies.map((item, key) =>
                    <li key={key} style={{ backgroundColor: item.bgColor }}>
                        <div className="moviesId">{key + 1}</div>
                        <div className="moviesName">{movies.name}</div>
                        <div className="moviesArrows">
                            <span onClick={() => this.onMoveUp(key)}>&#x25B2;</span>
                            <span onClick={() => this.onMoveDown(key)}>&#x25BC;</span>
                        </div>
                    </li>
                )}
            </ul>
        );
    }

}

export default MovieNamesNew;