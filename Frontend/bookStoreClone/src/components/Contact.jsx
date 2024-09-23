import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center dark:mt-16 ">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mt-10 mb-6 text-center">
            We'd Love to <span className="text-pink-500">Hear From You!:)</span>
          </h1>
          <p className="text-lg mb-4 text-center ">
            We're here to help and answer any question you might have. We look
            forward to hearing from you 📚
          </p>
          <img
            src="booksInterior.jpg"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <div className="mt-7 mb-7 carousel rounded-box w-96">
            <div className="carousel-item w-1/2 bg-slate-100 flex flex-col">
              <h2 className="mt-2">Meet us</h2>
             
              <div></div>
            </div>

            <div className="carousel-item w-1/2 bg-slate-300 flex justify-center h-full flex-col">
              <div className="custom-center">
                <h2 className="mt-2">Pitch us</h2>
              </div>

              <div className="overflow-hidden ml-2 mb-1">
                <p>
                  hello, my name is
                  <input
                    type="text"
                    placeholder="your name"
                    className="bg-slate-300 text-cyan-500 placeholder-pink-500 w-full max-w-xs"
                  />
                  and my e-mail address is
                  <span className="bg-cyan-500">
                    <input
                      type="email"
                      className="bg-slate-300 text-cyan-500 placeholder-pink-500 w-full max-w-xs"
                      placeholder="your e-mail "
                    />
                  </span>
                  and i would like to discuss about this project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
