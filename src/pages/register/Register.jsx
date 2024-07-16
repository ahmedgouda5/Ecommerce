import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { data } from 'autoprefixer'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [ErrorMsg,setErrorMsg] = useState(null)
     const navigate=useNavigate()

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(5, "Characters must not be less than 5")
            .max(15, "Characters must not be more than 15"),
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email"),
        phone: Yup.string()
            .required("Phone is required")
            .matches(phoneRegex, "Number is not valid"),
        password: Yup.string()
            .required("Password is required")
            .matches(passwordRegex, "Password is not valid"),
        rePassword: Yup.string()
            .required("Re-password is required")
            .oneOf([Yup.ref("password")], "Re-password and password should be the same")
    });
    

   async function handleSubmit(values) {
  
    let id;
    try {
        const options={
            url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
            method:"POST",
            data:values
           }
         id = toast.loading("Waiting...")
        const {data}= await axios.request(options);
         console.log(data);
          toast.dismiss(id)
          toast.success(" User created successfully")
          setTimeout(()=>{
            if (data.message=="success") {
                navigate('/auth/login')
              }
          },1000)
        }catch (error) {
            toast.dismiss(id)
            toast.error(error.response.data.message)
            setErrorMsg(error.response.data.message)
           

    }
   }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        validationSchema,
        onSubmit: handleSubmit,
    })

    return <>
        <section >
            <h1 className='text-green-600 text-bold text-2xl'>
                <i class="fa-regular fa-circle-user"></i>
                <span>Register Now</span>
            </h1>
            <form className='space-y-6' onSubmit={formik.handleSubmit}>
                <div className='flex pt-4 flex-col'>
                    <input type="text"
                        placeholder='Username'
                        className='form-control flex-grow'
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                  {formik.errors.name && formik.touched.name ? (
                      <div className='text-red-500'>
                        * {formik.errors.name}
                    </div>
                    ):(
                        "")
                  }
                </div>
                <div className='flex flex-col'>
                    <input type="text"
                        placeholder='Email'
                        className='form-control flex-grow'
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                     {formik.errors.email && formik.touched.email ? (
                      <div className='text-red-500'>
                        * {formik.errors.email}
                    </div>
                    ):(
                        "")
                  }
                  {ErrorMsg ? (
                  <div className='text-red-500'>
                        * {ErrorMsg}
                    </div>
                    ):(
                     ""
                    )}
                </div>
                <div className='flex flex-col '>
                    <input type="tel"
                        placeholder='Phone number'
                        className='form-control flex-grow'
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                     {formik.errors.phone && formik.touched.phone ? (
                      <div className='text-red-500'>
                        * {formik.errors.phone}
                    </div>
                    ):(
                        "")
                  }
                </div>
                <div className='flex flex-col'>
                    <input type="password"
                        placeholder='Password'
                        className='form-control flex-grow'
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                     {formik.errors.password && formik.touched.password ? (
                      <div className='text-red-500'>
                        * {formik.errors.password}
                    </div>
                    ):(
                        "")
                  }
                </div>
                <div className='flex flex-col '>
                    <input type="password"
                        placeholder='Re-password'
                        className='form-control flex-grow'
                        name='rePassword'
                        value={formik.values.rePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                     {formik.errors.rePassword && formik.touched.rePassword ? (
                      <div className='text-red-500'>
                        * {formik.errors.rePassword}
                    </div>
                    ):(
                        "")
                  }
                </div>
                <button className='btn bg-green-600' type='submit'>signup</button>
            </form>
        </section>
    </>
}
