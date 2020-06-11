import React from 'react'
import HomeText from './HomeText'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movieActions'

class Home extends React.Component{

    componentDidMount() {
        this.props.getMovies()
       
    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getCurrentMovie = () => {
        if (this.props.movies.length > 0) {
            let randomNumber = this.getRandomInt(0, this.props.movies.length);
            return this.props.movies[randomNumber];
        }
        return "";
    }

    render(){
            return (
                    <div className="home-div" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        
                    <HomeText />
                        <ReactPlayer url={this.getCurrentMovie().url} />
                </div>
            )
    }
        
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

export default connect(mapStateToProps, mapDispatchToProps(getMovies))(Home);