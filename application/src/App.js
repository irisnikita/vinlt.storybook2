// Libaries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layouts from './modules/Layouts';

import store from './store';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' name='Layouts' component={Layouts} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
