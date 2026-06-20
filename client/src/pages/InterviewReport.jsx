import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios"
import Step3Report from '../components/Step3Report';
import { ServerUrl } from '../App';

const InterviewReport = () => {
  const {id}=useParams();
  const [report,setReport]=useState(null);
  useEffect(()=>{
    const fetchReport=async ()=>{
    try {
      const result=await axios.get(ServerUrl+"/api/interview/report/"
        +id,{withCredentials:true}
      );
       setReport(result.data);
      
    } catch (error) {
       console.log(error);
    }
    } 
    fetchReport();
  },[]);

  if(!report){
    return (
      <div className='min-h-screen fflex items-center justify-center'>
        <p className='text-gray-500 text-lg'>
          Loading Report...
        </p>
      </div>
    );
  }

  return <Step3Report report={report}/>
}

export default InterviewReport
