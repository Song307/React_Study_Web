import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'
import App1 from '../TodoList/App1'
import InputTest from '../InputList/InputTest'
import Login from '../LoginForm/Login'
import UserList  from '../LoginForm/UserList'
import Home from './Home'
import CssEx1 from '../study_page/CssEx1'

function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/1' element={<App/>}/>
                    <Route path='/2' element={<App1/>}/>
                    <Route path='/3' element={<InputTest/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='userlist' element={<UserList/>}/>
                    <Route path='/css' element={<CssEx1/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;