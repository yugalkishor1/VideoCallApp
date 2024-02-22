import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom"
import Call from './pages/Call'
import Home from './pages/Home'
import Chat from './pages/Chat';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="call/:roomId" element={<Call/>}/>
      <Route path="chat" element={<Chat/>}/>
    </>
   
  )
)

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>,
//     children:[

//       {
//         path:"call",
//         element:<Call/>
//       },
//       {
//         path:"chat",
//         element:<Chat/>
//       }
//     ]
//   }
// ])
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

