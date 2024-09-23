import React from "react";
import { useState,useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
function Freebook() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
       try{
          const response= await axios.get("http://localhost:4000/book");      
          setBook(response.data.filter((data) => data.subcategory == "Free"));
       }catch(error){
         console.log(error.message);
       }
    }
    getBook();
  },[]);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books Available</h1>
          <p>
            These are the list of books that are available freely! Without
            loggin in you can acess these books but for premieum books, Please
            loggin !
          </p>

          <div>
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
