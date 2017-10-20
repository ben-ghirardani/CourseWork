import React from 'react';
import Movie from './Movie';

class MovieList extends React.Component {

    render() {
        const movieNodes = this.props.data.map( ( movie, index ) => {
            return (
                <Movie title={ movie.title } key={ index }>
                    { movie.text }
                </Movie>
            )
        })
        return <div className="movie-list">
            { movieNodes }
        </div>
    }

}

export default MovieList;