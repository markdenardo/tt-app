import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'


class MovieNames extends React.Component {
    constructor() {
        super();

        this.state = {
           moviesArray: [
                 
           ],
           numbers: []
            
        }

    };
    componentDidMount() {
        this.props.getMovies()
        .then(response => {
                if (response !== undefined) {
                    this.setState({
                        moviesArray: response.movies
                    })
                }
        })
          
        // 
    };

sortListByDate = () => {
    //sort the array so that it goes chronologically
    // console.log("clicked");
    // const { moviesArray } = this.state;
    // this.state.moviesArray.sort(function (a, b) {
    //     return a - b;
    // });
    // console.log(this.state.moviesArray);
    // this.state.sort();
    // console.log(this.state);
    const sortedArray = [...this.props.movies];
    // const sortedArrayByDate = sortedArray.year.sort((a,b) => a - b);
    // console.log("sortedArrayByDate", sortedArrayByDate);
    
    sortedArray.sort(function(a,b){
        return a.year - b.year
    })
    
    return this.setState({
        moviesArray: sortedArray
    })  

    

}

  onMoveUp(key) {

    if (key === 0) return;
    const { moviesArray } = this.state;
    const index = key - 1;
    const movieAbove = moviesArray[index];
    moviesArray[key - 1] = moviesArray[key];
    moviesArray[key] = movieAbove;
    this.setState({ moviesArray });
  }

  onMoveDown(key) {
      console.log("this key", key)
    const { moviesArray } = this.state;
    if (key === moviesArray.length - 1) return;
    const index = key + 1;
    const movieBelow = moviesArray[index];
    moviesArray[key + 1] = moviesArray[key];
    moviesArray[key] = movieBelow;
    this.setState({ moviesArray });
  }

  renderListOfMovies = () => {

      console.log("this.state.moviesArray", this.state.moviesArray)
      return this.state.moviesArray.map((movie, key) =>
          <div key={key} className="movielist">
              <h2 className="movielistname"><a href={movie.url} target="_blank">"{movie.name}" {movie.dir} {movie.year} id {movie.id} </a>
                  <span onClick={() => this.onMoveUp(key)}>&#x25B2;</span>
                  <span onClick={() => this.onMoveDown(key)}>&#x25BC;</span>
                  {/* <button onClick={this.sortListByDate}>Sort List by Date</button> */}
              </h2>
          </div>)
  }

    handleLoading = () => {
        
        if (this.props.loading === true) {
            return <div>Loading...</div>
        }
        else if (this.props.loading !== true) {

            // console.log(this.state.moviesArray); 
            console.log(this.props.movies);
            // console.log("fruit",this.props.fruit)
            
            // const fetchMovies = this.props.movies;

        return this.props.movies.map((movie, key) => 
                <div key={key} className="movielist">
                <h2 className="movielistname"><a href={movie.url} target="_blank">"{movie.name}" {movie.dir} {movie.year} id {movie.id} </a>
                    <span onClick={() => this.onMoveUp(key)}>&#x25B2;</span>
                    <span onClick={() => this.onMoveDown(key)}>&#x25BC;</span>
                    </h2>
                </div>)

        }
    };

      render() {
        return (
            <div>
                {/* {this.handleLoading()} */}
                <button onClick={this.sortListByDate}>Sort List by Date</button>
                {this.renderListOfMovies()}
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

