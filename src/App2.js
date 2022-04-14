import React from 'react'
import App from './App'
import {
    BrowserRouter,
  
    Route,
    Link,
    Routes,
    useLocation,
    useRoutes
  } from "react-router-dom";
import Landing from './Landing'
import {AnimatePresence , motion} from 'framer-motion';



function App2() {
  const location = useLocation();
 
  return (
    <>
    
  
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname} >
     <Route path='/' element={<Landing />} />
     <Route path='/landing' element={<App />} />
    </Routes>
       </AnimatePresence>
     

    
   
  
    </>
  )
}

export default App2