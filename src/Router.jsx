import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import  Login  from './pages/Login'


function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

    </Routes>
    </BrowserRouter>
)

}

export default Router