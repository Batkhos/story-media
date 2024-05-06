import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
// Pages..
import Register from '../pages/Register'
import Logging from '../pages/Logging'
import ChatBox from '../pages/Chatbox/ChatBox'
import Profile from '../pages/Profile/Profile'
import Home from '../pages/Home/Home'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import Rightbar from '../components/Rightbar'

export default function Layout(){

const Feed =()=>{
        return(
            <>
            <Navbar/>
                <main className=''>
                    <Leftbar/>
                    <div className='container'>
                        <Outlet/>
                    </div>
                    <Rightbar/>
                </main>
            </>
        )}
const router = createBrowserRouter ([
    {
        path: '/',
        element : <Feed/>,
        children : [
        {
        path: '/',
        element: <Home />
        },
        {
        path: '/profile/:id',
        element: <Profile />
        },
        {
        path: '/chatbox/:id',
        element: <ChatBox />
        }
        ]
        },
        {
        path: '/Logging',
        element:<Logging/>
        },
        {
        path: '/Register',
        element: <Register />
        },
    ])
return (
    <>
        <RouterProvider router={router} />
    </>
)

}