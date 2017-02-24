import React from 'react';

export default class TextBox extends React.Component {
    render() {
        return (
            <div className="textBox">
                <img src="img/snimka.jpg" alt="Stoyan" />
                <div className="text">
                    <h1>Stoyan Daskaloff</h1>
                    <p>MARCH 7.2013 AT 7.30 PM</p>
                </div>
                <div className="gradient">
                    <img src="img/gradient.jpg" alt="gradient"/>
                    </div>
                <div className="commentText">
                    <img src="img/text.jpg" alt="text"/>
                    </div>
            </div>
        )
    }
}