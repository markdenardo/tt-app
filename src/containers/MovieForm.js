import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addMovie } from '../actions/movieActions'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class MovieForm extends Component {

    state = { name: '', url: '', dir: '', year: ''}
    movies = [];

    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event) {
        if (event) {
            event.preventDefault();

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
            <div className="movieform-container">
                <form classname="movieform-form" onSubmit={this.handleOnSubmit}>
                    
                    <TextField
                        type='text'
                        name='name'
                        placeholder='Movie'
                        value={this.state.name}
                        onChange={event => this.handleChange(event)} />
                    
                    <TextField
                        type='text'
                        name='url'
                        placeholder='YouTube'
                        value={this.state.url}
                        onChange={event => this.handleChange(event)} />
                    
                    <TextField
                        type='text'
                        name='dir'
                        placeholder='Director'
                        value={this.state.dir}
                        onChange={event => this.handleChange(event)}/>
                    
                    <TextField
                        type='text'
                        name='year'
                        placeholder='Year'
                        value={this.state.year}
                        onChange={event => this.handleChange(event)} />
                    
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
        // movies: this.props.movies
    })
};

export default connect(mapStateToProps)(MovieForm);
