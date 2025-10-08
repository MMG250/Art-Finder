import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/home'
import NotFound from './components/NotFound'
import About from './pages/about'
import Artist from './pages/artist'

const AppRoutes = () => {
  return (
    <Router>

        <Routes>

            <Route path='/' element={<HomeLayout />}>

                <Route  index element={<Home />}/>
                <Route  path='*' element={<NotFound />}/>
                <Route  path='about' element={<About />} />
                <Route  path='artist' element={<Artist />} />



            </Route>

        </Routes>

    </Router>
  )
}

export default AppRoutes