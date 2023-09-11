import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MainRoutes } from './router/MainRoutes'

const App = () => {
  return (
    <div>
         <RouterProvider router={MainRoutes}/>
    </div>
  )
}
 export default App