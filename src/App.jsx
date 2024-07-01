import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Collection from './pages/collection';
import ContactUs from './pages/contact-us';
import RootLayout from './components/layouts/rootLayout';

function App() {
  const router = createBrowserRouter([
    // creating a router path: what to show/ display in the url
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "collection",
          element: <Collection/>
        },
        {
          path: "contact-us",
          element: <ContactUs/>
        },
      ]
    },
  ])

  return <RouterProvider router={router}/>;
  
}

export default App
