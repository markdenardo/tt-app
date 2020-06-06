import React from 'react'
import { connect } from 'react-redux';
import { getMovies, setMovies } from '../actions/movieActions'
import MovieList from './MovieList'

class Movies extends React.Component {
    componentDidMount(){
        this.props.getMovies()
    }

    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading){
            return <div>Loading...</div>
        } else {
            return <MovieList movie={this.props.movies}/>
        }
    }
    render(){
        return (
            <div>
                Movies
                <MovieList />
                {this.handleLoading()}
            </div>
        );
    } 
};

const mapStateToProps = state => {
    return ({
        movies: state.movies
    })
}



export default connect(mapStateToProps,{getMovies,setMovies})(Movies);