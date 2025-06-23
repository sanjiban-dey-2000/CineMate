import React from 'react'
import { Form } from 'react-router-dom'

export const contactData=async({request})=>{
  try{
    const res=await request.formData();
    console.log(res);
    const data=Object.fromEntries(res);
    console.log(data);
    return null;
  }catch(error){
    console.log(error);
  }
}

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <Form className="space-y-6" method='POST' action='/contact'>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name='name'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              name='email'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              name='message'
              placeholder="How can we help you?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </Form>
      </div>
    </section>
  )
}

export default Contact