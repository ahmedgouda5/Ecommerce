import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';

export default function Forget() {
    const Navigate= useNavigate()
    let id;
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Email is required")
            .email("Email must be a valid email"),
    });

    async function handleSubmit(values) {
        const options = {
            url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
            method: "POST",
            data: values,
        };
        id = toast.loading("Waiting...");
        const { data } = await axios.request(options);
        toast.dismiss(id)
        if(data.statusMsg=="success"){
            toast.success("code sent successfully")
            Navigate("/auth/code")
        }
    }

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: handleSubmit,
    });
    return (
        <>
            <section>
                <h1 className=" text-bold text-2xl mb-3">
                    <span>please enter your verification code</span>
                </h1>
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col ">
                        <input
                            type="text"
                            placeholder="Email"
                            className="form-control flex-grow "
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <div className="text-red-500">* {formik.errors.email}</div>
                        ) : (
                            ""
                        )}
                    </div>

                    <button className="btn lowercase bg-green-600" type="submit">
                        verify
                    </button>
                </form>
            </section>
        </>
    );
}
