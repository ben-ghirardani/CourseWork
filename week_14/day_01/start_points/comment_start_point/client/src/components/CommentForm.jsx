import React from 'react';

class CommentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleAuthorChange(event) {
        this.setState({author: event.target.value})
    }

    handleTextChange(event) {
        this.setState({text: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        // 1. Form validation
        const author = this.state.author.trim()
        const text = this.state.text.trim()
        if (!text || !author) {
            return
        }
        // 2. Update list of comments
        this.props.onCommentSubmit({author: author, text: text})
        // 3. Clear fields
        this.setState({author: '', text: ''})
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your name" 
                    value={this.state.author}
                    onChange={this.handleAuthorChange.bind(this)}
                />
                <input 
                    type="text" 
                    placeholder="Say something..." 
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                />
                <input 
                    type="submit" 
                    value="Submit"
                />
            </form>
        )
    }

}

export default CommentForm;