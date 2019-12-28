import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Burger from '../../presentational/Burger/Burger';

export interface AppProps { message: string; }

const App: React.FC<AppProps> = ({ message }) => {

    const [active, setActive] = useState(false);

    const handle = (event?: any) => {
        setActive(!active);
    };

    return (
        <Router>
            <Burger active={active} handleClick={handle} />
            <Switch>
                <Route exact path='/'>
                    <h1 data-testid='appComponent'>
                        {message}
                    </h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
