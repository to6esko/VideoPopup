import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Pages/home';
import Buttons from './Pages/buttons';
import CommentBox from './Pages/commetBox';
import TextBox from './Pages/textBox';
import FooterButtons from './Pages/footerButtons';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Home />
                </div>
                <div>
                    <Buttons />
                </div>
                <div>
                    <CommentBox />
                </div>
                <div>
                    <TextBox />
                </div>
                <div>
                    <FooterButtons/>
                    </div>
            </div>

        )
    }
}