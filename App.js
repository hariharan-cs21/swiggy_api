import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './src/components/Heading';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { About } from './src/components/About';
import { Error } from './src/components/Error'
import HotelMenu from './src/components/HotelMenu'
import { Shimmer } from './src/components/Shimmer';


const App = () => {
    return (
        <>

            <Heading />
            <Outlet />  {/* Filled with children configuration*/}
        </>
    );
};

const Instamart = React.lazy(() => import('./src/components/Mart'));


const Myrouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/hotelmenu/:id",
                element: <HotelMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            }
        ]
    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Myrouter} />);
