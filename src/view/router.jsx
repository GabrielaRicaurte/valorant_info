import { createBrowserRouter } from 'react-router-dom';
import { Agents } from './Agents';
import App from '../layouts/App';
import { Section } from '../components/Section';
import { Maps } from './Maps';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Section />,
            },
            {
                path: '/agents',
                element: <Agents />,
            },
            {
                path: '/maps',
                element: <Maps />,
            }
        ],
    },
    // {
    //     path: '/agents',
    //     element: <Agents />,
    // }
]);

export default router