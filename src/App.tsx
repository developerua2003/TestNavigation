import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppNavigator from './navigation/AppNavigator';

import './styles/theme.scss';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <AppNavigator />
            </BrowserRouter>
        </>
    );
};

export default App;

