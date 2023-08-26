import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../store/loginSlice";
// import defaultImg from "../../assets/dummy-avatar.jpg";
import { useForm } from "react-hook-form";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const navigation = useNavigate();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file);
  }

  const handleLogin = (data) => {
    sessionStorage.setItem("ssUsername", data.username);
    sessionStorage.setItem("ssFile", file);
    console.log(file);

    dispatch(
      getUser({
        userName: data.username,
        file: file,
      })
    );
    navigation("/app");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //console.log(watch("username")); // watch input value by passing the name of it

  const { onChange, onBlur, name, ref } = register("firstName");
  // include type check against field path with the name you have supplied.

  // For better understanding
  {
    /* <input 
  onChange={onChange} // assign onChange event 
  onBlur={onBlur} // assign onBlur event
  name={name} // assign name prop
  ref={ref} // assign ref prop
/>

// same as above
<input {...register('firstName')} /> */
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="min-h-screen bg-slate-900 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 text-center">
                  <img
                    className="h-28 rounded-full w-28"
                    src={file}
                    alt="userProfile"
                  />

                  <div className="relative text-left">
                    <input
                      autoComplete="off"
                      name="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="UserName"
                      {...register("username", { required: true })}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Username
                    </label>
                    {errors.username && (
                      <span className="errorClass">
                        This username is required
                      </span>
                    )}
                  </div>
                  <div className="relative text-left">
                    <input
                      autoComplete="off"
                      name="password"
                      type="password"
                      aria-labelledby="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    <label
                      htmlFor="password"
                      id="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errors.password && (
                      <span className="errorClass">
                        This password is required
                      </span>
                    )}
                  </div>
                  {/* Optional for user to upload by default avtar image displayed*/}
                  <div className="relative">
                    <input
                      id="small_size"
                      name="file"
                      type="file"
                      onChange={handleChange}
                      className="peer text-sm h-10 w-full border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    />
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
