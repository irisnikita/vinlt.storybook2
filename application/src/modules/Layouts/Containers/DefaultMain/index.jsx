// Libraries
import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// Utils 
import routes from '@/routes';

class DefaultMain extends Component {
    render() {
        return (
            <div>
                <Suspense
                    fallback={<div>Loading...</div>}
                >   
                   <Switch>
                       {
                           routes.map((route, index) => {
                               return route.component ? (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => <route.component {...props}/>}
                                    />
                               ) : null;
                           })
                       }
                       <Redirect to='/story-book/home' />
                   </Switch>
                </Suspense>
            </div>
        );
    }
}

export default DefaultMain;