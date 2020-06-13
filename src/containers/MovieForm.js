import React, { Component } from 'react'
import { connect } from 'react'
import { addMovie } from '../actions/movieActions'

class MovieForm extends Component {

     state = { name:'',url:'',dir:'',year:'' }
    componentDidMount() {
        // this.props.addMovie()
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleOnSubmit(event) {
        if (event !== undefined){
            event.preventDefault();
            // addMovie({ name: "Darjeeling", url: "https://www.youtube.com/watch?v=aO1bYukdvLI", dir:"Wes", year: 2007 })
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
export default MovieForm;

// const mapStateToProps = state => {
//     return ({
//         movie: state.movie
//     })
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMovie: () => dispatch(addMovie)
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps(addMovie))(MovieForm);
