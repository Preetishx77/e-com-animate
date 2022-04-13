import React from 'react'
import App from './App'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Landing from './Landing'
function App2() {
  return (
    <>
    
    <Router>
<Routes>
<Route path="/" element={<App />} />
<Route path="/landing" element={<Landing />} />

</Routes>
    </Router>
  
    </>
  )
}

export default App2