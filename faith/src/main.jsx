import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Shop from './Components/Shop.jsx';
import About from './Components/About.jsx';
import Hood from './Components/Hood.jsx';
import Shits from './Components/Shits.jsx';
import Bags from './Components/Bags.jsx';
import Caps from './Components/Caps.jsx';
import Books from './Components/Books.jsx';


const router= createBrowserRouter([
  { path:"/", element:<App/>},
  {path:"/shop", element:<Shop/>},
  {path:"/about", element:<About/>},
  {path:"/hood", element:<Hood/>},
  {path:"/shits", element:<Shits/>},
  {path:"/bags", element:<Bags/>},
  {path:"/caps", element:<Caps/>},
  {path:"/books", element:<Books/>}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
