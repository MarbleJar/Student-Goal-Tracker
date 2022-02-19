// Entry point for front-end
import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'
import { Provider } from 'react-redux';

class App extends Component {
    constructor(props) {
        super (props);
    }
    render() {
        return(
            <div>
                <MainContainer/>
            </div>
        );
    }
}

// ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById("app"));
export default App;