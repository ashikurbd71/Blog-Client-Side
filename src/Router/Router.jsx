
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
import Privteroute from './Privteroute';
import Wishdetails from '../Component/Wishdetails';

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
                element:<Privteroute><Addblog/></Privteroute>
            },
            {
                path:'/feature',
                element:<Featuredblog/>
            },
            {
                path:'/wishlist',
                element:<Wishlist/>
            },
            {
                path:'/wishdetails/:id',
                element:<Wishdetails/>,
                loader:({params}) => fetch(`http://localhost:5000/addlist/${params.id}`)
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