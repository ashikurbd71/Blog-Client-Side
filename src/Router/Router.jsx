
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
import Details from '../Component/Details';
import Update from '../Pages/Update';
import Error from '../Pages/Error';

const router = createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,

        children:[

            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allblog',
                element:<Privteroute><Allblog/></Privteroute>
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
                element:<Privteroute><Wishlist/></Privteroute>
            },
            // {
            //     path:'/wishdetails/:id',
            //     element:<Wishdetails/>,
            //     loader:({params}) => fetch(`http://localhost:5000/addlist/${params.id}`)
            // },
            {
                path:'/details/:id',
                element:<Privteroute><Details/></Privteroute>,
                loader: ({params}) => fetch(`https://blogsph-server.vercel.app/allblogs/${params.id}`)
            },
            {
                path:'/update/:id',
                element:<Privteroute><Update/></Privteroute>,
                loader: ({params}) => fetch(`https://blogsph-server.vercel.app/allblogs/${params.id}`)
            },
            


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