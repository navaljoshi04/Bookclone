import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("You are successfully Logged in!");
          document.getElementById("my_modal_5").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
        setTimeout(() => {}, 2000);
      });
  };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal flex modal-bottom sm:modal-middle"
      >
        <div className="modal-box dark:text-white dark:bg-slate-500 bg-pink-400 sm:bg-red-500 lg:bg-yellow-500 ml-auto mr-auto mt-auto mb-auto w-4/5 md:bg-green-500">
          <h3 className="text-lg font-mono text-pretty  text-center rounded-lg font-extrabold">Login </h3>

          <div className="modal-action ">
            <div className=" w-full sm:w-12/12 sm:h-64 md:h-64 w-12/12 lg:h-64 w-12/12">
              <img src="login.jpg" className="h-full w-fit " />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className="mt-1 space-y-2 py-1 ">
                <span className="font-mono font-semibold w-32">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none font-mono"
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
                <span className="font-mono font-semibold">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded-md outline-none font-mono "
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500 font-mono ">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="btn  bg-cyan-200 font-mono hover:bg-cyan-500 duration-300 ">
                  Login
                </button>
                <p className="mt-3 font-mono">
                  Not Registered!{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-700 cursor-pointer"
                  >
                    signup
                  </Link>
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
      </dialog>
    </div>
  );
}

export default Login;
