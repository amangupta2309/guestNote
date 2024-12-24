import React, { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import { TextField} from '@mui/material';
import { Button } from '../components/ui/button';
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const createNote = async(values:any)=>{

    console.log("checking");
    
    axios.post(`${import.meta.env.VITE_BASE_URL}/createNote`, values)
      .then((response)=>{
        console.log("note created successfully");
      })
      .catch((err)=>{
        console.log("error");
        console.log(err.response);
      })
  }



const NewNote = ()=>{
    const navigate = useNavigate();

    const postSchema = yup.object().shape({
        name: yup.string().required("name required"),
        email: yup.string().email('invalid email format').required("email is required"),
        content: yup.string().min(2).required("content required"),
      });
      
        let initialValues = {
        name: "",
        email: "",
        content: "",
        };
      const handleFormSubmit = async(values:any, onSubmitProp:any)=>{
        try{
                const res = await createNote(values);
                onSubmitProp.resetForm();

                navigate('/entries');
        }
        catch{
            console.log("note not created");
        }   
        
      }
   
    return(
        <Formik
            onSubmit={handleFormSubmit}
            enableReinitialize
            initialValues={initialValues}
            validationSchema={postSchema}
        >
        { ({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
        })=>(
            <div className='flex items-center justify-center m-10 rounded-lg'>
                <form onSubmit={handleSubmit} className='bg-white rounded-lg'>
                    <div className='flex items-center justify-center flex-col gap-4 p-4 '>
                        <TextField
                            label = "Name to the note"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value ={values.name}
                            name="name"
                            error={
                                Boolean(touched.name) && Boolean(errors.name)
                            }
                            helperText={touched.name && errors.name}
                            fullWidth
                        />
                        <TextField
                            label = "Email of the user"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value ={values.email}
                            name="email"
                            error={
                                Boolean(touched.email) && Boolean(errors.email)
                            }
                            helperText={touched.email && errors.email}
                            fullWidth
                        />
                        <TextField
                            label = "content"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value ={values.content}
                            minRows={5}
                            multiline
                            name="content"
                            error={
                                Boolean(touched.content) && Boolean(errors.content)
                            }
                            helperText={touched.content && errors.content}
                            fullWidth
                        />
                        <div className='flex justify-center items-center'>
                            <Button type="submit" >
                                submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        )

        }
        </Formik>
    )
}

export default NewNote;