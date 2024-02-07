import { createBrowserRouter } from 'react-router-dom';
import { Agents } from './Agents';
import App from '../layouts/App';
import { Section } from '../components/Section';

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
            }
        ],
    },
    // {
    //     path: '/agents',
    //     element: <Agents />,
    // }
]);

export default router