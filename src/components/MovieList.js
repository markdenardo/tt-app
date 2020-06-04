import React from 'react'
import { connect } from 'react-redux';

class MovieList extends React.Component{

    componentDidMount = () => {
        console.log(this.props)
        this.props.fetchMovies()
    }
    render(){
        console.log(this.props.movies)
        return(
            <div>
                MovieList
            </div>
        );
    }
}

const MapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(index)

