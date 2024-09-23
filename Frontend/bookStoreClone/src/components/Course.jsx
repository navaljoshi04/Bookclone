import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
       try{
          const response= await axios.get("http://localhost:4000/book");
          console.log(response.data);
          setBook(response.data);
       }catch(error){
         console.log(error.message);
       }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center dark:mt-16">
          <h1 className="text-2xl  md:text-4xl">
            {" "}
            We're delighted to have{" "}
            <span className="text-pink-500"> you Here!:)</span>{" "}
          </h1>
          <p className="mt-12">
            Welcome to our bookstore! We're delighted that you've chosen to
            visit our website. Your support means the world to us, and we hope
            you find the perfect book to enjoy. Our curated selection offers
            something for every reader. Thank you for being a part of our
            literary community. Happy reading!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
