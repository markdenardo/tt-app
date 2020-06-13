import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie, getMovies } from '../actions/movieActions'
import { bindActionCreators } from 'redux';

class MovieForm extends Component {

     
    state = { name: '', url: '', dir: '', year: ''}
    movies = []

    componentDidMount() {
        // this.props.getMovies()
        // this.movies = getMovies()

    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleOnSubmit(event) {
        if (event !== undefined && this.props.getMovies() !== undefined){
            // event.preventDefault();
            // this.addMovie({ name: this.state.name, url: this.state.url, dir:this.state.dir, year: this.state.year })

            event.preventDefault()
            let formData = { name: this.state.name, url: this.state.url, dir: this.state.dir, year: this.state.year  }
            let dataArray = this.props.getMovies.concat(formData)
            this.movies.setState({ movies: dataArray })
        }
    }

    render() {
        return (
           
            <div >
                <form onSubmit={(event) => this.handleOnSubmit(event.target.value)}>
                    <label>Movie</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={event => this.handleChange(event)} />
                    <br></br>
                    <label>URL</label>
                    <input
                        type='text'
                        name='url'
                        placeholder='url'
                        value={this.state.url}
                        onChange={event => this.handleChange(event)} />
                    <br></br>
                    <label>Director</label>
                    <input
                        type='text'
                        name='dir'
                        placeholder='dir'
                        value={this.state.dir}
                        onChange={event => this.handleChange(event)}/>
                    <br></br>
                    <label>Year</label>
                    <input
                        type='text'
                        name='year'
                        placeholder='year'
                        value={this.state.year}
                        onChange={event => this.handleChange(event)} />
                    <br></br>
                    <input onClicked={this.handleOnSubmit()} type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
// export default MovieForm;

const mapStateToProps = state => {
    return ({
        movies: state.movies
    })
};

const mapDispatchToProps = dispatch => {
    return {
        addMovie: () => {
            dispatch(addMovie())
        }
    };
};

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: {
//             addMovie: bindActionCreators(addMovie, dispatch),
//             getMovies: bindActionCreators(getMovies, dispatch)
//         }
//     };


export default connect(mapStateToProps, mapDispatchToProps(addMovie))(MovieForm);
