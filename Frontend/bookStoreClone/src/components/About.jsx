import React, { useState } from 'react'

function About() {
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        suggestion:''
    });

    const handleChange= (e)=>{
        const {name, value}= e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(`Form submitted: `, formData);
        setFormData({
            name:'',
            email:'',
            suggestion:''
        });
    }
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center dark:mt-16 ">
        <h1 className="text-2xl  md:text-4xl ">
            {" "}
            Welcome to Naval's Bookstore, your ultimate destination for literary treasures. Nestled in the heart of Ranikhet, our bookstore is a haven for book lovers of all ages. With a carefully curated collection of classic literature, contemporary fiction, and insightful non-fiction, we offer something for every reader. Our knowledgeable staff is passionate about helping you find the perfect book, whether it's a timeless favorite or an exciting new release. Come visit us and experience the joy of discovery at Naval Bookstore, 


            <span className="text-pink-500"> where every book tells a story.!:)</span>{" "}
          </h1>
        </div>
        <div className="mt-6 border-[2px] shadow-md p-5 rounded-md ">
            <h2 className='mt-3 text-3 mb-6 text-center font-bold '>Suggestion Form</h2>
           <form onSubmit={handleSubmit} >
              <div className='m-2 p-5 '>
                <label htmlFor="name"> Name:</label>
                <input type="text" id='name' name="name" value={formData.name} 
                 onChange={handleChange}
                className='ml-5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono dark:text-black'
                 />
              </div>
              <div className='m-2 p-5 '>
                <label htmlFor="email"> Email:</label>
                <input type="email" id='email' name="email" value={formData.email} 
                  onChange={handleChange}
                  className='ml-5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono dark:text-black'
                  />
              </div>

              <div className='m-2 p-5 '>
                <label htmlFor="suggestion"> Suggestion:</label>
                 <textarea id='suggestion' name='suggestion' value={formData.suggestion} onChange={handleChange} 
                 className='w-2/3 ml-5 h-56 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700 font-mono dark:text-black'> </textarea>
              </div>
              <button type='submit' className="btn  bg-cyan-200 font-mono hover:bg-cyan-500 duration-300 justify-center ml-28 ">Submit</button>

           </form>
        </div>
    </div>
  )
}

export default About
