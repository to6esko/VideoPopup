import React from 'react';

export default class FooterButtons extends React.Component {
    render() {
        return (
            <div className="btn-footer">
                    <ul>
                        <li><img src="img/btn-like.jpg" alt="like" /></li>
                        <li><img src="img/btn-share.jpg" alt="share" /></li>
                        <li><img src="img/btn-coment.jpg" alt="share" /></li>
                        <li className="btn-footer-right"><img src="img/btn-report.jpg" alt="share" /></li>
                    </ul>
                <div className="footerBottom">
                </div>
            </div>
        )
    }
}