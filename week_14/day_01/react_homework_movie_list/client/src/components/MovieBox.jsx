import React from 'react';
import MovieList from './MovieList';

class MovieBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 
            [ 
                {title: "Fast and the Furious"}, 
                {title: "Fast and the Furious 2"}, 
                {title: "Fast and the Furious 3"}, 
                {title: "Fast and the Furious 4"},
                {title: "Fast and the Furious 5"},
                {title: "Fast and the Furious 6"},
                {title: "Fast and the Furious 7"},
                {title: "Fast and the Furious 8"},
                {title: "Fast and the Furious 9"}
            ] 
        }
    }

    render() {
        return <div className="movie-box"> 
            <MovieList data={ this.state.data }/>
        </div>
    }

}

export default MovieBox;