
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import  Props from './props';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Props/>
    </StrictMode>
);