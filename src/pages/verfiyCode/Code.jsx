import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";




export default function Code() {
  const navigate=useNavigate()
  const validationSchema = Yup.object({
    resetCode: Yup.string().required("Code is required"),
  });

  async function handleSubmit(values) {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      method: "POST",
      data: values,
    };

    const { data } = await axios.request(options);
    console.log(data);
    navigate("/rest")

  }

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <section>
        <h1 className=" text-bold text-2xl mb-3">
          <span>reset your account password</span>
        </h1>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col ">
            <input
              type="text"
              placeholder="Code"
              className="form-control flex-grow "
              name="resetCode"
              value={formik.values.resetCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <button className="btn lowercase bg-green-600" type="submit">
            verify
          </button>
        </form>
      </section>
    </>
  );
}
