import React from 'react';
import ReactDOM from 'react-dom';


export default class Home extends React.Component {
    render() {
        return (
            <div className="back-ground">
                <div>
                    <a href="#" className="close-icon"></a>
                </div>
                <div className="video">
                    <img src='img/video.jpg' alt="video"/>
                    </div>
            </div>
        );
    }
}