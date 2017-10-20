import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{author: 'Beth', text: 'I love cats!'}]
        }
    }

    handleCommentSubmit(comment) {
        const newComments = this.state.data.concat([comment])
        this.setState({data: newComments})
    }

    render() {
        return (
            <div className="comment-box">
                <h2>Add Comment</h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
                <h2>Comments</h2>
                <CommentList data={ this.state.data } />
            </div>
        )
    }

}

export default CommentBox;