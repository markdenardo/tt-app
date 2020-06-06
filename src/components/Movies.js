import React from 'react'
import { connect } from 'react-redux';
import { getMovies } from '../actions/movieActions'
import MovieList from './MovieList'

class Movies extends React.Component {
    
    componentDidMount(){
        console.log(this.props)
        this.props.getMovies()
    }

    handleLoading = () => {

        if(this.props.loading){
            return <div>Loading...</div>
        }   
            else if(this.props.movies != null){
            return <MovieList movie={this.props.movies}/>
        }   
            else if(this.props.movies == null){
            return <div>NULL</div>
        }

    }
    render(){
        return (
            <div>
                {this.handleLoading()}
                <MovieList />
            </div>
        );
    } 
};

const mapStateToProps = state => {
    return ({
        movies: state.movies
    })
}



export default connect(mapStateToProps,{getMovies})(Movies);