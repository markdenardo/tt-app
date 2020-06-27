import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { getMovies, addRandomMovie } from '../actions/movieActions'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types';

class RandomMovie extends React.Component {

    componentDidMount() {
        this.props.getMovies()

    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getCurrentMovie = () => {
        // console.log("clicked")
        if (this.props.movies.length > 0) {
            let randomNumber = this.getRandomInt(0, this.props.movies.length);
            let movie = this.props.movies[randomNumber]
            this.props.addRandomMovie(movie)
            return movie;
        }
        return "";
    }

    handleClick = () => {
        console.log("clicked")
        return this.getCurrentMovie()
    }
 
    render() {
        
            return ( 
                    <div className="randommovie-container">
                        <ul>
                        <Card className="card"><ReactPlayer url={this.getCurrentMovie().url}/></Card><br></br>
                        <button onClick={this.handleClick}>Load Random Movie</button> 
                        </ul>
                    </div>
            )
        }
        // }

};

RandomMovie.propTypes = {
    dispatch: PropTypes.func.isRequired

}

const mapStateToProps = state => {
    return ({
        movies: state.movies,
        movie: state.movie
    })
};

export default connect(mapStateToProps, {getMovies, addRandomMovie})(RandomMovie);