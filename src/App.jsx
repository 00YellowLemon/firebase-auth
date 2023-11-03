
import Content from './Content/Content'
import Home from './Home/Home'
import Protected from './protected/protected'
import {useState} from 'react'
import {getAuth} from 'firebase/auth'
import { createBrowserRouter,Router,RouterProvider} from 'react-router-dom'
 
// Initialize Firebase


function App() {
  const [isuser,setIsuser] = useState(false)



  const Router = createBrowserRouter([
    {
      path: '/',
      element: < Home />
    },
    {
      path:'signin',
      element:<Content />
    },
    {
      path:'protected',
      element:<Protected />
    }
  ])


  
  // Initialize Firebase



  return (
    <>
        <RouterProvider router={Router}>

        </RouterProvider>
    </>

  )
}

export default App
