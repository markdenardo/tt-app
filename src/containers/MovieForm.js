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
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        name={this.props.name}
                        onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" />
                    <input
                        type="text"
                        url={this.props.url}
                        onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" />
                    <input
                        type="text"
                        dir={this.props.dir}
                        onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" />
                    <input
                        type="text"
                        year={this.props.year}
                        onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" />
                </form>
                <submit>submit movie</submit>
                {}
            </div>
        )
    }
}

export default MovieForm;
