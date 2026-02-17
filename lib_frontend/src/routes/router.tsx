import { createBrowserRouter } from 'react-router-dom'
import Home from '../app/home/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <div>Página não encontrada</div>
    }
])