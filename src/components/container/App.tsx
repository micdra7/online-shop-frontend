import * as React from 'react';

export interface IAppProps { message: string; };

const App: React.FC<IAppProps> = (props) =>
    <h1>
        Hello from {props.message}
    </h1>;

export default App;
