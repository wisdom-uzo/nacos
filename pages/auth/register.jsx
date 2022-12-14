import { Button, makeStyles, TextField } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { cisco, nacos } from '../../images'


const url = "https://nacos.vercel.app/api/student";

const Register = () => {

    const [student, setStudent] = useState({
        firstName: "",
        middleName: "",
        LastName: "",
        uuid:"",
        email: "",
        phoneNumber: ""
    })
   const [close, setClose] = useState(true)

    const handleChange = (e) => {
        e.preventDefault()
        setStudent({...student, [e.target.name] : e.target.value})
    }
   
    const handleSubmit = async (e) => {

      e.preventDefault();
		try {
		
				const { data } = await axios.post("/api/student", student);
       
				console.log(data.message);
			
		} catch (error) {
			console.log(error); 
		}

    toast.success('Your detailes has been added')

    setStudent({
        firstName: "",
        middleName: "",
        LastName: "",
        uuid:"",
        email: "",
        phoneNumber: ""
        })
    }
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch("/api/student", {
    //       method: "POST",
    //       body: JSON.stringify({ 
    //         ...student,
    //         createdAt: new Date().toString(),
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
      
    //     const responseData = await response.json();
    //     toast.success('Your detailes has been added')

    //     setStudent({
    //         firstName: "",
    //         middleName: "",
    //         LastName: "",
    //         uuid:"",
    //         email: "",
    //         phoneNumber: ""
    //         })
    //     console.log(responseData);

    
    //   };




  return (
    <>
     <div className='w-full flex justify-center pt-[5rem]' >
      <ToastContainer />

        <form className="flex flex-col w-[95%] md:w-[35%] shadow-lg  p-3 gap-5 rounded" onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-4">
                <div className="relative h-[5rem] w-[5rem] ">
                    <Image layout='fill' objectFit='contain' src={nacos} alt="Nacos-logo" />
                </div>
                <div className="relative h-[5rem] w-[5rem] ">
                    <Image layout='fill' objectFit='contain' src={cisco} alt="cisco-logo" />
                </div>
            </div>
            
           <h2 className="text-center font-semibold text-lg uppercase">Registration for COM315 class</h2>

            <p className="text-sm ml-2 text-red-700">*please make sure all detailes are filled correctly, this details will be used to activate your CISCO account for PYTHON class</p>
               {
                !close ? ( <h1 className="flex justify-center items-center h-[10vh] font-bold"> FORM HAS BEEN CLOSED </h1> ) : ( <>

              <TextField 
                size='small'
                label="First Name"
                type='text'
                name='firstName'
                required
                value={student.firstName}
                onChange={handleChange}
            />

            <TextField 
                size='small'
                label="Middle Name"
                type='text'
                name='middleName'
                required
                value={student.middleName}
                onChange={handleChange}
            />
            <TextField 
                size='small'
                label="Last Name"
                type='text'
                name='LastName'
                required
                value={student.LastName}
                onChange={handleChange}
                />

                <TextField 
                    size='small'
                    label="GTS NO/MATRIC NO."
                    type='text'
                    name='uuid'
                    required
                    value={student.uuid}
                    onChange={handleChange}
                  />

                  <TextField 
                  size='small'
                  label="Gmail"
                  type='email'
                  name='email'
                  required
                  value={student.email}
                  onChange={handleChange}
                />

                <TextField 
                size='small'
                label="Phone Number"
                type='tel'
                name='phoneNumber'
                required
                value={student.phoneNumber}
                onChange={handleChange}
              />

              <Button type='submit' variant="contained" color="success" className=' text-white'>Submit</Button>

             </>) 
               } 
            
        </form>



    
    </div>

    <footer className='text-center p-3 mt-4'>Design by ??????? @DEV-WIZ </footer>

    </>
   
  )
}

export default Register
