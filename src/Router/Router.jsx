
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Mylayout from '../Mylayout/Mylayout';
import Home from '../Pages/Home';
import Allblog from '../Pages/Allblog';
import Addblog from '../Pages/Addblog';
import Featuredblog from '../Pages/Featuredblog';
import Wishlist from '../Pages/Wishlist';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([

    {
        path:"/",
        element:<App/>,

        children:[

            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allblog',
                element:<Allblog/>
            },
            {
                path:'/addblog',
                element:<Addblog/>
            },
            {
                path:'/feature',
                element:<Featuredblog/>
            },
            {
                path:'/wishlist',
                element:<Wishlist/>
            }

        ]
    },

    {
    path:'/login',
    element:<Login/>
    },

    {
        path:'/register',
        element:<Register/>
    }
    

])
export default router