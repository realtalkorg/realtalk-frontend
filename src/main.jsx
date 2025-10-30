import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from "./pages/LoginPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/Real_Talk',
        element: <ChatPage/>,
    },
    {
        path: '*',
        element: <NotFoundPage/>,
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
