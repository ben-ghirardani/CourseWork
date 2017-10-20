import React from 'react';

class Movie extends React.Component {

    render() {
        return (
            <div className="movie">
                <h4> {this.props.title} </h4>
                <p> { this.props.children } </p>
            </div>
        )
    }

}

export default Movie;