import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'


class MovieList extends React.Component {

    componentDidMount() {
        this.props.getMovies()
    };

    handleLoading = () => {
        console.log(this.props)
        if (this.props.loading === true) {
            return <div>Loading...</div>
        }
        else if (this.props.loading !== true) {
            return this.props.movies.map(movie => <div><header>{movie.name}{movie.dir}{movie.year}</header>
                <ReactPlayer url={movie.url}/>
                </div>)
        }
    };

    render() { 
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                
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

    export default connect(mapStateToProps, mapDispatchToProps(getMovies))(MovieList);

