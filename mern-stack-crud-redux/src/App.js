import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import axios from "axios";
import { useDispatch} from "react-redux";
import { getUser } from "./redux/UserSlice";
import React, {useEffect} from "react";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetchData = async ()  => {
              try {
                        const response = await axios.get('http://localhost:3001')
                        dispatch(getUser(response.data))
              } catch (err){
                        console.log(err)
              }
    }
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
