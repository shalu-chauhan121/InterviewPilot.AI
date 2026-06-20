import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'
import Step3Report from './components/Step3Report'

const App = () => {
  const ServerUrl="http://localhost:8000";
  const dispatch=useDispatch();
  useEffect(()=>{
    const getUser=async()=>{
      try {
      let result=await axios.get(ServerUrl+"/api/user/current-user",{
      withCredentials:true,
    });
    // console.log(result.data);
     dispatch(setUserData(result.data));
      } catch (error) {
        dispatch(setUserData(null));
        console.log(error);
      }
    }
    getUser();  
  },[dispatch])
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/interview' element={<InterviewPage/>}/>
    <Route path='/history' element={<InterviewHistory/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/report/:id' element={<InterviewReport/>}/>
   </Routes>
  )
}

export default App
