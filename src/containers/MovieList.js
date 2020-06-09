import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'
import Player from './Player'

class MovieList extends React.Component {

    componentDidMount() {
        this.props.getMovies()
    }

    handleLoading = () => {
        console.log(this.props)
        // if (this.props.loading === true && this.props.movie === undefined) {
        if (this.props.loading === true) {
            return <div>Loading...</div>
        }
        // else if (this.props.loading !== true && this.props.movie !== undefined){
        else if (this.props.loading !== true) {
            return console.log(this.props.movies)
            // return this.props.movies.map(movie=><div>{movie.name}</div>)
        }
        else if (this.props.movies == null) {
            return <div>NULL</div>
        }

    }

    render() { 
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    };

}

const mapStateToProps = state => {
    return ({
        movies: state.movies
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies)
    }
}

    export default connect(mapStateToProps, {getMovies})(MovieList);

