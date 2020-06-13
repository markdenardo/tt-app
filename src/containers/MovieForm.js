import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addMovie, getMovies } from '../actions/movieActions'

class MovieForm extends Component {

    state = { name: '', url: '', dir: '', year: ''}
    movies = [];

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.getMovies()
        // this.movies = getMovies()
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event) {
        if (event) {
            event.preventDefault();
            // const { dispatch } = this.props
            let movie = {
                name: this.state.name,
                url: this.state.url,
                dir: this.state.dir,
                year: this.state.year
            };
            this.props.dispatch(addMovie(movie));
        } else { return; }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
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

MovieForm.propTypes = {
    dispatch: PropTypes.func.isRequired
}

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

export default connect(mapStateToProps)(MovieForm);
