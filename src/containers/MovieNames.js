import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'
// import { styled } from '@material-ui/core/styles';


class MovieNames extends React.Component {

    componentDidMount() {
        this.props.getMovies()
    };

    handleLoading = () => {
        console.log(this.props)
        if (this.props.loading === true) {
            return <div>Loading...</div>
        }
        else if (this.props.loading !== true) {
            return this.props.movies.map(movie => 
                <div className="movielist">
                    <h2>
                    <div key={movie.id}><ul><a href={movie.url} target="_blank">"{movie.name}" {movie.dir} {movie.year}</a></ul></div>
                    </h2>
                </div>
                )
        }
    };

    render() { 
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    };

};

const mapStateToProps = state => {
    return ({
        movies: state.movies
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies)
    }
};

    export default connect(mapStateToProps, mapDispatchToProps(getMovies))(MovieNames);

