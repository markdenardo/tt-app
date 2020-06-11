import React, { Component } from 'react'
import { connect } from 'react'
import { addMovies } from '../actions/movieActions'

class MovieForm extends Component {

    handleOnChange(event) {
        this.setState({
            

        });
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addMovies(this.state);
        this.setState({
            name: '',
        });
    }

    render() {
        return (
            <div >
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Movie</label>
                    <input
                        type="text"
                        id="name"
                        name={this.props.name}
                        onChange={(event) => this.handleOnChange(event)} />
                    <br></br>
                    <label>URL</label>
                    <input
                        type="text"
                        id="url"
                        url={this.props.url}
                        onChange={(event) => this.handleOnChange(event)} />
                    <br></br>
                    <label>Director</label>
                    <input
                        type="text"
                        id="dir"
                        dir={this.props.dir}
                        onChange={(event) => this.handleOnChange(event)} />
                    <br></br>
                    <label>Year</label>
                    <input
                        type="text"

                        year={this.props.year}
                        onChange={(event) => this.handleOnChange(event)} />
                    <br></br>
                </form>
                <button>submit movie</button>
                {}
            </div>
        )
    }
}

export default MovieForm;
