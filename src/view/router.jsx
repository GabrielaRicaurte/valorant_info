import { createBrowserRouter } from 'react-router-dom';
import { Agents } from './Agents';
import App from '../layouts/App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/agents',
        element: <Agents />,
    }
]);

export default router