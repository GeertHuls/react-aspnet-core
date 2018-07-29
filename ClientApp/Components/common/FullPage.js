import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

class FullPage extends Component {

    render() {
        return (
            <div>
                <h2>Page Top</h2>
                <Router>
                    <div>
                        <Switch>
                            <Route
                                exact path="/"
                                render={ () => (
                                    <h1>Home page</h1>
                                ) } />

                            <Route
                                exact path="/route1"
                                render={ () => (
                                    <h1>This is route 1</h1>
                                ) } />

                            <Route
                                render={ () => (
                                    <h1>Route not found</h1>
                                ) } />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

FullPage.defaultProps = {};

export default FullPage;