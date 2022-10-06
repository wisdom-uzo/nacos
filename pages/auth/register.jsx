import { Button, makeStyles, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify"
import { cisco, nacos } from '../../images'

const Register = () => {

    const [student, setStudent] = useState({
        firstName: "",
        middleName: "",
        LastName: "",
        uuid:"",
        email: "",
        phoneNumber: ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setStudent({...student, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/student", {
          method: "POST",
          body: JSON.stringify({
            ...student,
            createdAt: new Date().toString(),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        const responseData = await response.json();
        toast.success('Your detailes has been added')

        setStudent({
            firstName: "",
            middleName: "",
            LastName: "",
            uuid:"",
            email: "",
            phoneNumber: ""
            })
        console.log(responseData);

    
      };




  return (
    <>
     <div className='w-full flex justify-center pt-[5rem]' >
      <ToastContainer />

        <form className="flex flex-col w-[95%] md:w-[35%] shadow-lg  p-3 gap-3 rounded" onSubmit={handleSubmit}>
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

            <TextField 
                size='small'
                label="First Name"
                type='text'
                name='middleName'
                required
                sx={{color:'white', border:"1px solid white", input:{color:'white'}}}
                value={student.middleName}
                onChange={handleChange}
            />
            <TextField 
                size='small'
                label="Last Name"
                type='text'
                name='LastName'
                required
                sx={{color:'white', border:"1px solid white", input:{color:'white'}}}
                value={student.LastName}
                onChange={handleChange}
                />

                <TextField 
                    size='small'
                    label="GTS NO/MATRIC NO."
                    type='text'
                    name='uuid'
                    required
                    sx={{color:'white', border:"1px solid white", input:{color:'white'}}}
                    value={student.uuid}
                    onChange={handleChange}
                  />

                  <TextField 
                  size='small'
                  label="Gmail"
                  type='email'
                  name='email'
                  required
                  sx={{color:'white', border:"1px solid white", input:{color:'white'}}}
                  value={student.email}
                  onChange={handleChange}
                />

                <TextField 
                size='small'
                label="Phone Number"
                type='tel'
                name='phoneNumber'
                required
                sx={{color:'white', border:"1px solid white", input:{color:'white'}}}
                value={student.phoneNumber}
                onChange={handleChange}
              />

              <Button type='submit' className='bg-green-700 hover:bg-green-500 text-white'>Submit</Button>

            
            
        </form>



    
    </div>

    <footer className='text-center p-3 mt-4'>Design by ❤🧡 @DEV-WIZ </footer>

    </>
   
  )
}

export default Register