import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfull!");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5 rounded-md  dark:bg-slate-500 dark:text-white sm:bg-red-500 md:bg-yellow-500 lg:bg-green-400 rounded-md  dark:bg-slate-500">
          <div className=" lg:w-[600px]">
            <h3 className="text-lg font-mono text-pretty text-center  rounded-md w-64 ml-5">Sign Up </h3>
            <div className="modal-action">
            <div className=" w-full sm:w-12/12 sm:h-64 md:h-64 w-12/12 lg:h-64 w-12/12">
               <img src="signin.jpg" alt="" srcset="" className=" w-full h-full object-cover rounded-md"/>
            </div>
              <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                {/* if there is a button in form, it will close the modal */}
                <div className="mt-1 space-y-2 py-1">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Fullname"
                    className="w-80 px-3 border rounded-md outline-none font-mono"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500 font-mono">
                      This field is required
                    </span>
                  )}
                </div>

                <div className="mt-1 space-y-2 py-1">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your password"
                    className="w-80 px-3 border rounded-md outline-none font-mono
                  "
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500 font-mono">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-1 space-y-2 py-1">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 border rounded-md outline-none font-mono
                  "
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500 font-mono">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-around mt-4">
                  <button className="btn  bg-cyan-200 font-mono hover:bg-cyan-500 duration-300 ">
                    Signup
                  </button>
                  <p className="mt-3 font-mono">
                    Have account!{" "}
                    <button
                      to="/"
                      className="underline text-blue-700 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </p>
                </div>
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-slate-500"
                >
                  ✕
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
