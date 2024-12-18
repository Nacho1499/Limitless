import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Shop from './Components/Shop.jsx';
import About from './Components/About.jsx';


const router= createBrowserRouter([
  { path:"/", element:<App/>},
  {path:"/shop", element:<Shop/>},
  {path:"/about", element:<About/>}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
