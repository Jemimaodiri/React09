import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Block/Layout'
import Home from '../pages/Home'
import Upload from '../pages/Upload'

export  const  MainRoutes=createBrowserRouter([

         {
                  path:'/',
                  element:<Layout/>,
                  children:[
                           {
                                    index:true,
                                    element:<Home/>

                           },
                        
                  ]
         },
         {
                  path:'/upload-book',
                  element:<Upload/>

         },
]) 



