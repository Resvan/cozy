'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone number is required'),
    message: Yup.string().min(10, 'Message should be at least 10 characters').required('Message is required'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbzzciQCHvg2aKg9Zag2_NPFfDZ0KhHlY1KLJdWqxZ_RIZCBFC7nrT-Quiey5ywjjrFq/exec',
        values
      );
      alert('Form submitted successfully');
      resetForm();
    } catch (error) {
      alert('Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <div className='container p-4 mt-5'>

<div className='grid gap-3 grid-cols-1 md:grid-cols-2 '>

<div  className='p-4 max-w-lg text-3xl font-semibold leading-loose '>


<div className='p-10 '>
<h1 className='text-white text-4xl t text-end'> Lets Get in Toutch</h1>
  
<p className='text-end  p-4 text-xl font-serif '>
Fill in the form or just use my contacts below.

</p>
<p className='text-end  p-4 text-xl font-serif '>
‍If you need to put a project on the move, let’s work on it!
</p>
</div>

</div>
<div>
<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="contact-name"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Your Name"
        />
        <span className="text-red-500 text-xs">{formik.touched.name && formik.errors.name}</span>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="contact-email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Your Email"
        />
        <span className="text-red-500 text-xs">{formik.touched.email && formik.errors.email}</span>
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-600">
          Mobile Number
        </label>
        <input
          type="text"
          name="subject"
          id="contact-subject"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          placeholder="Mobile Number"
        />
        <span className="text-red-500 text-xs">{formik.touched.subject && formik.errors.subject}</span>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
          Message
        </label>
        <textarea
          name="message"
          id="contact-message"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          rows="5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder="Message"
        />
        <span className="text-red-500 text-xs">{formik.touched.message && formik.errors.message}</span>
      </div>

      <div className="text-center">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Send Message
        </button>
        <br />
        <br />
        <span id="submit-error" className="text-red-500 text-xs"></span>
      </div>
    </form>
</div>
</div>
    </div>



    
  );
};

export default ContactForm;
