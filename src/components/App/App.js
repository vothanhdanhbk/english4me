import React, { Component } from 'react';
import './App.css';
import ConMenu from './../../Container/ConMenu/ConMenu';
import routes from './../../routes';
import { Switch, Route, BrowserRouter as Router, HashRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <ConMenu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </React.Fragment>
            </HashRouter>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
