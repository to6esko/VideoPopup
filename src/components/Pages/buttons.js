import React from 'react';

export default class Buttons extends React.Component{
    render() {
        return (
            <div className="btn">
                <div className="btn-left">
                <ul>
                    <li><img src="img/btn-like.jpg" alt="like" /></li>
                    <li><img src="img/btn-share.jpg" alt="share" /></li>
                </ul>
                </div>
                <div className="btn-right">
                    <ul>
                    <li><img src="img/btn-edit.jpg" alt="edit"/></li>    
                    <li><img src="img/btn-delete.jpg" alt="delete"/></li>
                </ul>
                    </div>
                </div>
        )
    }
}