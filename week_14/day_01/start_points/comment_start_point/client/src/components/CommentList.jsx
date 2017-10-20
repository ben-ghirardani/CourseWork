import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

    render() {

        const commentNodes = this.props.data.map( (comment, index) => {
            return (
        <Comment author={ comment.author } key={index} >
            { comment.text }
         </Comment>
         )
        })

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }

}

export default CommentList;