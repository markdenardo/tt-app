import React from 'react';
import { getMovies } from '../actions/movieActions'
import { connect } from 'react-redux'

class MovieList extends React.Component {

    componentDidMount() {
        this.props.getMovies()
    }

    handleLoading = () => {

        if (this.props.loading) {
            return <div>Loading...</div>
        }
        else if (this.props.loading !== true) {
        return <div>{this.props.movies}</div>
        }
        else if (this.props.movies == null) {
            return <div>NULL</div>
        }

    }

    render() { 
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMovies)
    }
}

    export default connect(null, {getMovies})(MovieList);

