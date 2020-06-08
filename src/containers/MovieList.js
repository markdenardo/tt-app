import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'


class MovieList extends React.Component {

    componentDidMount() {
        this.props.getMovies()
    }

    handleLoading = () => {

        if (this.props.loading) {
            return <div>Loading...</div>
        }
        else if (this.props.loading !== true) {
            return <MovieList movie={this.props.movies} />
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



    export default connect(mapStateToProps,{ getMovies })(MovieList);

