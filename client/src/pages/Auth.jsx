import React from 'react'
import { motion } from "motion/react"
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import {linkWithCredential, signInWithPopup} from "firebase/auth"
import {auth, provider} from "../utils/firebase"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const Auth = ({isModel=false}) => {
    const ServerUrl="http://localhost:8000";
    const dispatch=useDispatch();
   async function handleGoogleAuth(){
        try {
        const response=await signInWithPopup(auth,provider);
        let user=response.user;
        let name=user.displayName;
        let email=user.email;
        let result=await axios.post(ServerUrl+"/api/auth/google",{
            name,email
        },{withCredentials:true});
         dispatch(setUserData(result.data));
        } catch (error) {
             console.log(error);
        }
    }

  return (
    <div className={`
        w-full 
        ${isModel?"py-2":"min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
        `}>
        <motion.div 
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1.05}}  
        className={`w-full ${isModel?"max-w-md p-8 rounded-3xl":"max-w-lg p-12 rounded-[32px]"}
        bg-white shadow-2xl border border-gray-200`}>
            <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-black p-2 text-white rounded-lg'>
                    <BsRobot size={18}/>
                </div>
                <h2 className='font-semibold text-lg'>InterviewPilot.AI</h2>
            </div>
            <h1 className='text-2xl md:text-3xl font-semibold text-center
            leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1
                rounded-full inline-flex items-center gap-2'>
                  <IoSparkles size={16}/> AI Smart Interview
                </span>
            </h1>
            <p className='text-gray-500 text-center text-sm md:text-base
            leading-relaxed mb-8'>
                sign in to start AI-powered mock interviews,
                track your progress, and unlock detailed performance insights.
            </p>
            <motion.button 
            whileHover={{opacity:0.9, scale:1.02}}
            whileTap={{opacity:1,scale:0.98}} onClick={handleGoogleAuth}
                className='bg-black w-full rounded-full  text-white flex 
                    py-3 gap-2 items-center justify-center shadow-md'>
                <FcGoogle size={20}/> Continue with Google
            </motion.button>
        </motion.div>
    </div>
  )
}

export default Auth
