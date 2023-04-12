import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import  Home  from './pages/Home'
import  Login  from './pages/Login'
import Cadastro from './pages/Cadastro'
import Loja from './pages/Loja'


function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route />

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/loja' element={<Loja />} />
    </Routes>
    </BrowserRouter>
)

}

export default Router