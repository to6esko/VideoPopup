import React from 'react';

export default class CommentBox extends React.Component {
    render() {
        return (
            <div className="border-bottom">
                <div className="commentBox">
                    <input type="text" className="comment" name="comment" placeholder="comment..." />
                </div>
            </div>
        )
    }
}