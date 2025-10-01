import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/home'
import NotFound from './components/NotFound'
const AppRoutes = () => {
  return (
    <Router>

        <Routes>

            <Route path='/' element={<HomeLayout />}>

                <Route  index element={<Home />}/>
                <Route  path='*' element={<NotFound />}/>
                {/* <Route  path='/about' element={<About />}/> */}



            </Route>

        </Routes>

    </Router>
  )
}

export default AppRoutes