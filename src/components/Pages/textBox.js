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
                    <img  src="img/text.jpg" alt="text" width="790" height="72"/>
                </div>
            </div>
        )
    }
}

/**
 * <div className="commentText">
                    <p>
                        Sed quis diam egestas, egestas mauris in, dapibus eros. Duis nisi nulla, accumsan eu libero sit amet, faucibus ornare nisi. Phasellus cursus dolor ante, at placerat est tincidunt vel. In ullamcorper pulvinar est id congue. Pellentesque scelerisque ante vel justo varius, non aliquet est eleifend. Aliquam erat volutpat. Curabitur blandit, lorem eget
                    </p>
                    </div> */