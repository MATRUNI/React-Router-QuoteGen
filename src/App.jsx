import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home'
import DiplayQoutes from './components/DiplayQoutes'
import Quotegen, { quoteLoader } from './components/Quotegen'
import './App.css'
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      children:[
        {
          path:"",
          element:<Quotegen/>,
          loader:quoteLoader
        },
        {
          path:'/likedqoutes',
          element:<DiplayQoutes/>
        }
      ]
    },
  ])
  return <RouterProvider router={route}/>
}

export default App