import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Pages/home';
import Buttons from './Pages/buttons';
import CommentBox from './Pages/commetBox';

export default class App extends React.Component{
    render() {
        return (
            <div>
            <div>
                <Home/>
            </div>
            <div>
                <Buttons/>
            </div>
            <div>
                <CommentBox/>    
                </div>    
                </div>
        )
    }
}