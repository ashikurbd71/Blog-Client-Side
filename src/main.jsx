import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Authprovider/Authprovider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SkeletonTheme } from 'react-loading-skeleton'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
  <QueryClientProvider client={queryClient}>
  <Authprovider>
   <RouterProvider router={router}/>
   </Authprovider>
   <Toaster/>
  </QueryClientProvider>
  </SkeletonTheme>
  </React.StrictMode>,
)
