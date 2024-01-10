'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ForwardToInboxOutlined, PhoneOutlined, PlaceOutlined } from "@mui/icons-material";


const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbzzciQCHvg2aKg9Zag2_NPFfDZ0KhHlY1KLJdWqxZ_RIZCBFC7nrT-Quiey5ywjjrFq/exec",
        values,{
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
              },
        }
      );
      alert("Form submitted successfully");
      resetForm();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <p className="section-title text-4xl font-semibold mt-28 text-center pb-[30px]">CONTACT US</p>
      <div className="container m-auto w-full flex mt-20">
        <div className="w-8/12 flex gap-8">
          <div className="w-6/12">
            <p className="text-3xl font-semibold">CozyFox</p>
            <p className="text-slate-400 pt-4">
              Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis
              imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
            </p>
            <div className="w-2/4 flex justify-between mt-5">
              <PlaceOutlined className="text-violet-700" />
              <ForwardToInboxOutlined className="text-violet-700" />
              <PhoneOutlined className="text-violet-700" />
            </div>
          </div>
          <div className="w-6/12">
            {/* Contact information */}
          </div>
        </div>
        <form className="w-4/12 px-4" onSubmit={formik.handleSubmit}>
          <input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control w-full h-12 border-[1px] ${formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-600"} px-3 bg-transparent text-white`}
            placeholder="Your Name"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control w-full h-12 border-[1px] ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-600"} px-3 bg-transparent text-white my-5`}
            placeholder="Your E-mail"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
          <input
            name="subject"
            type="text"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control w-full h-12 border-[1px] ${formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-600"} px-3 bg-transparent text-white`}
            placeholder="Subject"
            required
          />
          {formik.touched.subject && formik.errors.subject && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
          )}
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control w-full border-[1px] ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-600"} px-3 pt-2 bg-transparent text-white my-5`}
            rows={5}
            placeholder="Message"
            required
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
          <button
            type="submit"
            className="bg-violet-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            disabled={formik.isSubmitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
